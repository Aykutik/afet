"use strict";
(() => {
var exports = {};
exports.id = 426;
exports.ids = [426];
exports.modules = {

/***/ 7180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./components/layout/destekal/index.jsx
var destekal = __webpack_require__(4624);
// EXTERNAL MODULE: ./components/FormAction.jsx
var FormAction = __webpack_require__(3311);
// EXTERNAL MODULE: ./components/Input.jsx
var Input = __webpack_require__(3736);
;// CONCATENATED MODULE: ./constants/ekipgirisFields.js
const ekipgirisFields = [
    {
        labelText: "Kulalnıcı Adı",
        labelFor: "kullanici-adi",
        id: "kullaniciadi",
        name: "kullaniciadi",
        type: "text",
        isRequired: true,
        placeholder: "Kullanıcı adınızı giriniz"
    },
    {
        labelText: "Parola",
        labelFor: "parola",
        id: "parola",
        name: "parola",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Parolanızı giriniz"
    }
];
/* harmony default export */ const constants_ekipgirisFields = (ekipgirisFields);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/ekip/index.js
/* eslint-disable react-hooks/rules-of-hooks */ //client side
"use client";


// useeffect hook ekleyeceğim







const fields = constants_ekipgirisFields;
let fieldsState = {};
fields.forEach((field)=>fieldsState[field.id] = "");
function login() {
    const { data: session  } = (0,react_.useSession)();
    console.log(session);
    const router = (0,router_.useRouter)();
    const [bilgi, setBilgi] = (0,external_react_.useState)(fieldsState);
    const handleChange = (e)=>{
        setBilgi({
            ...bilgi,
            [e.target.id]: e.target.value
        });
    };
    const handleSubmit = async ()=>{
        console.log("onsubmit'e geldi");
        const kullaniciadi = bilgi.kullaniciadi;
        const password = bilgi.parola;
        let options = {
            redirect: true,
            kullaniciadi,
            password
        };
        try {
            const res = await (0,react_.signIn)("credentials", options);
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative z-10 overflow-hiddenlg:py-[120px]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: " flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-md w-80 space-y-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(destekal/* default */.Z, {
                        heading: "Ekip Girişi"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: "space-y-6",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: fields.map((field)=>/*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                        handleChange: handleChange,
                                        value: bilgi[field.id],
                                        labelText: field.labelText,
                                        labelFor: field.labelFor,
                                        id: field.id,
                                        name: field.name,
                                        type: field.type,
                                        isRequired: field.isRequired,
                                        placeholder: field.placeholder
                                    }, field.id))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(FormAction/* default */.Z, {
                                handleSubmit: handleSubmit,
                                tur: "fosrm",
                                text: "Giriş Yap"
                            })
                        ]
                    })
                ]
            })
        })
    });
}
async function getServerSideProps({ req  }) {
    const session = await (0,react_.getSession)({
        req
    });
    console.log("session: ", session?.user);
    // const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
    // const user = res.data?.find((user) => user.email === session?.user.email);
    if (session) {
        return {
            redirect: {
                destination: "/ekip/admin",
                permanent: false
            }
        };
    }
    return {
        props: {}
    };
}


/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,311,892], () => (__webpack_exec__(7180)));
module.exports = __webpack_exports__;

})();