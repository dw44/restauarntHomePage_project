/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\nconst entryPoint = document.getElementById('content');\n\nentryPoint.appendChild(_menu__WEBPACK_IMPORTED_MODULE_0__[\"header\"]);\n\nwindow.addEventListener('resize', () => {\n  if (window.innerWidth < 768) {\n    document.getElementById('hamburger').classList.remove(\"open\");\n    document.querySelector('nav').classList.add('hidden-mobile');      \n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"header\", function() { return header; });\nconst header = (function() { \n  const root = document.createElement('header');\n\n  const logoContainer = document.createElement('div');\n  logoContainer.setAttribute('id', 'menu-logo');\n\n  const logo = document.createElement('img');\n  const logoAttributes = [['src', './images/logo.png'], ['alt', 'Perkins']];\n\n  logoAttributes.forEach(attr => {\n    logo.setAttribute(attr[0], attr[1]);\n  });\n\n  logoContainer.appendChild(logo);\n\n  const hamburger = document.createElement('div');\n  hamburger.setAttribute('id', 'hamburger');\n  hamburger.addEventListener('click', hamburgerClick);\n\n  for (let i = 1; i < 4; ++i) {\n    const bar = document.createElement('div');\n    bar.setAttribute('id', `hb-bar-${i}`);\n    hamburger.appendChild(bar);\n  };\n\n  const navigation = document.createElement('nav');\n  navigation.classList.add('hidden-mobile');\n  const menuItems = ['Home', 'About', 'Menu', 'Contact'];\n  menuItems.forEach(navItem => {\n    const container = document.createElement('div');\n    container.classList.add('menu-item');\n    container.textContent = navItem;\n    navigation.appendChild(container);\n  });\n\n\n  root.appendChild(logoContainer);\n  root.appendChild(hamburger);\n  root.appendChild(navigation);\n\n  return root;\n\n})();\n\nfunction hamburgerClick() {\n  document.getElementById('hamburger').classList.toggle('open');\n  document.querySelector('nav').classList.toggle('hidden-mobile');\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });