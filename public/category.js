(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/category.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/category.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
      name: "",
      status: "",
      edit_category_id: ""
    };
  },
  mounted: function mounted() {
    this.get_categories();
  },
  methods: {
    get_categories: function get_categories() {
      var _this = this;

      axios.post('/admin/allcategories').then(function (response) {
        console.log(response.data);

        _this.$store.commit('categories', response.data);
      });
    },
    newcategory: function newcategory() {
      var _this2 = this;

      axios.post('/admin/newcategory', {
        name: this.name
      }).then(function (response) {
        _this2.$store.commit('addnew_category_item', response.data);

        _this2.name = "";
      })["catch"](function (error) {
        console.log(error);
      });
    },
    select_category: function select_category(id) {
      var category = this.categories.find(function (c) {
        return c.id == id;
      });
      this.edit_category_id = id;
      this.name = category.name;
      this.status = category.status;
    },
    editcategory: function editcategory() {
      var _this3 = this;

      axios.post('/admin/editcategory', {
        id: this.edit_category_id,
        name: this.name,
        status: this.status
      }).then(function (response) {
        var category = _this3.categories.find(function (c) {
          return c.id == _this3.edit_category_id;
        });

        category.name = _this3.name;
        category.status = _this3.status;
        _this3.edit_category_id = "";
        _this3.name = "";
        _this3.status = "";
      });
    },
    clear_category: function clear_category() {
      this.edit_category_id = "";
      this.name = "";
      this.status = "";
    }
  },
  computed: {
    categories: function categories() {
      return this.$store.getters.categories;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/category.vue?vue&type=template&id=e549f86e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/category.vue?vue&type=template&id=e549f86e& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Home")])],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Category")
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content row m-3" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _vm.edit_category_id
          ? _c("div", { staticClass: "card" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("label", [_vm._v("Category Name")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.name,
                      expression: "name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "name" },
                  domProps: { value: _vm.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.name = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", [_vm._v("Status")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.status,
                        expression: "status"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.status = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "1" } }, [_vm._v("Active")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "0" } }, [
                      _vm._v("Inactive")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info",
                    on: {
                      click: function($event) {
                        return _vm.clear_category()
                      }
                    }
                  },
                  [_vm._v("Create new")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    on: {
                      click: function($event) {
                        return _vm.editcategory()
                      }
                    }
                  },
                  [_vm._v("Save change")]
                )
              ])
            ])
          : _c("div", { staticClass: "card" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("label", [_vm._v("Category Name")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.name,
                      expression: "name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "name" },
                  domProps: { value: _vm.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.name = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    on: {
                      click: function($event) {
                        return _vm.newcategory()
                      }
                    }
                  },
                  [_vm._v("Create")]
                )
              ])
            ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(3),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "card-body",
              staticStyle: { "overflow-y": "scroll", "max-height": "300px" }
            },
            [
              _c(
                "table",
                { staticClass: "table" },
                [
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._l(_vm.categories, function(category, index) {
                    return _c("tr", { key: index }, [
                      _c("td", [_vm._v(_vm._s(index + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(category.name))]),
                      _vm._v(" "),
                      _c("td", [
                        category.status == 1
                          ? _c("span", [_vm._v("Active")])
                          : _vm._e(),
                        _vm._v(" "),
                        category.status == 0
                          ? _c("span", [_vm._v("Ivactive")])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            on: {
                              click: function($event) {
                                return _vm.select_category(category.id)
                              }
                            }
                          },
                          [_vm._v("Edit")]
                        )
                      ])
                    ])
                  })
                ],
                2
              )
            ]
          )
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
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", [_vm._v("Category")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h2", { staticClass: "card-title" }, [_vm._v("Edit Category")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h2", { staticClass: "card-title" }, [_vm._v("New Category")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h2", { staticClass: "card-title" }, [_vm._v("Category list")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("SL")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Satus")]),
      _vm._v(" "),
      _c("th", [_vm._v("Action")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/category.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/admin/category.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_e549f86e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=e549f86e& */ "./resources/js/components/admin/category.vue?vue&type=template&id=e549f86e&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_e549f86e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_e549f86e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/category.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/category.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/category.vue?vue&type=template&id=e549f86e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/category.vue?vue&type=template&id=e549f86e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_e549f86e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=template&id=e549f86e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/category.vue?vue&type=template&id=e549f86e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_e549f86e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_e549f86e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);