/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "./pages/api/graphql.ts":
/*!******************************!*\
  !*** ./pages/api/graphql.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; }\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _svc_Services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svc/Services */ \"./svc/Services.ts\");\n/* harmony import */ var _graphql_tools_graphql_file_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @graphql-tools/graphql-file-loader */ \"@graphql-tools/graphql-file-loader\");\n/* harmony import */ var _graphql_tools_graphql_file_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_graphql_tools_graphql_file_loader__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @graphql-tools/schema */ \"@graphql-tools/schema\");\n/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _schema_resolvers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../schema/resolvers */ \"./schema/resolvers.ts\");\n\n\n\n\n\nconst {\n  loadSchemaSync\n} = __webpack_require__(/*! @graphql-tools/load */ \"@graphql-tools/load\");\n\n\n\nconst schema = loadSchemaSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"schema\", \"*.graphql\"), {\n  loaders: [new _graphql_tools_graphql_file_loader__WEBPACK_IMPORTED_MODULE_3__.GraphQLFileLoader()]\n});\nconst schemaWithResolvers = (0,_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_4__.addResolversToSchema)({\n  schema,\n  resolvers: _schema_resolvers__WEBPACK_IMPORTED_MODULE_5__.resolvers\n});\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n  schema: schemaWithResolvers,\n  context: () => new _svc_Services__WEBPACK_IMPORTED_MODULE_2__.Services(),\n  subscriptions: {\n    path: '/api/graphqlSubscriptions',\n    keepAlive: 9000,\n    onConnect: () => console.log('connected'),\n    onDisconnect: () => console.log('disconnected')\n  },\n  playground: {\n    subscriptionEndpoint: '/api/graphqlSubscriptions',\n    settings: {\n      'request.credentials': 'same-origin'\n    }\n  }\n});\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\n\nconst graphqlWithSubscriptionHandler = (req, res) => {\n  const oldOne = res.socket.server.apolloServer;\n\n  if ( //we need compare old apolloServer with newOne, becasue after hot-reload are not equals\n  oldOne && oldOne !== apolloServer) {\n    console.warn('FIXING HOT RELOAD !!!!!!!!!!!!!!! ');\n    delete res.socket.server.apolloServer;\n  }\n\n  if (!res.socket.server.apolloServer) {\n    console.log(`* apolloServer (re)initialization *`);\n    apolloServer.installSubscriptionHandlers(res.socket.server);\n    res.socket.server.apolloServer = apolloServer;\n    const handler = apolloServer.createHandler({\n      path: '/api/graphql'\n    });\n    res.socket.server.apolloServerHandler = handler; //clients losts old connections, but clients are able to reconnect\n\n    oldOne === null || oldOne === void 0 ? void 0 : oldOne.stop();\n  }\n\n  return res.socket.server.apolloServerHandler(req, res);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (graphqlWithSubscriptionHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9hcGkvZ3JhcGhxbC50cz8xNjZiIl0sIm5hbWVzIjpbImxvYWRTY2hlbWFTeW5jIiwicmVxdWlyZSIsInNjaGVtYSIsInBhdGgiLCJwcm9jZXNzIiwiY3dkIiwibG9hZGVycyIsIkdyYXBoUUxGaWxlTG9hZGVyIiwic2NoZW1hV2l0aFJlc29sdmVycyIsImFkZFJlc29sdmVyc1RvU2NoZW1hIiwicmVzb2x2ZXJzIiwiYXBvbGxvU2VydmVyIiwiQXBvbGxvU2VydmVyIiwiY29udGV4dCIsIlNlcnZpY2VzIiwic3Vic2NyaXB0aW9ucyIsImtlZXBBbGl2ZSIsIm9uQ29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvbkRpc2Nvbm5lY3QiLCJwbGF5Z3JvdW5kIiwic3Vic2NyaXB0aW9uRW5kcG9pbnQiLCJzZXR0aW5ncyIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJncmFwaHFsV2l0aFN1YnNjcmlwdGlvbkhhbmRsZXIiLCJyZXEiLCJyZXMiLCJvbGRPbmUiLCJzb2NrZXQiLCJzZXJ2ZXIiLCJ3YXJuIiwiaW5zdGFsbFN1YnNjcmlwdGlvbkhhbmRsZXJzIiwiaGFuZGxlciIsImNyZWF0ZUhhbmRsZXIiLCJhcG9sbG9TZXJ2ZXJIYW5kbGVyIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQUNBO0FBQUQsSUFBbUJDLG1CQUFPLENBQUMsZ0RBQUQsQ0FBaEM7O0FBQ0E7QUFDQTtBQUdBLE1BQU1DLE1BQU0sR0FBR0YsY0FBYyxDQUFDRyxnREFBQSxDQUFVQyxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixRQUF6QixFQUFtQyxXQUFuQyxDQUFELEVBQWtEO0FBQzNFQyxTQUFPLEVBQUUsQ0FDTCxJQUFJQyxpRkFBSixFQURLO0FBRGtFLENBQWxELENBQTdCO0FBT0EsTUFBTUMsbUJBQW1CLEdBQUdDLDJFQUFvQixDQUFDO0FBQzdDUCxRQUQ2QztBQUU3Q1EsV0FBU0E7QUFGb0MsQ0FBRCxDQUFoRDtBQUtBLE1BQU1DLFlBQVksR0FBRyxJQUFJQyw2REFBSixDQUFpQjtBQUNsQ1YsUUFBTSxFQUFFTSxtQkFEMEI7QUFFbENLLFNBQU8sRUFBRSxNQUFNLElBQUlDLG1EQUFKLEVBRm1CO0FBR2xDQyxlQUFhLEVBQUU7QUFDWFosUUFBSSxFQUFFLDJCQURLO0FBRVhhLGFBQVMsRUFBRSxJQUZBO0FBR1hDLGFBQVMsRUFBRSxNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLENBSE47QUFJWEMsZ0JBQVksRUFBRSxNQUFNRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBSlQsR0FIbUI7QUFTbENFLFlBQVUsRUFBRTtBQUNSQyx3QkFBb0IsRUFBRSwyQkFEZDtBQUdSQyxZQUFRLEVBQUU7QUFDTiw2QkFBdUI7QUFEakI7QUFIRjtBQVRzQixDQUFqQixDQUFyQjtBQWtCTyxNQUFNQyxNQUFNLEdBQUc7QUFDbEJDLEtBQUcsRUFBRTtBQUNEQyxjQUFVLEVBQUU7QUFEWDtBQURhLENBQWY7O0FBa0JQLE1BQU1DLDhCQUE4QixHQUFHLENBQ25DQyxHQURtQyxFQUVuQ0MsR0FGbUMsS0FHbEM7QUFDRCxRQUFNQyxNQUFNLEdBQUdELEdBQUcsQ0FBQ0UsTUFBSixDQUFXQyxNQUFYLENBQWtCckIsWUFBakM7O0FBQ0EsT0FDSTtBQUNBbUIsUUFBTSxJQUNOQSxNQUFNLEtBQUtuQixZQUhmLEVBSUU7QUFDRU8sV0FBTyxDQUFDZSxJQUFSLENBQWEsb0NBQWI7QUFDQSxXQUFPSixHQUFHLENBQUNFLE1BQUosQ0FBV0MsTUFBWCxDQUFrQnJCLFlBQXpCO0FBQ0g7O0FBRUQsTUFBSSxDQUFDa0IsR0FBRyxDQUFDRSxNQUFKLENBQVdDLE1BQVgsQ0FBa0JyQixZQUF2QixFQUFxQztBQUNqQ08sV0FBTyxDQUFDQyxHQUFSLENBQWEscUNBQWI7QUFFQVIsZ0JBQVksQ0FBQ3VCLDJCQUFiLENBQXlDTCxHQUFHLENBQUNFLE1BQUosQ0FBV0MsTUFBcEQ7QUFDQUgsT0FBRyxDQUFDRSxNQUFKLENBQVdDLE1BQVgsQ0FBa0JyQixZQUFsQixHQUFpQ0EsWUFBakM7QUFDQSxVQUFNd0IsT0FBTyxHQUFHeEIsWUFBWSxDQUFDeUIsYUFBYixDQUEyQjtBQUFFakMsVUFBSSxFQUFFO0FBQVIsS0FBM0IsQ0FBaEI7QUFDQTBCLE9BQUcsQ0FBQ0UsTUFBSixDQUFXQyxNQUFYLENBQWtCSyxtQkFBbEIsR0FBd0NGLE9BQXhDLENBTmlDLENBT2pDOztBQUNBTCxVQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLFlBQUFBLE1BQU0sQ0FBRVEsSUFBUjtBQUNIOztBQUVELFNBQU9ULEdBQUcsQ0FBQ0UsTUFBSixDQUFXQyxNQUFYLENBQWtCSyxtQkFBbEIsQ0FBc0NULEdBQXRDLEVBQTJDQyxHQUEzQyxDQUFQO0FBQ0gsQ0ExQkQ7O0FBNEJBLCtEQUFlRiw4QkFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9ncmFwaHFsLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcG9sbG9TZXJ2ZXJ9IGZyb20gXCJhcG9sbG8tc2VydmVyLW1pY3JvXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHtTZXJ2aWNlc30gZnJvbSBcIi4uLy4uL3N2Yy9TZXJ2aWNlc1wiO1xuaW1wb3J0IHtHcmFwaFFMRmlsZUxvYWRlcn0gZnJvbSBcIkBncmFwaHFsLXRvb2xzL2dyYXBocWwtZmlsZS1sb2FkZXJcIjtcblxuY29uc3Qge2xvYWRTY2hlbWFTeW5jfSA9IHJlcXVpcmUoXCJAZ3JhcGhxbC10b29scy9sb2FkXCIpO1xuaW1wb3J0IHthZGRSZXNvbHZlcnNUb1NjaGVtYX0gZnJvbSBcIkBncmFwaHFsLXRvb2xzL3NjaGVtYVwiO1xuaW1wb3J0IHtyZXNvbHZlcnN9IGZyb20gXCIuLi8uLi9zY2hlbWEvcmVzb2x2ZXJzXCI7XG5pbXBvcnQge05leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2V9IGZyb20gXCJuZXh0XCJcblxuY29uc3Qgc2NoZW1hID0gbG9hZFNjaGVtYVN5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwic2NoZW1hXCIsIFwiKi5ncmFwaHFsXCIpLCB7XG4gICAgbG9hZGVyczogW1xuICAgICAgICBuZXcgR3JhcGhRTEZpbGVMb2FkZXIoKVxuICAgIF1cbn0pO1xuXG5cbmNvbnN0IHNjaGVtYVdpdGhSZXNvbHZlcnMgPSBhZGRSZXNvbHZlcnNUb1NjaGVtYSh7XG4gICAgc2NoZW1hLFxuICAgIHJlc29sdmVycyxcbn0pO1xuXG5jb25zdCBhcG9sbG9TZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgICBzY2hlbWE6IHNjaGVtYVdpdGhSZXNvbHZlcnMsXG4gICAgY29udGV4dDogKCkgPT4gbmV3IFNlcnZpY2VzKCksXG4gICAgc3Vic2NyaXB0aW9uczoge1xuICAgICAgICBwYXRoOiAnL2FwaS9ncmFwaHFsU3Vic2NyaXB0aW9ucycsXG4gICAgICAgIGtlZXBBbGl2ZTogOTAwMCxcbiAgICAgICAgb25Db25uZWN0OiAoKSA9PiBjb25zb2xlLmxvZygnY29ubmVjdGVkJyksXG4gICAgICAgIG9uRGlzY29ubmVjdDogKCkgPT4gY29uc29sZS5sb2coJ2Rpc2Nvbm5lY3RlZCcpLFxuICAgIH0sXG4gICAgcGxheWdyb3VuZDoge1xuICAgICAgICBzdWJzY3JpcHRpb25FbmRwb2ludDogJy9hcGkvZ3JhcGhxbFN1YnNjcmlwdGlvbnMnLFxuXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAncmVxdWVzdC5jcmVkZW50aWFscyc6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaToge1xuICAgICAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgICB9LFxufTtcblxuXG50eXBlIEN1c3RvbVNvY2tldCA9IEV4Y2x1ZGU8TmV4dEFwaVJlc3BvbnNlPGFueT5bJ3NvY2tldCddLCBudWxsPiAmIHtcbiAgICBzZXJ2ZXI6IFBhcmFtZXRlcnM8QXBvbGxvU2VydmVyWydpbnN0YWxsU3Vic2NyaXB0aW9uSGFuZGxlcnMnXT5bMF0gJiB7XG4gICAgICAgIGFwb2xsb1NlcnZlcj86IEFwb2xsb1NlcnZlclxuICAgICAgICBhcG9sbG9TZXJ2ZXJIYW5kbGVyPzogYW55XG4gICAgfVxufVxuXG50eXBlIEN1c3RvbU5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IE5leHRBcGlSZXNwb25zZTxUPiAmIHtcbiAgICBzb2NrZXQ6IEN1c3RvbVNvY2tldFxufVxuXG5jb25zdCBncmFwaHFsV2l0aFN1YnNjcmlwdGlvbkhhbmRsZXIgPSAoXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgICByZXM6IEN1c3RvbU5leHRBcGlSZXNwb25zZVxuKSA9PiB7XG4gICAgY29uc3Qgb2xkT25lID0gcmVzLnNvY2tldC5zZXJ2ZXIuYXBvbGxvU2VydmVyXG4gICAgaWYgKFxuICAgICAgICAvL3dlIG5lZWQgY29tcGFyZSBvbGQgYXBvbGxvU2VydmVyIHdpdGggbmV3T25lLCBiZWNhc3VlIGFmdGVyIGhvdC1yZWxvYWQgYXJlIG5vdCBlcXVhbHNcbiAgICAgICAgb2xkT25lICYmXG4gICAgICAgIG9sZE9uZSAhPT0gYXBvbGxvU2VydmVyXG4gICAgKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignRklYSU5HIEhPVCBSRUxPQUQgISEhISEhISEhISEhISEhICcpXG4gICAgICAgIGRlbGV0ZSByZXMuc29ja2V0LnNlcnZlci5hcG9sbG9TZXJ2ZXJcbiAgICB9XG5cbiAgICBpZiAoIXJlcy5zb2NrZXQuc2VydmVyLmFwb2xsb1NlcnZlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgKiBhcG9sbG9TZXJ2ZXIgKHJlKWluaXRpYWxpemF0aW9uICpgKVxuXG4gICAgICAgIGFwb2xsb1NlcnZlci5pbnN0YWxsU3Vic2NyaXB0aW9uSGFuZGxlcnMocmVzLnNvY2tldC5zZXJ2ZXIpXG4gICAgICAgIHJlcy5zb2NrZXQuc2VydmVyLmFwb2xsb1NlcnZlciA9IGFwb2xsb1NlcnZlclxuICAgICAgICBjb25zdCBoYW5kbGVyID0gYXBvbGxvU2VydmVyLmNyZWF0ZUhhbmRsZXIoeyBwYXRoOiAnL2FwaS9ncmFwaHFsJyB9KVxuICAgICAgICByZXMuc29ja2V0LnNlcnZlci5hcG9sbG9TZXJ2ZXJIYW5kbGVyID0gaGFuZGxlclxuICAgICAgICAvL2NsaWVudHMgbG9zdHMgb2xkIGNvbm5lY3Rpb25zLCBidXQgY2xpZW50cyBhcmUgYWJsZSB0byByZWNvbm5lY3RcbiAgICAgICAgb2xkT25lPy5zdG9wKClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLnNvY2tldC5zZXJ2ZXIuYXBvbGxvU2VydmVySGFuZGxlcihyZXEsIHJlcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbFdpdGhTdWJzY3JpcHRpb25IYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/graphql.ts\n");

