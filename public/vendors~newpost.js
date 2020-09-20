(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~newpost"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.cursorPointer{\n    cursor: pointer;\n}\n.cursorGrab{\n    cursor: grab;\n    cursor: -webkit-grab;\n    cursor: -moz-grab;\n}\n.cursorGrabbing{\n    cursor: grabbing;\n    cursor: -webkit-grabbing;\n    cursor: -moz-grabbing;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/src??ref--6-2!../../../vue-loader/lib??vue-loader-options!./VueAvatar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue":
/*!******************************************************************************!*\
  !*** ./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VueAvatar_vue_vue_type_template_id_19bf984a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueAvatar.vue?vue&type=template&id=19bf984a& */ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=template&id=19bf984a&");
/* harmony import */ var _VueAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueAvatar.vue?vue&type=script&lang=js& */ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VueAvatar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VueAvatar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VueAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VueAvatar_vue_vue_type_template_id_19bf984a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VueAvatar_vue_vue_type_template_id_19bf984a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_VueAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib??vue-loader-options!./VueAvatar.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_VueAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_VueAvatar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader!../../../css-loader??ref--6-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/src??ref--6-2!../../../vue-loader/lib??vue-loader-options!./VueAvatar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_VueAvatar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_VueAvatar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_VueAvatar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_VueAvatar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_VueAvatar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=template&id=19bf984a&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=template&id=19bf984a& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VueAvatar_vue_vue_type_template_id_19bf984a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib??vue-loader-options!./VueAvatar.vue?vue&type=template&id=19bf984a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=template&id=19bf984a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VueAvatar_vue_vue_type_template_id_19bf984a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VueAvatar_vue_vue_type_template_id_19bf984a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue":
/*!************************************************************************************!*\
  !*** ./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VueAvatarEditor_vue_vue_type_template_id_10ba89d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueAvatarEditor.vue?vue&type=template&id=10ba89d7& */ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue?vue&type=template&id=10ba89d7&");
/* harmony import */ var _VueAvatarEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueAvatarEditor.vue?vue&type=script&lang=js& */ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VueAvatarEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VueAvatarEditor_vue_vue_type_template_id_10ba89d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VueAvatarEditor_vue_vue_type_template_id_10ba89d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_VueAvatarEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib??vue-loader-options!./VueAvatarEditor.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_VueAvatarEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue?vue&type=template&id=10ba89d7&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue?vue&type=template&id=10ba89d7& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VueAvatarEditor_vue_vue_type_template_id_10ba89d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib??vue-loader-options!./VueAvatarEditor.vue?vue&type=template&id=10ba89d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue?vue&type=template&id=10ba89d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VueAvatarEditor_vue_vue_type_template_id_10ba89d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VueAvatarEditor_vue_vue_type_template_id_10ba89d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-avatar-editor-improved/src/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-avatar-editor-improved/src/index.js ***!
  \**************************************************************/
/*! exports provided: default, VueAvatar, VueAvatarEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_VueAvatar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/VueAvatar.vue */ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VueAvatar", function() { return _components_VueAvatar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_VueAvatarEditor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/VueAvatarEditor.vue */ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VueAvatarEditor", function() { return _components_VueAvatarEditor_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_components_VueAvatarEditor_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        image: {
            type: String,
            default: ''
        },
        border: {
            type: Number,
            default: 25
        },
        borderRadius: {
            type: Number,
            default: 0
        },
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: 200
        },
        color: {
            type: Array,
            default: () => [0, 0, 0, 0.5]
        },
        scale: {
            type: Number,
            default: 1
        },
        rotation: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            cursor: 'cursorPointer',
            canvas: null,
            context: null,
            dragged: false,
            imageLoaded: false,
            changed: false,
            state: {
                drag: false,
                my: null,
                mx: null,
                xxx: 'ab',
                image: {
                    x: 0,
                    y: 0,
                    resource: null
                }
            }
        };
    },
    computed: {
        canvasWidth () {
            return this.getDimensions().canvas.width;
        },
        canvasHeight () {
            return this.getDimensions().canvas.height;
        },
        rotationRadian () {
            return this.rotation * Math.PI / 180;
        }
    },
    mounted () {
        let self = this;
        this.canvas = this.$refs.avatarEditorCanvas;
        this.context = this.canvas.getContext('2d');
        this.paint();

        if (!this.image) {
            var placeHolder = this.svgToImage('<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"><defs><style>.cls-1{fill:#000;}</style></defs><title>Upload_Upload</title><path class="cls-1" d="M32.5,1A31.5,31.5,0,1,1,1,32.5,31.54,31.54,0,0,1,32.5,1m0-1A32.5,32.5,0,1,0,65,32.5,32.5,32.5,0,0,0,32.5,0h0Z"/><polygon class="cls-1" points="41.91 28.2 32.59 18.65 23.09 28.39 24.17 29.44 31.87 21.54 31.87 40.05 33.37 40.05 33.37 21.59 40.83 29.25 41.91 28.2"/><polygon class="cls-1" points="40.66 40.35 40.66 44.35 24.34 44.35 24.34 40.35 22.34 40.35 22.34 44.35 22.34 46.35 24.34 46.35 40.66 46.35 42.66 46.35 42.66 44.35 42.66 40.35 40.66 40.35"/></svg>');

            placeHolder.onload = function () {
                var x = self.canvasWidth / 2 - this.width / 2;
                var y = self.canvasHeight / 2 - this.height / 2;
                self.context.drawImage(placeHolder, x, y, this.width, this.height);
            };
        } else {
            this.loadImage(this.image);
        }
    },
    methods: {
        drawRoundedRect (context, x, y, width, height, borderRadius) {
            if (borderRadius === 0) {
                context.rect(x, y, width, height);
            } else {
                const widthMinusRad = width - borderRadius;
                const heightMinusRad = height - borderRadius;
                context.translate(x, y);
                context.arc(borderRadius, borderRadius, borderRadius, Math.PI, Math.PI * 1.5);
                context.lineTo(widthMinusRad, 0);
                context.arc(widthMinusRad, borderRadius, borderRadius, Math.PI * 1.5, Math.PI * 2);
                context.lineTo(width, heightMinusRad);
                context.arc(widthMinusRad, heightMinusRad, borderRadius, Math.PI * 2, Math.PI * 0.5);
                context.lineTo(borderRadius, height);
                context.arc(borderRadius, heightMinusRad, borderRadius, Math.PI * 0.5, Math.PI);
                context.translate(-x, -y);
            }
        },
        svgToImage (rawSVG) {
            let svg = new Blob([rawSVG], {type: 'image/svg+xml;charset=utf-8'});
            let domURL = self.URL || self.webkitURL || self;
            let url = domURL.createObjectURL(svg);
            let img = new Image();
            img.src = url;
            return img;
        },
        setState (state1) {
            var min = Math.ceil(1);
            var max = Math.floor(10000);

            this.state = state1;
            this.state.cnt = 'HELLO' + Math.floor(Math.random() * (max - min)) + min;
        },
        paint () {
            this.context.save();
            this.context.translate(0, 0);
            this.context.fillStyle = 'rgba(' + this.color.slice(0, 4).join(',') + ')';

            let borderRadius = this.borderRadius;
            const dimensions = this.getDimensions();
            const borderSize = dimensions.border;
            const height = dimensions.canvas.height;
            const width = dimensions.canvas.width;

            // clamp border radius between zero (perfect rectangle) and half the size without borders (perfect circle or "pill")
            borderRadius = Math.max(borderRadius, 0);
            borderRadius = Math.min(borderRadius, width / 2 - borderSize, height / 2 - borderSize);

            this.context.beginPath();

            // inner rect, possibly rounded
            this.drawRoundedRect(
                this.context,
                borderSize,
                borderSize,
                width - borderSize * 2,
                height - borderSize * 2,
                borderRadius);

            this.context.rect(width, 0, -width, height); // outer rect, drawn "counterclockwise"
            this.context.fill('evenodd');
            this.context.restore();
        },
        getDimensions () {
            return {
                width: this.width,
                height: this.height,
                border: this.border,
                canvas: {
                    width: this.width + (this.border * 2),
                    height: this.height + (this.border * 2)
                }
            };
        },
        onDrop (e) {
            e = e || window.event;
            e.stopPropagation();
            e.preventDefault();

            if (e.dataTransfer && e.dataTransfer.files.length) {
                // this.props.onDropFile(e)
                const reader = new FileReader();
                const file = e.dataTransfer.files[0];
                this.changed = true;
                reader.onload = (e) => this.loadImage(e.target.result);
                reader.readAsDataURL(file);
            }
        },
        onDragStart (e) {
            e = e || window.event;
            e.preventDefault();
            this.state.drag = true;
            this.state.mx = null;
            this.state.my = null;
            this.cursor = 'cursorGrabbing';
            let eventSubject = document;
            let hasMoved = false;
            let handleMouseUp = (event) => {
                this.onDragEnd(event);
                if (!hasMoved && event.targetTouches) {
                    e.target.click();
                }
                eventSubject.removeEventListener('mouseup', handleMouseUp);
                eventSubject.removeEventListener('mousemove', handleMouseMove);
                eventSubject.removeEventListener('touchend', handleMouseUp);
                eventSubject.removeEventListener('touchmove', handleMouseMove);
            };
            let handleMouseMove = (event) => {
                hasMoved = true;
                this.onMouseMove(event);
            };
            eventSubject.addEventListener('mouseup', handleMouseUp);
            eventSubject.addEventListener('mousemove', handleMouseMove);
            eventSubject.addEventListener('touchend', handleMouseUp);
            eventSubject.addEventListener('touchmove', handleMouseMove);
        },
        onDragEnd (e) {
            if (this.state.drag) {
                this.state.drag = false;
                this.cursor = 'cursorPointer';
            }
        },
        onMouseMove (e) {
            e = e || window.event;
            if (this.state.drag === false) {
                return;
            }

            this.dragged = true;
            this.changed = true;

            let imageState = this.state.image;
            const lastX = imageState.x;
            const lastY = imageState.y;

            const mousePositionX = e.targetTouches ? e.targetTouches[0].pageX : e.clientX;
            const mousePositionY = e.targetTouches ? e.targetTouches[0].pageY : e.clientY;

            const newState = {
                mx: mousePositionX,
                my: mousePositionY,
                image: imageState
            };

            if (this.state.mx && this.state.my) {
                const xDiff = (this.state.mx - mousePositionX) / this.scale;
                const yDiff = (this.state.my - mousePositionY) / this.scale;

                imageState.y = this.getBoundedY(lastY - yDiff, this.scale);
                imageState.x = this.getBoundedX(lastX - xDiff, this.scale);
            }

            this.state.mx = newState.mx;
            this.state.my = newState.my;
            this.state.image = imageState;
            // this.setState(newState)
        },
        replaceImageInBounds () {
            let imageState = this.state.image;
            imageState.y = this.getBoundedY(imageState.y, this.scale);
            imageState.x = this.getBoundedX(imageState.x, this.scale);
        },
        loadImage (imageURL) {
            let imageObj = new Image();
            let self = this;

            // imageObj.onload = () => this.handleImageReady(imageObj);
            imageObj.onload = () => {
                let imageState = self.getInitialSize(imageObj.width, imageObj.height);
                self.state.image.x = 0;
                self.state.image.y = 0;
                self.state.image.resource = imageObj;
                self.state.image.width = imageState.width;
                self.state.image.height = imageState.height;
                self.state.drag = false;
                self.$emit('vue-avatar-editor:image-ready', self.scale);
                self.imageLoaded = true;
                this.$emit('imageLoaded', self.imageLoaded);
                self.cursor = 'cursorGrab';
            };
            imageObj.onerror = (err) => console.log('error loading image: ', err);

            // imageObj.onerror = this.props.onLoadFailure
            if (!this.isDataURL(imageURL)) {
                imageObj.crossOrigin = 'anonymous';
            }

            imageObj.src = imageURL;
        },
        getInitialSize (width, height) {
            let newHeight;
            let newWidth;

            const dimensions = this.getDimensions();
            const canvasRatio = dimensions.height / dimensions.width;
            const imageRatio = height / width;

            if (canvasRatio > imageRatio) {
                newHeight = (this.getDimensions().height);
                newWidth = (width * (newHeight / height));
            } else {
                newWidth = (this.getDimensions().width);
                newHeight = (height * (newWidth / width));
            }

            return {
                height: newHeight,
                width: newWidth
            };
        },
        isDataURL (str) {
            if (str === null) {
                return false;
            }
            return !!str.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+=[a-z\-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@\/?%\s]*\s*$/i); // eslint-disable-line no-useless-escape
        },
        getBoundedX (x, scale) {
            var image = this.state.image;
            var dimensions = this.getDimensions();
            let width = Math.abs(image.width * Math.cos(this.rotationRadian)) + Math.abs(image.height * Math.sin(this.rotationRadian));
            let widthDiff = Math.floor((width - dimensions.width / scale) / 2);
            widthDiff = Math.max(0, widthDiff);
            return Math.max(-widthDiff, Math.min(x, widthDiff));
        },
        getBoundedY (y, scale) {
            var image = this.state.image;
            var dimensions = this.getDimensions();
            let height = Math.abs(image.width * Math.sin(this.rotationRadian)) + Math.abs(image.height * Math.cos(this.rotationRadian));
            let heightDiff = Math.floor((height - dimensions.height / scale) / 2);
            heightDiff = Math.max(0, heightDiff);
            return Math.max(-heightDiff, Math.min(y, heightDiff));
        },
        paintImage (context, image, border) {
            if (image.resource) {
                var position = this.calculatePosition(image, border);
                context.save();
                context.globalCompositeOperation = 'destination-over';
                let dimensions = this.getDimensions();
                context.translate(dimensions.canvas.width / 2, dimensions.canvas.height / 2);
                context.rotate(this.rotationRadian);
                context.translate(-dimensions.canvas.width / 2, -dimensions.canvas.height / 2);
                context.drawImage(
                    image.resource,
                    position.x,
                    position.y,
                    position.width,
                    position.height);
                context.restore();
            }
        },
        transformDataWithRotation (x, y) {
            let radian = -this.rotationRadian;
            let rx = x * Math.cos(radian) - y * Math.sin(radian);
            let ry = x * Math.sin(radian) + y * Math.cos(radian);
            return [rx, ry];
        },
        calculatePosition (image, border) {
            image = image || this.state.image;
            var dimensions = this.getDimensions();
            let width = image.width * this.scale;
            let height = image.height * this.scale;
            var widthDiff = (width - dimensions.width) / 2;
            var heightDiff = (height - dimensions.height) / 2;
            var x = image.x * this.scale;// - widthDiff;
            var y = image.y * this.scale;// - heightDiff;
            [x, y] = this.transformDataWithRotation(x, y);
            x += border - widthDiff;
            y += border - heightDiff;
            return {
                x,
                y,
                height,
                width
            };
        },
        redraw () {
            this.context.clearRect(0, 0, this.getDimensions().canvas.width, this.getDimensions().canvas.height);
            this.paint();
            this.paintImage(this.context, this.state.image, this.border);
        },
        getImage () {
            const cropRect = this.getCroppingRect();
            const image = this.state.image;

            // get actual pixel coordinates
            cropRect.x *= image.resource.width;
            cropRect.y *= image.resource.height;
            cropRect.width *= image.resource.width;
            cropRect.height *= image.resource.height;

            // create a canvas with the correct dimensions
            const canvas = document.createElement('canvas');
            canvas.width = cropRect.width;
            canvas.height = cropRect.height;

            // draw the full-size image at the correct position,
            // the image gets truncated to the size of the canvas.
            canvas.getContext('2d').drawImage(image.resource, -cropRect.x, -cropRect.y);

            return canvas;
        },
        getImageScaled () {
            const { width, height } = this.getDimensions();

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;

            // don't paint a border here, as it is the resulting image
            this.paintImage(canvas.getContext('2d'), this.state.image, 0);

            return canvas;
        },
        imageChanged () {
            return this.changed;
        },
        getCroppingRect () {
            const dim = this.getDimensions();
            const frameRect = {
                x: dim.border,
                y: dim.border,
                width: dim.width,
                height: dim.height
            };
            const imageRect = this.calculatePosition(this.state.image, dim.border);

            return {
                x: (frameRect.x - imageRect.x) / imageRect.width,
                y: (frameRect.y - imageRect.y) / imageRect.height,
                width: frameRect.width / imageRect.width,
                height: frameRect.height / imageRect.height
            };
        },
        clicked (e) {
            if (this.dragged === true) {
                this.dragged = false;
            } else {
                this.$refs.input.click();
            }
        },
        fileSelected (e) {
            var files = e.target.files || e.dataTransfer.files;
            this.$emit('select-file', files);

            if (!files.length) {
                return;
            }

            // var image = new Image();
            var reader = new FileReader();

            this.changed = true;
            reader.onload = (e) => this.loadImage(e.target.result);
            reader.readAsDataURL(files[0]);
        },
        resetImage () {
            let self = this;
            this.canvas = this.$refs.avatarEditorCanvas;
            this.context = this.canvas.getContext('2d');
            self.imageLoaded = false;
            this.$emit('imageLoaded', self.imageLoaded);
            self.state = {
                drag: false,
                my: null,
                mx: null,
                xxx: 'ab',
                image: {
                    x: 0,
                    y: 0,
                    resource: null
                }
            };
            this.context.clearRect(0, 0, this.getDimensions().canvas.width, this.getDimensions().canvas.height);
            this.paint();

            var placeHolder = this.svgToImage('<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"><defs><style>.cls-1{fill:#000;}</style></defs><title>Upload_Upload</title><path class="cls-1" d="M32.5,1A31.5,31.5,0,1,1,1,32.5,31.54,31.54,0,0,1,32.5,1m0-1A32.5,32.5,0,1,0,65,32.5,32.5,32.5,0,0,0,32.5,0h0Z"/><polygon class="cls-1" points="41.91 28.2 32.59 18.65 23.09 28.39 24.17 29.44 31.87 21.54 31.87 40.05 33.37 40.05 33.37 21.59 40.83 29.25 41.91 28.2"/><polygon class="cls-1" points="40.66 40.35 40.66 44.35 24.34 44.35 24.34 40.35 22.34 40.35 22.34 44.35 22.34 46.35 24.34 46.35 40.66 46.35 42.66 46.35 42.66 44.35 42.66 40.35 40.66 40.35"/></svg>');

            placeHolder.onload = function () {
                var x = self.canvasWidth / 2 - this.width / 2;
                var y = self.canvasHeight / 2 - this.height / 2;
                self.context.drawImage(placeHolder, x, y, this.width, this.height);
            };
        }
    },
    watch: {
        state: {
            handler (val, oldval) {
                if (this.imageLoaded) {
                    this.redraw();
                }
            },
            deep: true
        },
        scale () {
            if (this.imageLoaded) {
                this.replaceImageInBounds();
                this.redraw();
            }
        },
        rotation () {
            if (this.imageLoaded) {
                this.replaceImageInBounds();
                this.redraw();
            }
        },
        borderRadius () {
            this.redraw();
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VueAvatar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueAvatar.vue */ "./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue");
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
    props: {
        finishText: {
            type: String,
            default: 'Save'
        },
        hasRotation: {
            type: Boolean,
            default: true
        },
        hasScale: {
            type: Boolean,
            default: true
        },
        image: {
            type: String,
            default: ''
        },
        border: {
            type: Number,
            default: 25
        },
        borderRadius: {
            type: Number,
            default: 0
        },
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: 200
        },
        color: {
            type: Array,
            default: () => [0, 0, 0, 0.5]
        }
    },
    data () {
        return {
            rotation: 0,
            scale: 1
        };
    },
    components: {
        VueAvatar: _VueAvatar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    methods: {
        onSelectFile (files) {
            this.$emit('select-file', files);
        },
        onImageReady () {
            this.scale = 1;
            this.rotation = 0;
        },
        finished () {
            return this.$emit('finished', this.$refs.vueavatar.getImageScaled());
        }
    }
});



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=template&id=19bf984a&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-avatar-editor-improved/src/components/VueAvatar.vue?vue&type=template&id=19bf984a& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    _c("canvas", {
      ref: "avatarEditorCanvas",
      staticClass: "cursorPointer",
      attrs: {
        width: _vm.canvasWidth,
        height: _vm.canvasHeight,
        id: "avatarEditorCanvas"
      },
      on: {
        dragover: function($event) {
          $event.preventDefault()
        },
        drop: _vm.onDrop,
        mousedown: _vm.onDragStart,
        touchstart: _vm.onDragStart,
        click: _vm.clicked
      }
    }),
    _vm._v(" "),
    _c("input", {
      ref: "input",
      staticStyle: { display: "none" },
      attrs: { type: "file" },
      on: { change: _vm.fileSelected }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue?vue&type=template&id=10ba89d7&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-avatar-editor-improved/src/components/VueAvatarEditor.vue?vue&type=template&id=10ba89d7& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("vue-avatar", {
        ref: "vueavatar",
        attrs: {
          width: _vm.width,
          height: _vm.height,
          rotation: _vm.rotation,
          borderRadius: _vm.borderRadius,
          border: _vm.border,
          color: _vm.color,
          scale: _vm.scale
        },
        on: {
          "vue-avatar-editor:image-ready": _vm.onImageReady,
          "select-file": function($event) {
            return _vm.onSelectFile($event)
          }
        }
      }),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm.hasScale
        ? _c("label", [
            _vm._v("\n    Zoom : " + _vm._s(_vm.scale) + "x\n    "),
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
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm.hasRotation
        ? _c("label", [
            _vm._v("\n    Rotation : " + _vm._s(_vm.rotation) + "°\n    "),
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
        : _vm._e(),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("button", { on: { click: _vm.finished } }, [
        _vm._v(_vm._s(_vm.finishText))
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);