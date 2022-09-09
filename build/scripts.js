/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/breadcrumbs.js":
/*!****************************!*\
  !*** ./src/breadcrumbs.js ***!
  \****************************/
/***/ (() => {

// Add USWDS link class to breadcrumbs
const breadcrumbLinks = document.querySelectorAll('.breadcrumbs a');
breadcrumbLinks.forEach(el => {
  el.classList.add('usa-link');
});

/***/ }),

/***/ "./src/main-nav.js":
/*!*************************!*\
  !*** ./src/main-nav.js ***!
  \*************************/
/***/ (() => {

/* Main nav */
const body = document.querySelector('body');
const nav = document.querySelector('#site-nav');
const navOpen = document.querySelector('#site-nav-open-btn');
const navClose = document.querySelector('#site-nav-close-btn');
/* Main menu dropdowns - relies on mega menu (if removing mega menu, just remove "mega-" prefix) */

const menuItems = document.querySelectorAll('li.mega-menu-item-has-children');
const currentMenuParent = document.querySelector('.mega-current-menu-parent');
const indicators = document.querySelectorAll('.mega-indicator');
/* Open the main nav */

function openNav(e) {
  e.preventDefault();
  body.classList.add('nav-open');
  nav.classList.add('is-open');
  nav.classList.remove('is-closed');
  /* Opens submenu of current page */

  if (currentMenuParent) {
    currentMenuParent.classList.add('open');
    currentMenuParent.querySelector('a').setAttribute('aria-expanded', 'true');
  }
}

navOpen.addEventListener('click', openNav);
/* Close the main nav */

function closeNav(e) {
  e.preventDefault();
  body.classList.remove('nav-open');
  nav.classList.remove('is-open');
  nav.classList.add('is-closed');
}

navClose.addEventListener('click', closeNav); // TODO: make it close with the ESC key too

/* Menu dropdowns */

function toggleDropdown(e) {
  e.preventDefault();
  this.parentNode.classList.toggle('open');
  this.setAttribute('aria-expanded', !this.getAttribute('aria-expanded')); // TODO: This might not work on Firefox
}

menuItems.forEach(el => {
  el.querySelector('a').addEventListener("click", toggleDropdown);
});
indicators.forEach(el => {
  el.remove();
});
document.querySelector('.mega-menu-toggle').remove(); // TODO: may need to setup focus trap - /node_modules/@uswds/uswds/packages/uswds-core/src/js/utils/focus-trap.js

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumbs */ "./src/breadcrumbs.js");
/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_breadcrumbs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-nav */ "./src/main-nav.js");
/* harmony import */ var _main_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_nav__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=scripts.js.map