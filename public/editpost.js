(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editpost"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/editpost.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/editpost.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_avatar_editor_improved__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-avatar-editor-improved */ "./node_modules/vue-avatar-editor-improved/src/index.js");
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
  props: ['user'],
  components: {
    VueAvatar: vue_avatar_editor_improved__WEBPACK_IMPORTED_MODULE_0__["VueAvatar"]
  },
  data: function data() {
    return {
      post_id: this.$route.params.id,
      post: "",
      title: "",
      newsbody: "",
      category_id: "",
      Keyword: "",
      editorConfig: {
        filebrowserBrowseUrl: '/filemanager/ckeditor',
        toolbarGroups: [{
          name: 'clipboard',
          groups: ['clipboard', 'undo']
        }, {
          name: 'editing',
          groups: ['find', 'selection', 'spellchecker']
        }, {
          name: 'links'
        }, {
          name: 'insert'
        }, {
          name: 'forms'
        }, {
          name: 'tools'
        }, {
          name: 'colors'
        }, {
          name: 'basicstyles',
          groups: ['basicstyles', 'cleanup']
        }, {
          name: 'paragraph',
          groups: ['list', 'indent', 'blocks', 'align', 'bidi']
        }, {
          name: 'styles'
        }, {
          name: 'document',
          groups: ['mode', 'document', 'doctools']
        }],
        extraPlugins: ['justify', 'colorbutton', 'colordialog']
      },
      image: "/images/icon/plus.jpg",
      rotation: 0,
      scale: 1,
      rotation_out: 0,
      scale_out: 1,
      borderRadius: 0,
      imageLoaded: true,
      dragged: true
    };
  },
  mounted: function mounted() {
    this.get_categories();
    this.get_post();
  },
  methods: {
    onImageReady: function onImageReady() {
      this.scale = 1;
      this.rotation = 0;
    },
    newpost: function newpost(status) {
      if (this.$refs.vueavatar.getImageScaled()) {
        var img = this.$refs.vueavatar.getImageScaled();
        var image = img.toDataURL();
        axios.post('/admin/editpost', {
          id: this.post_id,
          user_id: this.user.id,
          category_id: this.post.category_id,
          title: this.post.title,
          content: this.post.content,
          image: image,
          keword: this.post.Keyword,
          status: status
        }).then(function (resp) {
          console.log(resp.data);
        });
      }
    },
    get_categories: function get_categories() {
      var _this = this;

      axios.post('/admin/allcategories').then(function (response) {
        _this.$store.commit('categories', response.data);
      });
    },
    get_post: function get_post() {
      var _this2 = this;

      axios.get('/admin/getsinglepost', {
        params: {
          id: this.post_id
        }
      }).then(function (response) {
        _this2.image = '/images/' + response.data.thembaneel;
        _this2.post = response.data;
      });
    }
  },
  computed: {
    categories: function categories() {
      return this.$store.getters.categories;
    }
  },
  watch: {
    scale: function scale() {
      this.scale_out = Number(this.scale);
    },
    rotation: function rotation() {
      this.rotation_out = Number(this.rotation);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/editpost.vue?vue&type=template&id=34a00275&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/editpost.vue?vue&type=template&id=34a00275& ***!
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
                _vm._v("Edit post")
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content row m-3" }, [
      _c(
        "div",
        { staticClass: "col-md-9" },
        [
          _c("label", [_vm._v("Post title")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.post.title,
                expression: "post.title"
              }
            ],
            staticClass: "form-control",
            attrs: { placeholder: "News title" },
            domProps: { value: _vm.post.title },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.post, "title", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("label", [_vm._v("News body")]),
          _vm._v(" "),
          _c("ckeditor", {
            attrs: { config: _vm.editorConfig },
            model: {
              value: _vm.post.content,
              callback: function($$v) {
                _vm.$set(_vm.post, "content", $$v)
              },
              expression: "post.content"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-3" },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-success",
              on: {
                click: function($event) {
                  return _vm.newpost(1)
                }
              }
            },
            [_vm._v("Save and publish")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-dark",
              on: {
                click: function($event) {
                  return _vm.newpost(0)
                }
              }
            },
            [_vm._v("Save draft")]
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("label", [_vm._v("Thumbnail")]),
          _vm._v(" "),
          _vm.post
            ? _c("vue-avatar", {
                ref: "vueavatar",
                attrs: {
                  width: 200,
                  height: 200,
                  rotation: _vm.rotation_out,
                  borderRadius: 0,
                  scale: _vm.scale_out,
                  image: _vm.image,
                  "border:1": ""
                },
                on: { "vue-avatar-editor:image-ready": _vm.onImageReady }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "text-center" }, [
            _c("label", [
              _vm._v(
                "\n                                    Zoom : " +
                  _vm._s(_vm.scale) +
                  "x\n                                    "
              ),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.scale,
                    expression: "scale"
                  }
                ],
                attrs: { type: "range", min: "1", max: "3", step: "0.02" },
                domProps: { value: _vm.scale },
                on: {
                  __r: function($event) {
                    _vm.scale = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("label", [
              _vm._v(
                "\n                                    Rotation : " +
                  _vm._s(_vm.rotation) +
                  "°\n                                    "
              ),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.rotation,
                    expression: "rotation"
                  }
                ],
                attrs: { type: "range", min: "0", max: "360", step: "1" },
                domProps: { value: _vm.rotation },
                on: {
                  __r: function($event) {
                    _vm.rotation = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("label", [_vm._v("Keyword")]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.post.keyword,
                expression: "post.keyword"
              }
            ],
            staticClass: "form-control",
            attrs: { placeholder: "Keyword" },
            domProps: { value: _vm.post.keyword },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.post, "keyword", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("label", [_vm._v("Category")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.post.category_id,
                  expression: "post.category_id"
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
                  _vm.$set(
                    _vm.post,
                    "category_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Uncategory")]),
              _vm._v(" "),
              _vm._l(_vm.categories, function(category, index) {
                return _c(
                  "option",
                  { key: index, domProps: { value: category.id } },
                  [_vm._v(_vm._s(category.name))]
                )
              })
            ],
            2
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", [_vm._v("Edit post")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/editpost.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/admin/editpost.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editpost_vue_vue_type_template_id_34a00275___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editpost.vue?vue&type=template&id=34a00275& */ "./resources/js/components/admin/editpost.vue?vue&type=template&id=34a00275&");
/* harmony import */ var _editpost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editpost.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/editpost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editpost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editpost_vue_vue_type_template_id_34a00275___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editpost_vue_vue_type_template_id_34a00275___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/editpost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/editpost.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/editpost.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editpost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./editpost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/editpost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editpost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/editpost.vue?vue&type=template&id=34a00275&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/editpost.vue?vue&type=template&id=34a00275& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editpost_vue_vue_type_template_id_34a00275___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./editpost.vue?vue&type=template&id=34a00275& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/editpost.vue?vue&type=template&id=34a00275&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editpost_vue_vue_type_template_id_34a00275___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editpost_vue_vue_type_template_id_34a00275___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);