/***/ }),

/***/ "./schema/Subscription.ts":
/*!********************************!*\
  !*** ./schema/Subscription.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Subscription; }\n/* harmony export */ });\nconst Subscription = {\n  counter: {\n    subscribe: (parent, args, ctx) => {\n      let count = 0;\n      setTimeout(() => {\n        count++;\n        ctx.pubSub.publish(\"COUNTER\", count);\n      }, 500);\n      return ctx.pubSub.asyncIterator(\"COUNTER\");\n    }\n  }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zY2hlbWEvU3Vic2NyaXB0aW9uLnRzPzk2ZDUiXSwibmFtZXMiOlsiU3Vic2NyaXB0aW9uIiwiY291bnRlciIsInN1YnNjcmliZSIsInBhcmVudCIsImFyZ3MiLCJjdHgiLCJjb3VudCIsInNldFRpbWVvdXQiLCJwdWJTdWIiLCJwdWJsaXNoIiwiYXN5bmNJdGVyYXRvciJdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE1BQU1BLFlBQW1DLEdBQUc7QUFDeENDLFNBQU8sRUFBRTtBQUNMQyxhQUFTLEVBQUUsQ0FBQ0MsTUFBRCxFQUFTQyxJQUFULEVBQWVDLEdBQWYsS0FBaUM7QUFDeEMsVUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQUMsZ0JBQVUsQ0FBQyxNQUFNO0FBQ2JELGFBQUs7QUFDTEQsV0FBRyxDQUFDRyxNQUFKLENBQVdDLE9BQVgsQ0FBbUIsU0FBbkIsRUFBOEJILEtBQTlCO0FBQ0gsT0FIUyxFQUdQLEdBSE8sQ0FBVjtBQUlBLGFBQU9ELEdBQUcsQ0FBQ0csTUFBSixDQUFXRSxhQUFYLENBQXlCLFNBQXpCLENBQVA7QUFDSDtBQVJJO0FBRCtCLENBQTVDIiwiZmlsZSI6Ii4vc2NoZW1hL1N1YnNjcmlwdGlvbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3Vic2NyaXB0aW9uUmVzb2x2ZXJzfSBmcm9tIFwiLi9nZW5lcmF0ZWQvcmVzb2x2ZXJzLXR5cGVzXCI7XG5pbXBvcnQge1NlcnZpY2VzfSBmcm9tIFwiLi4vc3ZjL1NlcnZpY2VzXCI7XG5cblxuY29uc3QgU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25SZXNvbHZlcnMgPSB7XG4gICAgY291bnRlcjoge1xuICAgICAgICBzdWJzY3JpYmU6IChwYXJlbnQsIGFyZ3MsIGN0eDogU2VydmljZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBjdHgucHViU3ViLnB1Ymxpc2goXCJDT1VOVEVSXCIsIGNvdW50KVxuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIHJldHVybiBjdHgucHViU3ViLmFzeW5jSXRlcmF0b3IoXCJDT1VOVEVSXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7U3Vic2NyaXB0aW9uIGFzIGRlZmF1bHR9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./schema/Subscription.ts\n");

/***/ }),

/***/ "./schema/resolvers.ts":
/*!*****************************!*\
  !*** ./schema/resolvers.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resolvers\": function() { return /* binding */ resolvers; }\n/* harmony export */ });\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ \"./schema/Subscription.ts\");\n\nconst resolvers = {\n  Query: {\n    greet: (parent, args) => {\n      return `Hello ${args.name}`;\n    }\n  },\n  Subscription: _Subscription__WEBPACK_IMPORTED_MODULE_0__.default\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zY2hlbWEvcmVzb2x2ZXJzLnRzP2FkMTUiXSwibmFtZXMiOlsicmVzb2x2ZXJzIiwiUXVlcnkiLCJncmVldCIsInBhcmVudCIsImFyZ3MiLCJuYW1lIiwiU3Vic2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBR08sTUFBTUEsU0FBb0IsR0FBRztBQUNoQ0MsT0FBSyxFQUFFO0FBQ0hDLFNBQUssRUFBRSxDQUFDQyxNQUFELEVBQVNDLElBQVQsS0FBa0I7QUFDckIsYUFBUSxTQUFRQSxJQUFJLENBQUNDLElBQUssRUFBMUI7QUFDSDtBQUhFLEdBRHlCO0FBTWhDQyxjQUFZLEVBQUVBLGtEQUFZQTtBQU5NLENBQTdCIiwiZmlsZSI6Ii4vc2NoZW1hL3Jlc29sdmVycy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVzb2x2ZXJzfSBmcm9tIFwiLi9nZW5lcmF0ZWQvcmVzb2x2ZXJzLXR5cGVzXCI7XG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gXCIuL1N1YnNjcmlwdGlvblwiO1xuXG5cbmV4cG9ydCBjb25zdCByZXNvbHZlcnM6IFJlc29sdmVycyA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICBncmVldDogKHBhcmVudCwgYXJncykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBIZWxsbyAke2FyZ3MubmFtZX1gO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./schema/resolvers.ts\n");

