/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./inc/theme.js":
/*!**********************!*\
  !*** ./inc/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "THEME_PATH": () => (/* binding */ THEME_PATH),
/* harmony export */   "buttonStyles": () => (/* binding */ buttonStyles),
/* harmony export */   "themeColors": () => (/* binding */ themeColors)
/* harmony export */ });
const THEME_PATH = '/wp-content/themes/vacareers/assets/img';
const themeColors = [{
  name: "theme-color-1",
  color: "#0b4778"
}, {
  name: "theme-color-2",
  color: "#ffbe2e"
}, {
  name: "theme-color-3",
  color: "#a6b557"
}, {
  name: "theme-color-4",
  color: "#6fbab3"
}, {
  name: "theme-color-5",
  color: "#d0c3e9"
}, {
  name: "theme-color-6",
  color: "#fb5a47"
}];
const buttonStyles = [{
  name: "primary",
  color: "#003e73"
}, {
  name: "secondary",
  color: "#ffbe2e"
}, {
  name: "accent-cool",
  color: "#6fbab3"
}, {
  name: "inverse usa-button--outline",
  color: "#ffffff"
}, {
  name: "outline",
  color: "outline"
}];
/*
$theme-color-1: color($theme-color-primary); // blue-70v // #0b4778
$theme-color-2: color($theme-color-secondary); // gold-20v // #ffbe2e
$theme-color-3: color("green-warm-30"); // green-warm-30 // #a6b557
$theme-color-4: color($theme-color-accent-cool); // mint-cool-30 // #6fbab3
$theme-color-5: color("violet-20"); // violet-20 // #d0c3e9
$theme-color-6: color("red-40v"); // red-40v // #fb5a47
*/

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/blocks/usa-banner.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inc_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../inc/theme */ "./inc/theme.js");



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("vacareers/usa-banner", {
  title: "USA Banner",
  category: "va-blocks",
  edit: EditComponent,
  save: SaveComponent
});

function EditComponent() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "usa-banner",
    "aria-label": "Official government website"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
    className: "usa-banner__header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "usa-banner__inner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid-col-auto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "usa-banner__header-flag",
    src: `${_inc_theme__WEBPACK_IMPORTED_MODULE_2__.THEME_PATH}/us_flag_small.png`,
    alt: "U.S. flag"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid-col-fill tablet:grid-col-auto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "usa-banner__header-text"
  }, "An official website of the United States government"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "usa-banner__header-action",
    "aria-hidden": "true"
  }, "Here\u2019s how you know")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "usa-banner__button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "usa-banner__button-text"
  }, "Here\u2019s how you know")))));
}

;

function SaveComponent() {
  return null;
}

;
})();

/******/ })()
;
//# sourceMappingURL=usa-banner.js.map