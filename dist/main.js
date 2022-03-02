/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/valid */ \"./src/modules/valid.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/comments'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_valid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\nsendForm({\n    idForm: ('#formActionOrder1, #formActionOrder2, #formModalAction, #formServModalAction'),\n    someElem: [\n        {\n            type: 'input',\n            id: 'calc-total'\n        }\n    ]\n});\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/comments'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('26 Feb 2022')\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\nslider()\n\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\n    const calcBlock = document.getElementById(\"calc\");\n    const calcTypeMat = document.getElementById(\"calc-type-material\");\n    const calcType = document.getElementById(\"calc-type\");\n    const calcSquare = document.getElementById(\"calc-input\");\n    const total = document.getElementById(\"calc-total\");\n  \n    const countCalculator = () => {\n      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\n      const calcTypeMatValue = +calcTypeMat.options[calcTypeMat.selectedIndex].value;\n      const calcSquareValue = calcSquare.value;\n  \n      let totalValue = 0;\n  \n      if (calcType.value && calcTypeMatValue && calcSquare.value) {\n        totalValue = calcTypeValue * calcTypeMatValue * calcSquareValue;\n      } else {\n        totalValue = 0;\n      }\n     \n      total.placeholder = Math.round(totalValue) + ' ' + 'Руб.'\n    };\n  \n    if (calcBlock !== null) {\n      calcBlock.addEventListener(\"input\", (e) => {\n      if (\n        e.target === calcType ||\n        e.target === calcTypeMat ||\n        e.target === calcSquare\n      ) {\n        countCalculator();\n      }\n    });\n    }\n    \n  };\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\n    let start = performance.now();\n  \n    requestAnimationFrame(function animate(time) {\n      let timeFraction = (time - start) / duration;\n      if (timeFraction > 1) {\n        timeFraction = 1;\n      }\n      let progress = timing(timeFraction);\n      draw(progress);\n      if (timeFraction < 1) {\n        requestAnimationFrame(animate);\n      }\n    });\n  };\n  \n  \n\n//# sourceURL=webpack://middle_diplom/./src/modules/helper.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/modules/helper.js\");\n\n\nconst modal = () => {\n  const modalHeader = document.querySelector(\".header-modal--opened\");\n  const modalService = document.querySelector(\".services-modal--opened\");\n  const overlay = document.querySelector(\".overlay\");\n\n  const certificate = () => {\n    const modalCertificate = document.createElement('div');\n    modalCertificate.classList.add('certificate-modal', 'certificate-modal--opened');\n    modalCertificate.style.cssText='max-width: 42%;'\n    document.body.append(modalCertificate);\n\n    const btnClose = document.createElement('span');\n    btnClose.innerHTML = \"x\"\n    btnClose.classList.add('certificate-modal__close');\n    modalCertificate.append(btnClose);\n\n    const documentImg = document.querySelector('.sertificate-document .img-responsive').cloneNode(true);\n    documentImg.src = \"images/documents/original/document4.jpg\"\n    modalCertificate.append(documentImg)\n\n    document.querySelectorAll(\".sertificate-document\").forEach((btn) => {\n      btn.addEventListener(\"click\", (e) => {\n        e.preventDefault();\n      });\n    });\n\n    btnClose.addEventListener('mouseenter', (e) => { \n      e.target.style.transition = '1s';\n      e.target.style.background = '#5d5d5d'; // Выставляем цвет\n    });\n    \n    btnClose.addEventListener('mouseleave', (e) => {\n      e.target.style.transition = '1s';\n      e.target.style.background = '#4f686e'; \n    });\n  };\n\n  certificate();\n\n  const modalCertificate = document.querySelector(\".certificate-modal--opened\")\n\n  const modalOpen = (modal) => {\n    if (window.outerWidth > 768) {\n      modal.style.display = \"block\";\n      overlay.style.display = \"block\";\n      (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\n        duration: 500,\n        timing(timeFraction) {\n          return timeFraction;\n        },\n        draw(progress) {\n          modal.style.opacity = progress;\n          modal.style.top = 50 * progress + \"%\";\n        },\n      });\n    } else {\n      modal.style.display = \"block\";\n    }\n  }\n\n  const modalClose = (modal) => {\n    modal.style.display = \"none\";\n    overlay.style.display = \"none\";\n  }\n\n\n  const btnFun = (modal, btnOpen, btn) => {\n    const btns = document.querySelectorAll(btnOpen);\n    const btnClose = document.querySelector(btn);\n\n    btns.forEach(btn => {\n      btn.addEventListener('click', (e) => {\n          modalOpen(modal);\n      });\n    });\n\n    btnClose.addEventListener(\"click\", () => {\n      modalClose(modal)\n    });\n\n    overlay.addEventListener(\"click\", () => {\n      modalClose(modal)\n  });\n\n  };\n\n  btnFun(modalHeader, \"a[href^='#callback']\", \".header-modal__close\");\n  btnFun(modalService, \"a[href^='#application']\", \".services-modal__close\");\n  btnFun(modalCertificate, \".sertificate-document\", \".certificate-modal__close\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\n    const Scroll = document.querySelector('.smooth-scroll');\n    const section = document.querySelector(\".section\")\n    let num = 0 \n    const hidden = () => {Scroll.style.display = 'none';}\n    hidden();\n    window.onscroll = () => {\n        if (window.pageYOffset < section.scrollHeight) {\n            Scroll.style.display = 'none'\n            num++\n        } else if (window.pageYOffset > section.scrollHeight && num > 0){\n            Scroll.style.display = 'block'\n        }\n    };\n    Scroll.addEventListener('click', function (e) {\n        e.preventDefault();\n        const id = Scroll.getAttribute('href');\n\n    document.querySelector(id).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n    });\n    return id    \n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    let timerDays = document.querySelectorAll(\".count_1 span\");\n    let timerHours = document.querySelectorAll(\".count_2 span\");\n    let timerMinutes = document.querySelectorAll(\".count_3 span\");\n    let timerSeconds = document.querySelectorAll(\".count_4 span\");\n      const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime();\n        let dateNow = new Date().getTime();\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n    \n        return { timeRemaining, days, hours, minutes, seconds };\n      };\n      const addZero = (elem) => {\n        if (String(elem).length === 1) { return '0' + elem; } else { return String(elem); }\n      };\n      const updateClock = () => {\n        let getTime = getTimeRemaining();\n        timerDays.forEach(item => {item.textContent = addZero(getTime.days)});\n        timerHours.forEach(item => {item.textContent = addZero(getTime.hours)});\n        timerMinutes.forEach(item => {item.textContent = addZero(getTime.minutes)});\n        timerSeconds.forEach(item => {item.textContent = addZero(getTime.seconds)});\n      };\n      setTimeout(() => {\n        let getTime = getTimeRemaining();\n        if (getTime.timeRemaining > 0) {\n          updateClock();\n        } else if (getTime.timeRemaining === 0) {\n          clearTimeout(updateClock);\n        }\n      });\n      setInterval(() => {\n        let getTime = getTimeRemaining();\n        if (getTime.timeRemaining > 0) {\n          updateClock();\n        } else if (getTime.timeRemaining === 0) {\n          clearInterval(updateClock);\n        }\n      }, 1000);\n    };\n    \n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/valid.js":
/*!******************************!*\
  !*** ./src/modules/valid.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst valid = () => {\n    const Name = document.querySelectorAll('[name=\"fio\"]');\n    const Phone = document.querySelectorAll('[name=\"phone\"]');\n    const calcBlock = document.getElementById(\"calc\");\n    const calcSquareInput = document.getElementById(\"calc-input\");\n\n      \n      Name.forEach(Name => {\n        Name.addEventListener(\"input\", (e) => {\n            e.preventDefault();\n            e.target.value = e.target.value.replace(/[^A-Z-a-z-А-Я-а-я\\s]+$/i, \"\");\n          });\n      });\n      \n      Phone.forEach(Phone => {\n            Phone.addEventListener(\"input\", (e) => {\n                e.preventDefault();\n                e.target.value = e.target.value.replace(/([^0-9\\+])/, \"\");\n            });\n        });\n\n    if (calcBlock !== null) {\n        calcBlock.addEventListener(\"input\", (e) => {\n          e.preventDefault();\n          calcSquareInput.value = calcSquareInput.value.replace(/\\D+/, \"\");\n        });\n    }\n  };\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valid);\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/valid.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;