/***/ }),

/***/ "./svc/Services.ts":
/*!*************************!*\
  !*** ./svc/Services.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Services\": function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var graphql_subscriptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-subscriptions */ \"graphql-subscriptions\");\n/* harmony import */ var graphql_subscriptions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_subscriptions__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nclass Services {\n  constructor() {\n    _defineProperty(this, \"pubSub\", new graphql_subscriptions__WEBPACK_IMPORTED_MODULE_0__.PubSub());\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zdmMvU2VydmljZXMudHM/Y2FlMiJdLCJuYW1lcyI6WyJTZXJ2aWNlcyIsIlB1YlN1YiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUdPLE1BQU1BLFFBQU4sQ0FBZTtBQUFBO0FBQUEsb0NBQ1QsSUFBSUMseURBQUosRUFEUztBQUFBOztBQUFBIiwiZmlsZSI6Ii4vc3ZjL1NlcnZpY2VzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHViU3ViIH0gZnJvbSBcImdyYXBocWwtc3Vic2NyaXB0aW9uc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlcyB7XG4gICAgcHViU3ViID0gbmV3IFB1YlN1YigpO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./svc/Services.ts\n");

/***/ }),

/***/ "@graphql-tools/graphql-file-loader":
/*!*****************************************************!*\
  !*** external "@graphql-tools/graphql-file-loader" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@graphql-tools/graphql-file-loader");;

/***/ }),

/***/ "@graphql-tools/load":
/*!**************************************!*\
  !*** external "@graphql-tools/load" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@graphql-tools/load");;

/***/ }),

/***/ "@graphql-tools/schema":
/*!****************************************!*\
  !*** external "@graphql-tools/schema" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@graphql-tools/schema");;

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-server-micro");;

/***/ }),

/***/ "graphql-subscriptions":
/*!****************************************!*\
  !*** external "graphql-subscriptions" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-subscriptions");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/graphql.ts"));
module.exports = __webpack_exports__;

})();