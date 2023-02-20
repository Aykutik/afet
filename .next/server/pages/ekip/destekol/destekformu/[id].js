"use strict";
(() => {
var exports = {};
exports.id = 288;
exports.ids = [288];
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

/***/ 1698:
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
/* harmony import */ var _components_FormAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3311);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_Tamamla__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2056);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, _components_ui_Tamamla__WEBPACK_IMPORTED_MODULE_5__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, _components_ui_Tamamla__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react-hooks/rules-of-hooks */ 






function index({ id  }) {
    const [talep, setTalep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [konusu, setKonusu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [tamamlandı, setTamamlandı] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();
    const liste = async ()=>{
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${"http://localhost:3000/api/x7wUk5leY1jv"}/ekip/destekol?getir=${id}&durum=id`);
            setTalep(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
        if (talep[0]?.konu === "ev") {
            console.log("eve geldi");
            setKonusu("Evini Paylaşmak İstiyor");
        } else if (talep[0]?.konu == "malzeme") {} else if (talep.konu == "iş") {}
        console.log("talep.konu");
    };
    const handleSubmit_tamamlaAc = async ()=>{
        if (tamamlandı == false) {
            setTamamlandı(true);
        } else {
            setTamamlandı(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (konusu === "") {
            liste();
        }
    }, [
        konusu
    ]);
    //bugünün tarihini alıyoruz
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    const tarih = yyyy + "-" + mm + "-" + dd;
    const handleSubmit_tamamla = async ()=>{
        // router.push("/ekip/destekol");
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(`${"http://localhost:3000/api/x7wUk5leY1jv"}/ekip/destekol_tamamla?getir=${id}&durum=tamamla&kapatan=${session?.user.name}&kapatmatarihi=${tarih}`);
            setTalep(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    const handleSubmit_sil = ()=>{
    // router.push("/ekip/destekol");
    };
    console.log(konusu);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative z-10 overflow-hidden lg:py-[120px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-1.5 w-full lg:w-1/2 inline-block",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-white border rounded-md px-2 py-2 mb-2 font-bold",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: konusu
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "overflow-hidden border rounded-lg bg-arkaplan",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                        className: "min-w-full divide-y divide-gray-200",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                className: "bg-gray-50 h-8 text-[10pt] text-left tel:text-[9pt]",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    className: "px-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "px-2",
                                                            children: "KİŞİSEL BİLGİLER"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "px-2"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "px-2"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                className: "bg-gray-50 h-8 text-[9pt] text-left tel:text-[9pt]",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    className: "px-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "px-2",
                                                            children: "Ad Soyad"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "px-2",
                                                            children: "İletişim"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "px-2",
                                                            children: "Adres"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                className: "bg-white text-[7pt]",
                                                children: talep.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap",
                                                                children: item.adsoyad
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap",
                                                                children: item.telefon
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap",
                                                                children: item.adres
                                                            })
                                                        ]
                                                    }, talep.id))
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                    className: "min-w-full divide-y divide-gray-200 mt-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                            className: "bg-gray-50 h-8 text-[9pt] text-left tel:text-[9pt]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                className: "px-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "px-2",
                                                        children: "A\xc7IKLAMA"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "px-2"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "px-2"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                            className: "bg-white text-[7pt]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                className: "",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    colSpan: 3,
                                                    className: "px-2 py-2 tel:px-2 tel:py-1 whitespace-pre-line",
                                                    children: talep[0]?.aciklama
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                    className: "min-w-full divide-y divide-gray-200 mt-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                            className: "bg-gray-50 h-8 text-[9pt] text-left tel:text-[9pt]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                className: "px-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "px-2",
                                                        children: "Durum"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "px-2",
                                                        children: talep[0]?.durum === "beklemede" ? "" : "Kapatan"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "px-2",
                                                        children: talep[0]?.durum === "beklemede" ? "" : "Kapatma Tarihi"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "px-2",
                                                        children: talep[0]?.durum === "beklemede" ? "" : "Kapatan A\xe7ıklama"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                            className: "bg-white text-[7pt]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "px-2 py-2 tel:px-2 tel:py-1 whitespace-pre-line",
                                                        children: talep[0]?.durum
                                                    }),
                                                    talep[0]?.durum == "tamamlandı" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "px-2 py-2 tel:px-2 tel:py-1 whitespace-pre-line",
                                                        children: talep[0]?.kapatan
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                    talep[0]?.durum == "tamamlandı" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "px-2 py-2 tel:px-2 tel:py-1 whitespace-pre-line",
                                                        children: (talep[0]?.kapatmatarihi).slice(0, 10)
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                    talep[0]?.durum == "tamamlandı" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "px-2 py-2 tel:px-2 tel:py-1 whitespace-pre-line",
                                                        children: talep[0]?.kapatanaciklama
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {})
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-20 p-1",
                            children: [
                                talep[0]?.durum === "beklemede" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormAction__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        handleSubmit: handleSubmit_tamamlaAc,
                                        text: "Tamamlandı olarak işaretle",
                                        action: "Button"
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            children: "Tamamlandı"
                                        })
                                    })
                                }),
                                talep[0]?.silindi == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormAction__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        handleSubmit: handleSubmit_sil,
                                        text: "Sil",
                                        action: "Button"
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: "Silindi"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            tamamlandı && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Tamamla__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                setTamamlandı: setTamamlandı,
                talep: talep[0],
                kolon: "destekol"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
const getServerSideProps = async ({ params , req  })=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getSession)({
        req
    });
    console.log("session: ", session?.user);
    // const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
    // const user = res.data?.find((user) => user.email === session?.user.email);
    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    return {
        props: {
            // avans: res.data ? res.data : null,
            id: params.id
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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,311,56], () => (__webpack_exec__(1698)));
module.exports = __webpack_exports__;

})();