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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/about */ \"./src/modules/about.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\n\n\n\n\n\nconst pageElements = [_modules_header__WEBPACK_IMPORTED_MODULE_0__[\"header\"], _modules_home__WEBPACK_IMPORTED_MODULE_1__[\"home\"], _modules_about__WEBPACK_IMPORTED_MODULE_2__[\"about\"], _modules_menu__WEBPACK_IMPORTED_MODULE_3__[\"menu\"], _modules_contact__WEBPACK_IMPORTED_MODULE_4__[\"contact\"]];\nconst entryPoint = document.getElementById('content');\n\nfor (const element of pageElements) {\n  entryPoint.appendChild(element);\n}\n\nwindow.addEventListener('resize', () => {\n  if (window.innerWidth < 768) {\n    document.getElementById('hamburger').classList.remove(\"open\");\n    document.querySelector('nav').classList.add('hidden-mobile');      \n  }\n});\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/*! exports provided: about */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"about\", function() { return about; });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/modules/tools.js\");\n\n\nconst about = (function() {\n  const headingText = '-- About Us --';\n  const aboutText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam obcaecati nisi quod, ' + \n    'accusantium unde necessitatibus excepturi laborum, nostrum quibusdam quasi. Adipisci, consequatur consequuntur? ' +\n    'Mollitia totam autem tempore labore quo sunt quam tempora expedita nisi voluptatibus nemo error quaerat porro itaque alias, ' + \n    'ea possimus asperiores? Dolor, quos. Minima tempore provident reiciendis rerum praesentium quo totam, nihil ipsum quae sint ' + \n    'non, atque nulla eum dolore a explicabo, veniam fuga inventore. Magni deserunt odit quam tempore odio expedita commodi officia, ' +\n    'ullam nulla, explicabo ut omnis assumenda aspernatur voluptate quis pariatur minus qui?';\n\n  const root = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('section', 'hidden', 'about');\n  const aboutCard = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('div', null, 'about-card');\n  const heading = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('h2');\n  const aboutUs = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('p');\n\n  heading.textContent = headingText;\n  aboutUs.textContent = aboutText;\n\n  _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].addChildren(aboutCard, heading, aboutUs);\n  _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].addChildren(root, aboutCard);\n\n  return root;\n})();\n\n\n\n//# sourceURL=webpack:///./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! exports provided: contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/modules/tools.js\");\n\n\nconst contact = (function() {\n  const root = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('section', 'hidden', 'contact-us');\n\n  const addressCard = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('div', 'contact-card');\n  const hoursCard = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('div', 'contact-card');\n  const phoneCard = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('div', 'contact-card');\n\n  const location = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('h3', null, null, 'Location');\n  const address = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('p', null, null, '125 Red Mist Street, Red Mist');\n  _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].addChildren(addressCard, location, address);\n\n  const openingHours = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('h3', null, null, 'Opening Hours');\n  const weekdayHours = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('p', null, null, 'Monday - Friday | 9am - 1am');\n  const weekendHours = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('p', null, null, 'Saturday - Sunday | 10am - 3am');\n  _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].addChildren(hoursCard, openingHours, weekdayHours, weekendHours);\n\n\n  const phone = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('h3', null, null, 'Phone Number');\n  const contactNumber = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('p', null, null, '123-456-7890');\n  _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].addChildren(phoneCard, phone, contactNumber);\n\n  _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].addChildren(root, addressCard, hoursCard, phoneCard);\n  return root;\n})();\n\n//# sourceURL=webpack:///./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"header\", function() { return header; });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/modules/tools.js\");\n\n\nconst header = (function() { \n  const root = document.createElement('header');\n  const logoContainer = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('div', null, 'menu-logo');\n  const logo = document.createElement('img');\n  const logoAttributes = [['src', './images/logo.png'], ['alt', 'Perkins']];\n\n  logoAttributes.forEach(attr => {\n    logo.setAttribute(attr[0], attr[1]);\n  });\n\n  logoContainer.appendChild(logo);\n\n  const hamburger = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('div', null, 'hamburger');\n\n  for (let i = 1; i < 4; ++i) {\n    const bar = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('div', null, `hb-bar-${i}`);\n    hamburger.appendChild(bar);\n  }\n\n  const navigation = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('nav', 'hidden-mobile');\n  const menuItems = ['Home', 'About', 'Menu', 'Contact'];\n  menuItems.forEach(navItem => {\n    const container = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('div', 'menu-item');\n    container.textContent = navItem;\n    navigation.appendChild(container);\n  });\n\n  hamburger.addEventListener('click', () => {\n    hamburger.classList.toggle('open');\n    navigation.classList.toggle('hidden-mobile');\n  });\n\n  _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].addChildren(root, logoContainer, hamburger, navigation);\n\n  return root;\n})();\n\n\n\n//# sourceURL=webpack:///./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/*! exports provided: home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"home\", function() { return home; });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/modules/tools.js\");\n\n\nconst home = (function() {\n  const root = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('section', null, 'home');\n  const welcome = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('h1', null, 'welcome');\n  welcome.textContent = 'WELCOME TO PERKINS';\n\n  root.appendChild(welcome);\n  return root;\n})();\n\n//# sourceURL=webpack:///./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/modules/tools.js\");\n\n\nconst menu = (function() {\n  const root = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('section', 'hidden', 'menu');\n  const menuTitle = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('h1', null, 'menu-title', 'Menu');\n\n  const menuItems = [\n    {index: 1, name: 'Chicken Fried Steak', description: 'A succulent piece of chicken breast, battered, flattened, and pan fried until crispy.', price: '$19.99'},\n    {index: 2, name: 'Cheesburger', description: '8 oz. Wagyu patty, done to perfection, served with Swiss cheese and mushrooms.', price: '$14.99'},\n    {index: 3, name: 'Tenderloin Steak', description: 'USDA prime filet steak, served with sauteed vegetables and mushroom sauce.', price: '$59.99'},\n    {index: 4, name: 'Russian Salad', description: 'Potatos, chicken, almonds, green peas, and apples, served with mayonnaise.', price: '$9.49'},\n    {index: 5, name: 'Shrimp Gumbo', description: 'Tiger shrimp, cooked with sausages and vegetables in a traditional recipe.', price: 'Price: $17.99'},\n    {index: 6, name: 'Gourmet HotDog', description: '2 Bratwurst sausages, served with sauerkraut and Dijon mustard.', price: '$18.99'},\n    {index: 7, name: 'Steak Frites', description: 'Steak, served with Belgian style fries.', price: '$49.99'},\n    {index: 8, name: 'Grilled Shrimp', description: 'A kilogram of lightly spiced shrimps, grilled to perfection.', price: '$69.99'},\n    {index: 9, name: 'Fish and Chips', description: 'Beer battered halibut, fried until golden, served with steak-cut fries.', price: '$39.99'},\n    {index: 10, name: 'Apple', description: 'A single, unrefrigerated, year old apple. May or may not have gone bad.', price: '$999.99'}\n  ];\n\n  const menu = menuItems.map(item => {\n    const container = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('div', 'food-menu-item');\n    const dish = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('h3', 'dish', null, `${item.index} - ${item.name}`);\n    const description = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('p', 'dish-description', null, item.description);\n    const price = _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].createWithAttributes('h6', 'price', null, `Price: ${item.price}`);\n    _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].addChildren(container, dish, description, price);\n    return container; \n  });\n\n  _tools__WEBPACK_IMPORTED_MODULE_0__[\"tools\"].addChildren(root, menuTitle, ...menu);\n  return root;\n})();\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/tools.js":
/*!******************************!*\
  !*** ./src/modules/tools.js ***!
  \******************************/
/*! exports provided: tools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tools\", function() { return tools; });\nconst tools = (function() {\n  const createWithAttributes = function(tag, className = null, id = null, text = null) {\n    /* 'tag', 'className', 'id'  and 'text' all NEED to be strings. \n    'className' 'id', and 'text' can be null, or any false-y value if not needed */ \n    const element = document.createElement(tag);\n    if (!!className) element.classList.add(className);\n    if (!!id) element.setAttribute('id', id);\n    if (!!text) element.textContent = text;\n    return element;\n  }\n  \n  const addChildren = function(parent, ...children) {\n    for (const child of children) {\n      parent.appendChild(child);\n    }\n  }\n  \n  return {\n    createWithAttributes,\n    addChildren\n  };\n\n})();\n\n//# sourceURL=webpack:///./src/modules/tools.js?");

/***/ })

/******/ });