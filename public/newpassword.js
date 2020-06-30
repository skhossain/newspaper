(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newpassword"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fontend/newpassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fontend/newpassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: this.$route.query.email,
      token: this.$route.params.token,
      password: "",
      password_confirmation: ""
    };
  },
  methods: {
    changePassword: function changePassword() {
      var _this = this;

      axios.post('/password/reset', {
        token: this.token,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(function (Response) {
        axios.post('/logout').then(function (Response) {
          _this.$router.push('/login?changed=Your password successfully changed.');
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fontend/newpassword.vue?vue&type=template&id=1ff07edd&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fontend/newpassword.vue?vue&type=template&id=1ff07edd& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Reset Password")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.changePassword($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-4 col-form-label text-md-right",
                      attrs: { for: "email" }
                    },
                    [_vm._v("E-Mail Address")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.email,
                          expression: "email"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "email", required: "" },
                      domProps: { value: _vm.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.email = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-4 col-form-label text-md-right",
                      attrs: { for: "password" }
                    },
                    [_vm._v("Password")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.password,
                          expression: "password"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "password", required: "" },
                      domProps: { value: _vm.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.password = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-4 col-form-label text-md-right",
                      attrs: { for: "password-confirm" }
                    },
                    [_vm._v("Confirm Password")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.password_confirmation,
                          expression: "password_confirmation"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "password", required: "" },
                      domProps: { value: _vm.password_confirmation },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.password_confirmation = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _vm._m(0)
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row mb-0" }, [
      _c("div", { staticClass: "col-md-6 offset-md-4" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [
            _vm._v(
              "\n                                    Reset Password\n                                "
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/fontend/newpassword.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/fontend/newpassword.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newpassword_vue_vue_type_template_id_1ff07edd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newpassword.vue?vue&type=template&id=1ff07edd& */ "./resources/js/components/fontend/newpassword.vue?vue&type=template&id=1ff07edd&");
/* harmony import */ var _newpassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newpassword.vue?vue&type=script&lang=js& */ "./resources/js/components/fontend/newpassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _newpassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newpassword_vue_vue_type_template_id_1ff07edd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newpassword_vue_vue_type_template_id_1ff07edd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fontend/newpassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/fontend/newpassword.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/fontend/newpassword.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newpassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./newpassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fontend/newpassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newpassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/fontend/newpassword.vue?vue&type=template&id=1ff07edd&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/fontend/newpassword.vue?vue&type=template&id=1ff07edd& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newpassword_vue_vue_type_template_id_1ff07edd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./newpassword.vue?vue&type=template&id=1ff07edd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fontend/newpassword.vue?vue&type=template&id=1ff07edd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newpassword_vue_vue_type_template_id_1ff07edd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newpassword_vue_vue_type_template_id_1ff07edd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);