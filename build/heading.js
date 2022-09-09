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

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

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
/*!*******************************!*\
  !*** ./src/blocks/heading.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inc_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../inc/theme */ "./inc/theme.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)("vacareers/heading", {
  title: "Heading",
  category: "va-blocks",
  attributes: {
    text: {
      type: "string"
    },
    size: {
      enum: ['h1', 'h2', 'h3'],
      default: 'h2'
    },
    lineColor: {
      type: "string"
    }
  },
  edit: EditComponent,
  save: SaveComponent
});

function EditComponent(props) {
  var _themeColors$filter$;

  const {
    attributes: {
      text,
      size,
      lineColor
    },
    setAttributes
  } = props;

  function handleTextChange(text) {
    setAttributes({
      text: text
    });
  }

  const currentColorValue = (_themeColors$filter$ = _inc_theme__WEBPACK_IMPORTED_MODULE_4__.themeColors.filter(color => {
    return color.name == lineColor;
  })[0]) === null || _themeColors$filter$ === void 0 ? void 0 : _themeColors$filter$.color;

  function handleColorChange(newValue) {
    if (newValue !== undefined) {
      const {
        name
      } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorObjectByColorValue)(_inc_theme__WEBPACK_IMPORTED_MODULE_4__.themeColors, newValue);
      setAttributes({
        lineColor: name
      });
    } else {
      setAttributes({
        lineColor: null
      });
    }
  }

  console.log(lineColor);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Line",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    disableCustomColors: true,
    colors: _inc_theme__WEBPACK_IMPORTED_MODULE_4__.themeColors,
    value: currentColorValue,
    onChange: handleColorChange
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    isPressed: size === "h1",
    onClick: () => setAttributes({
      size: "h1"
    })
  }, "h1"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    isPressed: size === "h2",
    onClick: () => setAttributes({
      size: "h2"
    })
  }, "h2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    isPressed: size === "h3",
    onClick: () => setAttributes({
      size: "h3"
    })
  }, "h3"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    allowedFormats: ["core/italic"],
    tagName: size,
    className: `heading heading--${lineColor}`,
    value: text,
    onChange: handleTextChange
  }));
}

function SaveComponent(props) {
  return null; // const {
  //     attributes: { text, size, lineColor }
  // } = props;
  // return <RichText.Content tagName={ size } value={ text } className={ `heading heading--${lineColor}` } />;
}
})();

/******/ })()
;
//# sourceMappingURL=heading.js.map