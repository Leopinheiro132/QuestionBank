"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/pages/register.jsx":
/*!********************************!*\
  !*** ./src/pages/register.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components/Footer */ \"./src/pages/_components/Footer.jsx\");\n/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/Head */ \"./src/pages/_components/Head.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_AiFillEye_AiFillEyeInvisible_react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=AiFillEye,AiFillEyeInvisible!=!react-icons/ai */ \"__barrel_optimize__?names=AiFillEye,AiFillEyeInvisible!=!./node_modules/react-icons/ai/index.mjs\");\n/* harmony import */ var _styles_register_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/register.module.css */ \"./src/styles/register.module.css\");\n/* harmony import */ var _styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction RegisterPage() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [versenha, setVerSenha] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [senhareserva, setSenhareserva] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleRegister = async (event)=>{\n        event.preventDefault();\n        if (!validateEmail(email)) {\n            setError(\"Email no formato inv\\xe1lido\");\n            setTimeout(()=>{\n                setError(\"\");\n            }, 3000);\n            return;\n        }\n        if (!comparaSenha()) {\n            setError(\"Erro ao registrar, senhas n\\xe3o coincidem\");\n            setTimeout(()=>{\n                setError(\"\");\n            }, 3000);\n            return;\n        }\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/register\", {\n                nome: username,\n                password,\n                email\n            });\n            if (response.status === 200) {\n                next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n            } else {\n                setError(\"Erro ao registrar\");\n            }\n        } catch (error) {\n            var _error_response_data, _error_response;\n            setError(((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.error) || \"Erro ao registrar\");\n        }\n        setTimeout(()=>{\n            setError(\"\");\n        }, 3000);\n    };\n    const emailRegex = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;\n    const validateEmail = (email)=>emailRegex.test(email);\n    const comparaSenha = ()=>senhareserva === password;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Head__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                pageTitle: \"registro\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().sec),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().titulo),\n                        children: \"Registro\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().paragraf),\n                        children: \"Preencha os campos abaixo para se cadastrar no QuestionBank\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().error),\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: (_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().form),\n                        onSubmit: handleRegister,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().inputGroup),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Seu Nome:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Nome\",\n                                        value: username,\n                                        onChange: (e)=>setUsername(e.target.value.replace(/[^a-zA-Z0-9]/g, \"\")),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().inputGroup),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Email:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        placeholder: \"Email\",\n                                        value: email,\n                                        onChange: (e)=>setEmail(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().inputGroup),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Senha:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: versenha ? \"text\" : \"password\",\n                                        placeholder: \"Senha\",\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value.replace(/[.*'=\"+<>/|\\\\?]/g, \"\")),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().inputGroup),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"confirma-senha\",\n                                        children: \"Confirme a Senha:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: versenha ? \"text\" : \"password\",\n                                        placeholder: \"Confirma Senha\",\n                                        value: senhareserva,\n                                        onChange: (e)=>setSenhareserva(e.target.value.replace(/[.*'=\"+<>/|\\\\?]/g, \"\")),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().verSenha),\n                                onClick: ()=>setVerSenha(!versenha),\n                                children: [\n                                    \"Mostrar\",\n                                    versenha ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillEye_AiFillEyeInvisible_react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillEyeInvisible, {\n                                        size: 24\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 32\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillEye_AiFillEyeInvisible_react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillEye, {\n                                        size: 24\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 67\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: (_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().btnRegistrar),\n                                children: \"Registrar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SANDRO\\\\Documents\\\\GitHub\\\\QuestionBank\\\\src\\\\pages\\\\register.jsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RegisterPage, \"tdkjPq5ncB58lLDxV4oLTXJBY24=\");\n_c = RegisterPage;\nvar _c;\n$RefreshReg$(_c, \"RegisterPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFDUCw4REFBQ0M7d0NBQ0NDLE1BQU1uQyxXQUFXLFNBQVM7d0NBQzFCb0MsYUFBWTt3Q0FDWkMsT0FBT3ZDO3dDQUNQd0MsVUFBVSxDQUFDQyxJQUFNeEMsWUFBWXdDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDSSxPQUFPLENBQUMsb0JBQW9CO3dDQUN4RUMsUUFBUTs7Ozs7Ozs7Ozs7OzBDQUdaLDhEQUFDbkI7Z0NBQUlDLFdBQVc5QiwrRUFBaUI7O2tEQUMvQiw4REFBQ3VDO3dDQUFNVSxTQUFRO2tEQUFpQjs7Ozs7O2tEQUNoQyw4REFBQ1Q7d0NBQ0NDLE1BQU1uQyxXQUFXLFNBQVM7d0NBQzFCb0MsYUFBWTt3Q0FDWkMsT0FBTy9CO3dDQUNQZ0MsVUFBVSxDQUFDQyxJQUFNaEMsZ0JBQWdCZ0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLLENBQUNJLE9BQU8sQ0FBQyxvQkFBb0I7d0NBQzVFQyxRQUFROzs7Ozs7Ozs7Ozs7MENBR1osOERBQUNuQjtnQ0FBSUMsV0FBVzlCLDZFQUFlO2dDQUFFbUQsU0FBUyxJQUFNNUMsWUFBWSxDQUFDRDs7b0NBQVc7b0NBQzlEQSx5QkFBVyw4REFBQ1Asa0hBQWtCQTt3Q0FBQ3FELE1BQU07Ozs7OzZEQUFTLDhEQUFDdEQseUdBQVNBO3dDQUFDc0QsTUFBTTs7Ozs7Ozs7Ozs7OzBDQUV6RSw4REFBQ0M7Z0NBQU9aLE1BQUs7Z0NBQVNYLFdBQVc5QixpRkFBbUI7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLMUQsOERBQUNQLDBEQUFNQTs7Ozs7OztBQUdiO0dBdkd3QlE7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLmpzeD9jNTdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb290ZXIgZnJvbSAnLi9fY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICcuL19jb21wb25lbnRzL0hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEFpRmlsbEV5ZSwgQWlGaWxsRXllSW52aXNpYmxlIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9yZWdpc3Rlci5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyUGFnZSgpIHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmVyc2VuaGEsIHNldFZlclNlbmhhXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2VuaGFyZXNlcnZhLCBzZXRTZW5oYXJlc2VydmFdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWdpc3RlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdmFsaWRhdGVFbWFpbChlbWFpbCkpIHtcclxuICAgICAgc2V0RXJyb3IoJ0VtYWlsIG5vIGZvcm1hdG8gaW52w6FsaWRvJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldEVycm9yKCcnKTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghY29tcGFyYVNlbmhhKCkpIHtcclxuICAgICAgc2V0RXJyb3IoJ0Vycm8gYW8gcmVnaXN0cmFyLCBzZW5oYXMgbsOjbyBjb2luY2lkZW0nKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoJycpO1xyXG4gICAgICB9LCAzMDAwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3JlZ2lzdGVyJywgeyBub21lOiB1c2VybmFtZSwgcGFzc3dvcmQsIGVtYWlsIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRFcnJvcignRXJybyBhbyByZWdpc3RyYXInKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IucmVzcG9uc2U/LmRhdGE/LmVycm9yIHx8ICdFcnJvIGFvIHJlZ2lzdHJhcicpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldEVycm9yKCcnKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVtYWlsUmVnZXggPSAvXltcXHctXFwuXStAKFtcXHctXStcXC4pK1tcXHctXXsyLDR9JC87XHJcbiAgY29uc3QgdmFsaWRhdGVFbWFpbCA9IChlbWFpbCkgPT4gZW1haWxSZWdleC50ZXN0KGVtYWlsKTtcclxuICBjb25zdCBjb21wYXJhU2VuaGEgPSAoKSA9PiBzZW5oYXJlc2VydmEgPT09IHBhc3N3b3JkO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQgcGFnZVRpdGxlPVwicmVnaXN0cm9cIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY30+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdHVsb30+UmVnaXN0cm88L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFmfT5QcmVlbmNoYSBvcyBjYW1wb3MgYWJhaXhvIHBhcmEgc2UgY2FkYXN0cmFyIG5vIFF1ZXN0aW9uQmFuazwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT57ZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVJlZ2lzdGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRHcm91cH0+XHJcbiAgICAgICAgICAgIDxsYWJlbD5TZXUgTm9tZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgXCJcIikpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRHcm91cH0+XHJcbiAgICAgICAgICAgIDxsYWJlbD5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0R3JvdXB9PlxyXG4gICAgICAgICAgICA8bGFiZWw+U2VuaGE6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT17dmVyc2VuaGEgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9bLionPVwiKzw+L3xcXFxcP10vZywgXCJcIikpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRHcm91cH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybWEtc2VuaGFcIj5Db25maXJtZSBhIFNlbmhhOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9e3ZlcnNlbmhhID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtYSBTZW5oYVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbmhhcmVzZXJ2YX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbmhhcmVzZXJ2YShlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9bLionPVwiKzw+L3xcXFxcP10vZywgXCJcIikpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmVyU2VuaGF9IG9uQ2xpY2s9eygpID0+IHNldFZlclNlbmhhKCF2ZXJzZW5oYSl9PlxyXG4gICAgICAgICAgICBNb3N0cmFye3ZlcnNlbmhhID8gPEFpRmlsbEV5ZUludmlzaWJsZSBzaXplPXsyNH0gLz4gOiA8QWlGaWxsRXllIHNpemU9ezI0fSAvPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnRuUmVnaXN0cmFyfT5cclxuICAgICAgICAgICAgUmVnaXN0cmFyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiAgIl0sIm5hbWVzIjpbIkZvb3RlciIsIkhlYWQiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUm91dGVyIiwiQWlGaWxsRXllIiwiQWlGaWxsRXllSW52aXNpYmxlIiwic3R5bGVzIiwiUmVnaXN0ZXJQYWdlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ2ZXJzZW5oYSIsInNldFZlclNlbmhhIiwiZW1haWwiLCJzZXRFbWFpbCIsImVycm9yIiwic2V0RXJyb3IiLCJzZW5oYXJlc2VydmEiLCJzZXRTZW5oYXJlc2VydmEiLCJoYW5kbGVSZWdpc3RlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZUVtYWlsIiwic2V0VGltZW91dCIsImNvbXBhcmFTZW5oYSIsInJlc3BvbnNlIiwicG9zdCIsIm5vbWUiLCJzdGF0dXMiLCJwdXNoIiwiZGF0YSIsImVtYWlsUmVnZXgiLCJ0ZXN0IiwicGFnZVRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjIiwiaDEiLCJ0aXR1bG8iLCJwIiwicGFyYWdyYWYiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dEdyb3VwIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicmVwbGFjZSIsInJlcXVpcmVkIiwiaHRtbEZvciIsInZlclNlbmhhIiwib25DbGljayIsInNpemUiLCJidXR0b24iLCJidG5SZWdpc3RyYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/register.jsx\n"));

/***/ })

});