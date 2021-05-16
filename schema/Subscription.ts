import {SubscriptionResolvers} from "./generated/resolvers-types";
import {Services} from "../svc/Services";


const Subscription: SubscriptionResolvers = {
    counter: {
        subscribe: (parent, args, ctx: Services) => {
            let count = 0
            setTimeout(() => {
                count++
                ctx.pubSub.publish("COUNTER", count)
            }, 500);
            return ctx.pubSub.asyncIterator("COUNTER");
        }
    }
}


export {Subscription as default}