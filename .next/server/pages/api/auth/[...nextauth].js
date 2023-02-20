"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 2509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "authOptions": () => (/* binding */ authOptions),
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(3524);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js



const prisma = new client_.PrismaClient();
const authOptions = {
    // Configure one or more authentication providers
    providers: [
        credentials_default()({
            name: "Credentials",
            async authorize (credentials, req) {
                const kullaniciadi = credentials.kullaniciadi;
                const password = credentials.password;
                console.log("username :" + kullaniciadi);
                console.log("password :" + password);
                // prisma ile veritabanından username ile eşleşen kullanıcıyı çekiyoruz
                const user = await prisma.User.findUnique({
                    where: {
                        pertcno: kullaniciadi
                    }
                });
                console.log(user);
                if (user == null || user == "" || user == [] || user == {} || user == undefined || user == "undefined") {
                    throw new Error("You haven't registered yet!");
                } else {
                    return getUser({
                        user,
                        password
                    });
                }
            }
        })
    ],
    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
    pages: {
        signIn: "/auth/login",
        signOut: "/auth/logout"
    },
    secret: "secret",
    session: {
        jwt: true
    }
};
const signInUser = async ({ user  })=>{
    return user;
};
const getUser = async ({ user , password  })=>{
    // user'in username'ini çekiyoruz
    if (password === user.password) {
        console.log("user: " + user);
        console.log("user: " + user.email);
        return user;
    } else {
        throw new Error("Wrong password!");
    }
};
/* harmony default export */ const _nextauth_ = (external_next_auth_default()(authOptions));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2509));
module.exports = __webpack_exports__;

})();