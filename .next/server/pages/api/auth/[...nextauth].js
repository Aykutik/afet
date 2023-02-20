"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Credentials\",\n            async authorize (credentials, req) {\n                const kullaniciadi = credentials.kullaniciadi;\n                const password = credentials.password;\n                console.log(\"username :\" + kullaniciadi);\n                console.log(\"password :\" + password);\n                // prisma ile veritabanından username ile eşleşen kullanıcıyı çekiyoruz\n                const user = await prisma.User.findUnique({\n                    where: {\n                        pertcno: kullaniciadi\n                    }\n                });\n                console.log(user);\n                if (user == null || user == \"\" || user == [] || user == {} || user == undefined || user == \"undefined\") {\n                    throw new Error(\"You haven't registered yet!\");\n                } else {\n                    return getUser({\n                        user,\n                        password\n                    });\n                }\n            }\n        })\n    ],\n    // A database is optional, but required to persist accounts in a database\n    database: process.env.DATABASE_URL,\n    pages: {\n        signIn: \"/auth/login\",\n        signOut: \"/auth/logout\"\n    },\n    secret: \"secret\",\n    session: {\n        jwt: true\n    }\n};\nconst signInUser = async ({ user  })=>{\n    return user;\n};\nconst getUser = async ({ user , password  })=>{\n    // user'in username'ini çekiyoruz\n    if (password === user.password) {\n        console.log(\"user: \" + user);\n        console.log(\"user: \" + user.email);\n        return user;\n    } else {\n        throw new Error(\"Wrong password!\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2lDO0FBQ3BCO0FBRTlDLE1BQU1HLFNBQVMsSUFBSUQsd0RBQVlBO0FBRXhCLE1BQU1FLGNBQWM7SUFDekIsaURBQWlEO0lBQ2pEQyxXQUFXO1FBQ1RKLHNFQUFtQkEsQ0FBQztZQUNsQkssTUFBTTtZQUNOLE1BQU1DLFdBQVVDLFdBQVcsRUFBRUMsR0FBRyxFQUFFO2dCQUNoQyxNQUFNQyxlQUFlRixZQUFZRSxZQUFZO2dCQUM3QyxNQUFNQyxXQUFXSCxZQUFZRyxRQUFRO2dCQUNyQ0MsUUFBUUMsR0FBRyxDQUFDLGVBQWVIO2dCQUMzQkUsUUFBUUMsR0FBRyxDQUFDLGVBQWVGO2dCQUMzQix1RUFBdUU7Z0JBQ3ZFLE1BQU1HLE9BQU8sTUFBTVgsT0FBT1ksSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3hDQyxPQUFPO3dCQUNMQyxTQUFTUjtvQkFDWDtnQkFDRjtnQkFDQUUsUUFBUUMsR0FBRyxDQUFDQztnQkFDWixJQUNFQSxRQUFRLElBQUksSUFDWkEsUUFBUSxNQUNSQSxRQUFRLEVBQUUsSUFDVkEsUUFBUSxDQUFDLEtBQ1RBLFFBQVFLLGFBQ1JMLFFBQVEsYUFDUjtvQkFDQSxNQUFNLElBQUlNLE1BQU0sK0JBQStCO2dCQUNqRCxPQUFPO29CQUNMLE9BQU9DLFFBQVE7d0JBQUVQO3dCQUFNSDtvQkFBUztnQkFDbEMsQ0FBQztZQUNIO1FBQ0Y7S0FJRDtJQUNELHlFQUF5RTtJQUN6RVcsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxZQUFZO0lBQ2xDQyxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsU0FBUztJQUNYO0lBQ0FDLFFBQVE7SUFDUkMsU0FBUztRQUNQQyxLQUFLLElBQUk7SUFDWDtBQUVGLEVBQUU7QUFFRixNQUFNQyxhQUFhLE9BQU8sRUFBRWxCLEtBQUksRUFBRSxHQUFLO0lBQ3JDLE9BQU9BO0FBQ1Q7QUFFQSxNQUFNTyxVQUFVLE9BQU8sRUFBRVAsS0FBSSxFQUFFSCxTQUFRLEVBQUUsR0FBSztJQUM1QyxpQ0FBaUM7SUFDakMsSUFBSUEsYUFBYUcsS0FBS0gsUUFBUSxFQUFFO1FBQzlCQyxRQUFRQyxHQUFHLENBQUMsV0FBV0M7UUFDdkJGLFFBQVFDLEdBQUcsQ0FBQyxXQUFXQyxLQUFLbUIsS0FBSztRQUNqQyxPQUFPbkI7SUFDVCxPQUFPO1FBQ0wsTUFBTSxJQUFJTSxNQUFNLG1CQUFtQjtJQUNyQyxDQUFDO0FBQ0g7QUFFQSxpRUFBZXBCLGdEQUFRQSxDQUFDSSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lyaWtlcnBvcnRhbC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG4gICAgICAgIGNvbnN0IGt1bGxhbmljaWFkaSA9IGNyZWRlbnRpYWxzLmt1bGxhbmljaWFkaTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZCA9IGNyZWRlbnRpYWxzLnBhc3N3b3JkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlcm5hbWUgOlwiICsga3VsbGFuaWNpYWRpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIDpcIiArIHBhc3N3b3JkKTtcclxuICAgICAgICAvLyBwcmlzbWEgaWxlIHZlcml0YWJhbsSxbmRhbiB1c2VybmFtZSBpbGUgZcWfbGXFn2VuIGt1bGxhbsSxY8SxecSxIMOnZWtpeW9ydXpcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLlVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBwZXJ0Y25vOiBrdWxsYW5pY2lhZGksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHVzZXIgPT0gbnVsbCB8fFxyXG4gICAgICAgICAgdXNlciA9PSBcIlwiIHx8XHJcbiAgICAgICAgICB1c2VyID09IFtdIHx8XHJcbiAgICAgICAgICB1c2VyID09IHt9IHx8XHJcbiAgICAgICAgICB1c2VyID09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgdXNlciA9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgaGF2ZW4ndCByZWdpc3RlcmVkIHlldCFcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBnZXRVc2VyKHsgdXNlciwgcGFzc3dvcmQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gdXNlciDDp8Sxa8SxxZ8gxZ9sZW1pbmkgZ2Vyw6dla2xlxZ90aXJpeW9ydXpcclxuICAgIC8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL3Byb3ZpZGVycyNzaWdub3V0LWNhbGxiYWNrXHJcbiAgXSxcclxuICAvLyBBIGRhdGFiYXNlIGlzIG9wdGlvbmFsLCBidXQgcmVxdWlyZWQgdG8gcGVyc2lzdCBhY2NvdW50cyBpbiBhIGRhdGFiYXNlXHJcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiBcIi9hdXRoL2xvZ2luXCIsXHJcbiAgICBzaWduT3V0OiBcIi9hdXRoL2xvZ291dFwiLFxyXG4gIH0sXHJcbiAgc2VjcmV0OiBcInNlY3JldFwiLFxyXG4gIHNlc3Npb246IHtcclxuICAgIGp3dDogdHJ1ZSxcclxuICB9LFxyXG4gXHJcbn07XHJcblxyXG5jb25zdCBzaWduSW5Vc2VyID0gYXN5bmMgKHsgdXNlciB9KSA9PiB7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVc2VyID0gYXN5bmMgKHsgdXNlciwgcGFzc3dvcmQgfSkgPT4ge1xyXG4gIC8vIHVzZXInaW4gdXNlcm5hbWUnaW5pIMOnZWtpeW9ydXpcclxuICBpZiAocGFzc3dvcmQgPT09IHVzZXIucGFzc3dvcmQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlcjogXCIgKyB1c2VyKTtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlcjogXCIgKyB1c2VyLmVtYWlsKTtcclxuICAgIHJldHVybiB1c2VyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBwYXNzd29yZCFcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJyZXEiLCJrdWxsYW5pY2lhZGkiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiVXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInBlcnRjbm8iLCJ1bmRlZmluZWQiLCJFcnJvciIsImdldFVzZXIiLCJkYXRhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJwYWdlcyIsInNpZ25JbiIsInNpZ25PdXQiLCJzZWNyZXQiLCJzZXNzaW9uIiwiand0Iiwic2lnbkluVXNlciIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();