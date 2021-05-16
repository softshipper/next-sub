import {Resolvers} from "./generated/resolvers-types";
import Subscription from "./Subscription";


export const resolvers: Resolvers = {
    Query: {
        greet: (parent, args) => {
            return `Hello ${args.name}`;
        }
    },
    Subscription: Subscription
};