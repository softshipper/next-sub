import {ApolloServer} from "apollo-server-micro";
import path from "path";
import {Services} from "../../svc/Services";
import {GraphQLFileLoader} from "@graphql-tools/graphql-file-loader";

const {loadSchemaSync} = require("@graphql-tools/load");
import {addResolversToSchema} from "@graphql-tools/schema";
import {resolvers} from "../../schema/resolvers";
import {NextApiRequest, NextApiResponse} from "next"

const schema = loadSchemaSync(path.join(process.cwd(), "schema", "*.graphql"), {
    loaders: [
        new GraphQLFileLoader()
    ]
});


const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers,
});

const apolloServer = new ApolloServer({
    schema: schemaWithResolvers,
    context: () => new Services(),
    subscriptions: {
        path: '/api/graphqlSubscriptions',
        keepAlive: 9000,
        onConnect: () => console.log('connected'),
        onDisconnect: () => console.log('disconnected'),
    },
    playground: {
        subscriptionEndpoint: '/api/graphqlSubscriptions',

        settings: {
            'request.credentials': 'same-origin',
        },
    },
});

export const config = {
    api: {
        bodyParser: false,
    },
};


type CustomSocket = Exclude<NextApiResponse<any>['socket'], null> & {
    server: Parameters<ApolloServer['installSubscriptionHandlers']>[0] & {
        apolloServer?: ApolloServer
        apolloServerHandler?: any
    }
}

type CustomNextApiResponse<T = any> = NextApiResponse<T> & {
    socket: CustomSocket
}

const graphqlWithSubscriptionHandler = (
    req: NextApiRequest,
    res: CustomNextApiResponse
) => {
    const oldOne = res.socket.server.apolloServer
    if (
        //we need compare old apolloServer with newOne, becasue after hot-reload are not equals
        oldOne &&
        oldOne !== apolloServer
    ) {
        console.warn('FIXING HOT RELOAD !!!!!!!!!!!!!!! ')
        delete res.socket.server.apolloServer
    }

    if (!res.socket.server.apolloServer) {
        console.log(`* apolloServer (re)initialization *`)

        apolloServer.installSubscriptionHandlers(res.socket.server)
        res.socket.server.apolloServer = apolloServer
        const handler = apolloServer.createHandler({ path: '/api/graphql' })
        res.socket.server.apolloServerHandler = handler
        //clients losts old connections, but clients are able to reconnect
        oldOne?.stop()
    }

    return res.socket.server.apolloServerHandler(req, res)
}

export default graphqlWithSubscriptionHandler