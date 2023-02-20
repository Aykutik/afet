"use strict";
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 2056:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2279);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_8__]);
([axios__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Tamamla = ({ setTamamlandı , talep , kolon  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const [aciklama, setAciklama] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    console.log("talep");
    console.log(talep);
    //bugünün tarihini alıyoruz
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    const tarih = yyyy + "-" + mm + "-" + dd;
    const handleSubmit_tamamla = async ()=>{
        let tablo = "";
        if (kolon == "destekal") {
            tablo = "destekal_tamamla";
        } else if (kolon == "destekol") {
            tablo = "destekol_tamamla";
        }
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(`${"http://localhost:3000/api/x7wUk5leY1jv"}/ekip/${tablo}?getir=${talep.id}&durum=tamamla&kapatan=${session?.user.name}&kapatmatarihi=${tarih}&kapatanaciklama=${aciklama}`);
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Talep Tamamlandı");
            //talepler sayfasına yöndereceğiz
            router.push("/ekip/admin");
            setTamamlandı(false);
        } catch (err) {
            console.log(err);
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Talep Tamamlanamadı");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3___default()), {
            onOutsideClick: ()=>setTamamlandı(false),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full h-full grid place-content-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 text-center rounded-3xl",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-2xl font-bold mb-5",
                            children: "Talebi Tamamla"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    onChange: (e)=>setAciklama(e.target.value),
                                    type: "text",
                                    className: "w-full border-2 border-gray-300 p-2 rounded-md mb-5",
                                    placeholder: "A\xe7ıklama"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        onClick: handleSubmit_tamamla,
                                        className: "items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            children: "Tamamla"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "absolute top-4 right-4",
                            onClick: ()=>setTamamlandı(false),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCloseCircle, {
                                className: "hover:text-primary transation-all"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tamamla);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;