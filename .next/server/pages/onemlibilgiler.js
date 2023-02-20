"use strict";
(() => {
var exports = {};
exports.id = 548;
exports.ids = [548];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 7954:
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










const Tamamla = ({ setEkleOn  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const [birim, setBirim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [telefon, setTelefon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [aciklama, setAciklama] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    //bugünün tarihini alıyoruz
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    const tarih = yyyy + "-" + mm + "-" + dd;
    const handleSubmit_tamamla = async ()=>{
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(`${"http://localhost:3000/api/x7wUk5leY1jv"}/ekip/onemlibilgiler?getir=telefon&birim=${birim}&telefon=${telefon}&aciklama=${aciklama}&ekleyen=${session?.user.name}&eklenmetarihi=${tarih}`);
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Telefon başarıyla eklendi");
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.info("Onaylandıktan sonra listelenecektir", {
                delay: 730
            });
            router.push("/onemlibilgiler");
            setEkleOn(false);
        } catch (err) {
            console.log(err);
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
                                    onChange: (e)=>setBirim(e.target.value),
                                    type: "text",
                                    className: "w-full border-2 border-gray-300 p-2 rounded-md mb-5",
                                    placeholder: "Birim adı"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    onChange: (e)=>setTelefon(e.target.value),
                                    type: "text",
                                    className: "w-full border-2 border-gray-300 p-2 rounded-md mb-5",
                                    placeholder: "Telefon"
                                }),
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
                            onClick: ()=>setEkleOn(false),
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

/***/ }),

/***/ 9477:
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










const Tamamla = ({ setEkleOn_web  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const [birim, setBirim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [web, setWeb] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [aciklama, setAciklama] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    //bugünün tarihini alıyoruz
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    const tarih = yyyy + "-" + mm + "-" + dd;
    const handleSubmit_tamamla = async ()=>{
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(`${"http://localhost:3000/api/x7wUk5leY1jv"}/ekip/onemlibilgiler?getir=web&birim=${birim}&web=${web}&aciklama=${aciklama}&ekleyen=${session?.user.name}&eklenmetarihi=${tarih}`);
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Web sitesi eklendi");
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.info("Onaylandıktan sonra listelenecektir", {
                delay: 730
            });
            router.push("/onemlibilgiler");
            setEkleOn_web(false);
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3___default()), {
            onOutsideClick: ()=>setEkleOn_web(false),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full h-full grid place-content-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 text-center rounded-3xl",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-2xl font-bold mb-5",
                            children: "Web sitesi ekle"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    onChange: (e)=>setBirim(e.target.value),
                                    type: "text",
                                    className: "w-full border-2 border-gray-300 p-2 rounded-md mb-5",
                                    placeholder: "Birim adı"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    onChange: (e)=>setWeb(e.target.value),
                                    type: "text",
                                    className: "w-full border-2 border-gray-300 p-2 rounded-md mb-5",
                                    placeholder: "Web sitesi"
                                }),
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
                            onClick: ()=>setEkleOn_web(false),
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

/***/ }),

/***/ 5602:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_FormAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3311);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_Tel_ekle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7954);
/* harmony import */ var _components_ui_Web_ekle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9477);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__, _components_ui_Tel_ekle__WEBPACK_IMPORTED_MODULE_6__, _components_ui_Web_ekle__WEBPACK_IMPORTED_MODULE_7__]);
([axios__WEBPACK_IMPORTED_MODULE_4__, _components_ui_Tel_ekle__WEBPACK_IMPORTED_MODULE_6__, _components_ui_Web_ekle__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react-hooks/rules-of-hooks */ 








function index() {
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    const [ekleOn, setEkleOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [ekleOn_web, setEkleOn_web] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [birimler, setBirimler] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [web, setWeb] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const ekleAc = async ()=>{
        if (ekleOn == false) {
            setEkleOn(true);
        } else {
            setEkleOn(false);
        }
    };
    const ekleAc_web = async ()=>{
        if (ekleOn == false) {
            setEkleOn_web(true);
        } else {
            setEkleOn_web(false);
        }
    };
    const liste_telefon = async ()=>{
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${"http://localhost:3000/api/x7wUk5leY1jv"}/ekip/onemlibilgiler?getir=telefon`);
            setBirimler(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    const liste_web = async ()=>{
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${"http://localhost:3000/api/x7wUk5leY1jv"}/ekip/onemlibilgiler?getir=web`);
            setWeb(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        liste_telefon();
        liste_web();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative z-10 overflow-hidden lg:py-[120px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center justify-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-auto flex flex-col lg:flex-row w-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-1.5 w-full lg:w-1/2 inline-block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-white shadow border rounded-md px-2 py-2 mb-2 font-bold",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: "Telefon Numaraları"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "overflow-hidden shadow border rounded-lg bg-arkaplan",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                            className: "min-w-full divide-y border shadow-md divide-gray-200 ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                    className: "bg-white h-8 text-[11pt] text-left tel:text-[9pt]",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "px-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "px-2",
                                                                children: "Birim"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                children: "Telefon"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                    className: "bg-white",
                                                    children: birimler.map((birim)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                            className: "text-[10pt] tel:text-[8pt]",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    className: "px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap",
                                                                    children: birim.birim
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    className: "px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap",
                                                                    children: birim.telefon
                                                                })
                                                            ]
                                                        }, birim.id))
                                                })
                                            ]
                                        })
                                    }),
                                    session && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormAction__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            handleSubmit: ekleAc,
                                            text: "Ekle",
                                            action: "Button"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-1.5 w-full inline-block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-white shadow border rounded-md px-2 py-2 mb-2 font-bold",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: "İnternet Siteleri"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "overflow-hidden shadow border rounded-lg bg-arkaplan",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                            className: "min-w-full divide-y divide-gray-200",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                    className: "bg-gray-50 h-8 text-[11pt] text-left tel:text-[9pt]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                        className: "px-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "px-2",
                                                            children: "Birim"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                    className: "bg-white",
                                                    children: web.map((web)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                            className: "text-[10pt] tel:text-[8pt]",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: web.web,
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: web.birim
                                                                })
                                                            })
                                                        }, web.id))
                                                })
                                            ]
                                        })
                                    }),
                                    session && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormAction__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            handleSubmit: ekleAc_web,
                                            text: "Ekle",
                                            action: "Button"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            ekleOn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Tel_ekle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                setEkleOn: setEkleOn
            }),
            ekleOn_web && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Web_ekle__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                setEkleOn_web: setEkleOn_web
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
const getServerSideProps = async ({ req  })=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.getSession)({
        req
    });
    // const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
    // const user = res.data?.find((user) => user.email === session?.user.email);
    return {
        props: {
            session
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 2279:
/***/ ((module) => {

module.exports = require("react-outside-click-handler");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,311], () => (__webpack_exec__(5602)));
module.exports = __webpack_exports__;

})();