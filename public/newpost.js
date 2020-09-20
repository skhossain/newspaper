(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newpost"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/post.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/post.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueAvatar: vue_avatar_editor_improved__WEBPACK_IMPORTED_MODULE_0__["VueAvatar"]
  },
  data: function data() {
    return {
      title: "",
      newsbody: "",
      editorConfig: {
        // filebrowserImageBrowseUrl: '/filemanager?type=Images',
        // filebrowserImageUploadUrl: '/filemanager/upload?type=Images&_token=',
        //filebrowserBrowseUrl: '/filemanager?type=Files',
        //filebrowserUploadUrl: '/filemanager/upload?type=Files&_token=',                   
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
  methods: {
    onImageReady: function onImageReady() {
      this.scale = 1;
      this.rotation = 0;
    },
    newpost: function newpost() {}
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/post.vue?vue&type=template&id=3d41cfeb&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/post.vue?vue&type=template&id=3d41cfeb& ***!
  \*************************************************************************************************************************************************************************************************************/
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
                _vm._v("New post")
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
                value: _vm.title,
                expression: "title"
              }
            ],
            staticClass: "form-control",
            attrs: { placeholder: "News title" },
            domProps: { value: _vm.title },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.title = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("label", [_vm._v("News body")]),
          _vm._v(" "),
          _c("ckeditor", {
            attrs: { config: _vm.editorConfig },
            model: {
              value: _vm.newsbody,
              callback: function($$v) {
                _vm.newsbody = $$v
              },
              expression: "newsbody"
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
          _c("button", { staticClass: "btn btn-success" }, [
            _vm._v("Save and publish")
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-dark" }, [_vm._v("Save draft")]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("label", [_vm._v("Thumbnail")]),
          _vm._v(" "),
          _c("vue-avatar", {
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
          }),
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
            staticClass: "form-control",
            attrs: { placeholder: "Keyword" }
          }),
          _vm._v(" "),
          _c("label", [_vm._v("Category")]),
          _vm._v(" "),
          _vm._m(1)
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
      _c("h1", [_vm._v("New post")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "form-control" }, [
      _c("option", { attrs: { value: "1" } }, [_vm._v("National")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/post.vue":
/*!************************************************!*\
  !*** ./resources/js/components/admin/post.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post_vue_vue_type_template_id_3d41cfeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.vue?vue&type=template&id=3d41cfeb& */ "./resources/js/components/admin/post.vue?vue&type=template&id=3d41cfeb&");
/* harmony import */ var _post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/post.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _post_vue_vue_type_template_id_3d41cfeb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _post_vue_vue_type_template_id_3d41cfeb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/post.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/post.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/admin/post.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./post.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/post.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/post.vue?vue&type=template&id=3d41cfeb&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/post.vue?vue&type=template&id=3d41cfeb& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_template_id_3d41cfeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./post.vue?vue&type=template&id=3d41cfeb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/post.vue?vue&type=template&id=3d41cfeb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_template_id_3d41cfeb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_template_id_3d41cfeb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);