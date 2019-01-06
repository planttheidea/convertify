(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("convertify", [], factory);
	else if(typeof exports === 'object')
		exports["convertify"] = factory();
	else
		root["convertify"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fast-stringify/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/fast-stringify/es/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stringify; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/fast-stringify/es/utils.js");
// utils

/**
 * @function stringify
 *
 * @description
 * strinigifer that handles circular values
 *
 * @param {any} value the value to stringify
 * @param {function} [replacer] a custom replacer function for stringifying standard values
 * @param {number} [indent] the number of spaces to indent the output by
 * @param {function} [circularReplacer] a custom replacer function for stringifying circular values
 * @returns {string} the stringified output
 */

function stringify(value, replacer, indent, circularReplacer) {
  return JSON.stringify(value, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createReplacer"])(replacer, circularReplacer), indent);
}

/***/ }),

/***/ "./node_modules/fast-stringify/es/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/fast-stringify/es/utils.js ***!
  \*************************************************/
/*! exports provided: first, getCircularValue, getValue, indexOf, createReplacer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCircularValue", function() { return getCircularValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReplacer", function() { return createReplacer; });
/**
 * @function first
 *
 * @description
 * get the first n number of items from the array as a new array (faster than native splice)
 *
 * @param {Array<any>} array the array to get the items from
 * @param {number} length the length to limit the size to
 * @returns {Array<any>} the array limited in size
 */
var first = function first(array, length) {
  var newArray = new Array(length);

  for (var index = 0; index < length; index++) {
    newArray[index] = array[index];
  }

  return newArray;
};
/**
 * @function getCircularValue
 *
 * @description
 * create a method that will get a placeholder for the circular value based
 * on the value saved in the cache for it
 *
 * @param {any} key the key of the object to stringify
 * @param {any} value the value of the object at key
 * @param {number} refCount the index of the ref
 * @returns {string} the circular value
 */

var getCircularValue = function getCircularValue(key, value, refCount) {
  return "[ref-" + refCount + "]";
};
/**
 * @function getValue
 *
 * @description
 * get the value passed (similar to an identity function)
 *
 * @param {any} key the key of the object to stringify
 * @param {any} value the value of the object at key
 * @returns {any} the value passed
 */

var getValue = function getValue(key, value) {
  return value;
};
/**
 * @function indexOf
 *
 * @description
 * get the index of the value in the array (faster than native indexOf)
 *
 * @param {Array<any>} array the array to get the index of the value at
 * @param {any} value the value to match
 * @returns {number} the index of the value in array
 */

var indexOf = function indexOf(array, value) {
  for (var index = 0; index < array.length; index++) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
};
/**
 * @function createReplacer
 *
 * @description
 * create a replacer method that handles circular values
 *
 * @param {function} [replacer] a custom replacer to use for non-circular values
 * @param {function} [circularReplacer] a custom replacer to use for circular methods
 * @returns {any} the value to stringify
 */

var createReplacer = function createReplacer(replacer, circularReplacer) {
  var getCircularReplacer = circularReplacer || getCircularValue;
  var hasReplacer = typeof replacer === 'function';
  var cache = [],
      locationOfThis,
      locationOfValue;
  return function (key, value) {
    if (cache.length) {
      locationOfThis = indexOf(cache, this);

      if (~locationOfThis) {
        cache = first(cache, locationOfThis + 1);
      } else {
        cache[cache.length] = this;
      }

      locationOfValue = indexOf(cache, value);

      if (~locationOfValue) {
        return getCircularReplacer.call(this, key, value, locationOfValue);
      }
    } else {
      cache[0] = value;
    }

    return hasReplacer ? replacer.call(this, key, value) : value;
  };
};

/***/ }),

/***/ "./src/_internals/numbers.js":
/*!***********************************!*\
  !*** ./src/_internals/numbers.js ***!
  \***********************************/
/*! exports provided: STOP_POINTS, TOKENS, VALUES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_POINTS", function() { return STOP_POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKENS", function() { return TOKENS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUES", function() { return VALUES; });
var STOP_POINTS = [['special'], ['ten'], ['unit'], ['ten', 'unit'], ['unit', 'hundred'], ['unit', 'hundred', 'special'], ['unit', 'hundred', 'ten'], ['unit', 'hundred', 'unit'], ['unit', 'hundred', 'ten', 'unit']];

var TOKENS = {
  hundred: ['hundred'],
  power: ['thousand', 'million', 'billion', 'trillion'],
  special: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
  ten: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
  unit: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
};

var VALUES = {
  billion: 1000000000,
  eight: 8,
  eighteen: 18,
  eighty: 80,
  eleven: 11,
  false: 0,
  fifteen: 15,
  fifty: 50,
  five: 5,
  forty: 40,
  four: 4,
  fourteen: 14,
  hundred: 100,
  million: 1000000,
  nine: 9,
  nineteen: 19,
  ninety: 90,
  one: 1,
  seven: 7,
  seventeen: 17,
  seventy: 70,
  six: 6,
  sixteen: 16,
  sixty: 60,
  ten: 10,
  thirteen: 13,
  thirty: 30,
  thousand: 1000,
  three: 3,
  trillion: 1000000000000,
  true: 1,
  twelve: 12,
  twenty: 20,
  two: 2,
  zero: 0
};





/***/ }),

/***/ "./src/_internals/objectClass.js":
/*!***************************************!*\
  !*** ./src/_internals/objectClass.js ***!
  \***************************************/
/*! exports provided: ARGUMENTS, ARRAY, ARRAY_BUFFER, BOOLEAN, DATA_VIEW, DATE, ERROR, FLOAT_32_ARRAY, FLOAT_64_ARRAY, FUNCTION, GENERATOR, INT_8_ARRAY, INT_16_ARRAY, INT_32_ARRAY, MAP, MATH, NULL, NUMBER, OBJECT, PROMISE, REGEXP, SET, STRING, SYMBOL, UINT_8_ARRAY, UINT_8_CLAMPED_ARRAY, UINT_16_ARRAY, UINT_32_ARRAY, UNDEFINED, WEAKMAP, WEAKSET, WINDOW, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARGUMENTS", function() { return ARGUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY", function() { return ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_BUFFER", function() { return ARRAY_BUFFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOLEAN", function() { return BOOLEAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_VIEW", function() { return DATA_VIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE", function() { return DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLOAT_32_ARRAY", function() { return FLOAT_32_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLOAT_64_ARRAY", function() { return FLOAT_64_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNCTION", function() { return FUNCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATOR", function() { return GENERATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INT_8_ARRAY", function() { return INT_8_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INT_16_ARRAY", function() { return INT_16_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INT_32_ARRAY", function() { return INT_32_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP", function() { return MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATH", function() { return MATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NULL", function() { return NULL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER", function() { return NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJECT", function() { return OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROMISE", function() { return PROMISE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEXP", function() { return REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET", function() { return SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRING", function() { return STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYMBOL", function() { return SYMBOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UINT_8_ARRAY", function() { return UINT_8_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UINT_8_CLAMPED_ARRAY", function() { return UINT_8_CLAMPED_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UINT_16_ARRAY", function() { return UINT_16_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UINT_32_ARRAY", function() { return UINT_32_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNDEFINED", function() { return UNDEFINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEAKMAP", function() { return WEAKMAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEAKSET", function() { return WEAKSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
var ARGUMENTS = '[object Arguments]';
var ARRAY = '[object Array]';
var ARRAY_BUFFER = '[object ArrayBuffer]';
var BOOLEAN = '[object Boolean]';
var DATA_VIEW = '[object DataView]';
var DATE = '[object Date]';
var ERROR = '[object Error]';
var FLOAT_32_ARRAY = '[object Float32Array]';
var FLOAT_64_ARRAY = '[object Float64Array]';
var FUNCTION = '[object Function]';
var GENERATOR = '[object GeneratorFunction]';
var INT_8_ARRAY = '[object Int8Array]';
var INT_16_ARRAY = '[object Int16Array]';
var INT_32_ARRAY = '[object Int32Array]';
var MAP = '[object Map]';
var MATH = '[object Math]';
var NULL = '[object Null]';
var NUMBER = '[object Number]';
var OBJECT = '[object Object]';
var PROMISE = '[object Promise]';
var REGEXP = '[object RegExp]';
var SET = '[object Set]';
var STRING = '[object String]';
var SYMBOL = '[object Symbol]';
var UINT_8_ARRAY = '[object Uint8Array]';
var UINT_8_CLAMPED_ARRAY = '[object Uint8ClampedArray]';
var UINT_16_ARRAY = '[object Uint16Array]';
var UINT_32_ARRAY = '[object Uint32Array]';
var UNDEFINED = '[object Undefined]';
var WEAKMAP = '[object WeakMap]';
var WEAKSET = '[object WeakSet]';
var WINDOW = '[object Window]';

/* harmony default export */ __webpack_exports__["default"] = ({
  ARGUMENTS: ARGUMENTS,
  ARRAY: ARRAY,
  ARRAY_BUFFER: ARRAY_BUFFER,
  BOOLEAN: BOOLEAN,
  DATA_VIEW: DATA_VIEW,
  DATE: DATE,
  ERROR: ERROR,
  FLOAT_32_ARRAY: FLOAT_32_ARRAY,
  FLOAT_64_ARRAY: FLOAT_64_ARRAY,
  FUNCTION: FUNCTION,
  GENERATOR: GENERATOR,
  INT_8_ARRAY: INT_8_ARRAY,
  INT_16_ARRAY: INT_16_ARRAY,
  INT_32_ARRAY: INT_32_ARRAY,
  MAP: MAP,
  MATH: MATH,
  NULL: NULL,
  NUMBER: NUMBER,
  OBJECT: OBJECT,
  PROMISE: PROMISE,
  REGEXP: REGEXP,
  SET: SET,
  STRING: STRING,
  SYMBOL: SYMBOL,
  UINT_8_ARRAY: UINT_8_ARRAY,
  UINT_8_CLAMPED_ARRAY: UINT_8_CLAMPED_ARRAY,
  UINT_16_ARRAY: UINT_16_ARRAY,
  UINT_32_ARRAY: UINT_32_ARRAY,
  UNDEFINED: UNDEFINED,
  WEAKMAP: WEAKMAP,
  WEAKSET: WEAKSET,
  WINDOW: WINDOW
});

/***/ }),

/***/ "./src/_internals/utils.js":
/*!*********************************!*\
  !*** ./src/_internals/utils.js ***!
  \*********************************/
/*! exports provided: UNSUPPORTED_ERROR_FINISH, getObjectClass, circularStringify, parse, stringify, isEncapsulatedBy, throwUnsupportedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSUPPORTED_ERROR_FINISH", function() { return UNSUPPORTED_ERROR_FINISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectClass", function() { return getObjectClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circularStringify", function() { return circularStringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEncapsulatedBy", function() { return isEncapsulatedBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwUnsupportedError", function() { return throwUnsupportedError; });
/* harmony import */ var fast_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-stringify */ "./node_modules/fast-stringify/es/index.js");
// external dependencies


var UNSUPPORTED_ERROR_FINISH = 'is not supported in your current browser. If you are using babel, make sure to import babel-polyfill into your project, otherwise you should add your own polyfill, such as core-js.';

/**
 * get the toString value of object
 *
 * @param {any} object
 * @returns {string}
 */
var getObjectClass = function getObjectClass(object) {
  return toString.call(object);
};

var circularStringify = function circularStringify(object, replacer, onFail) {
  try {
    return Object(fast_stringify__WEBPACK_IMPORTED_MODULE_0__["default"])(object, replacer);
  } catch (nonCircularError) {
    return onFail(object);
  }
};

var parse = function parse(object, onFail) {
  try {
    return JSON.parse(object);
  } catch (error) {
    return onFail(object);
  }
};

var stringify = function stringify(object, replacer) {
  try {
    return JSON.stringify(object, replacer);
  } catch (error) {
    return circularStringify(object, replacer);
  }
};

/**
 * determine if string starts with begin and ends with end
 *
 * @param {string} string
 * @param {string} begin
 * @param {string} end
 * @returns {boolean}
 */
var isEncapsulatedBy = function isEncapsulatedBy(string, begin) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : begin;
  return typeof string === 'string' && string.indexOf(begin) === 0 && string.lastIndexOf(end) === string.length - 1;
};

/**
 * throw a new error saying the specific object class is not supported
 *
 * @param {string} objectClass
 */
var throwUnsupportedError = function throwUnsupportedError(objectClass) {
  throw new Error(objectClass + ' ' + UNSUPPORTED_ERROR_FINISH);
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: toArray, toBoolean, toDate, toError, toFunction, toGenerator, toMap, toNull, toNumber, toObject, toPromise, toRegExp, toSet, toString, toSymbol, toUndefined, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toArray */ "./src/toArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return _toArray__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _toBoolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toBoolean */ "./src/toBoolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return _toBoolean__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDate */ "./src/toDate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return _toDate__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _toError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toError */ "./src/toError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toError", function() { return _toError__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _toFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toFunction */ "./src/toFunction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toFunction", function() { return _toFunction__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _toGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toGenerator */ "./src/toGenerator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toGenerator", function() { return _toGenerator__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _toMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toMap */ "./src/toMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMap", function() { return _toMap__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _toNull__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toNull */ "./src/toNull.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNull", function() { return _toNull__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _toNumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toNumber */ "./src/toNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return _toNumber__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _toObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toObject */ "./src/toObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toObject", function() { return _toObject__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _toPromise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toPromise */ "./src/toPromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return _toPromise__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _toRegExp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toRegExp */ "./src/toRegExp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRegExp", function() { return _toRegExp__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _toSet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./toSet */ "./src/toSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSet", function() { return _toSet__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./toString */ "./src/toString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return _toString__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _toSymbol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./toSymbol */ "./src/toSymbol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSymbol", function() { return _toSymbol__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _toUndefined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./toUndefined */ "./src/toUndefined.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toUndefined", function() { return _toUndefined__WEBPACK_IMPORTED_MODULE_15__["default"]; });


















var convertify = function convertify(type, object) {
  var normalizedType = type.toLowerCase();

  switch (normalizedType) {
    case 'array':
      return Object(_toArray__WEBPACK_IMPORTED_MODULE_0__["default"])(object);

    case 'boolean':
      return Object(_toBoolean__WEBPACK_IMPORTED_MODULE_1__["default"])(object);

    case 'date':
      return Object(_toDate__WEBPACK_IMPORTED_MODULE_2__["default"])(object);

    case 'error':
      return Object(_toError__WEBPACK_IMPORTED_MODULE_3__["default"])(object);

    case 'function':
      return Object(_toFunction__WEBPACK_IMPORTED_MODULE_4__["default"])(object);

    case 'generator':
      return Object(_toGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(object);

    case 'map':
      return Object(_toMap__WEBPACK_IMPORTED_MODULE_6__["default"])(object);

    case 'null':
      return Object(_toNull__WEBPACK_IMPORTED_MODULE_7__["default"])(object);

    case 'number':
      return Object(_toNumber__WEBPACK_IMPORTED_MODULE_8__["default"])(object);

    case 'object':
      return Object(_toObject__WEBPACK_IMPORTED_MODULE_9__["default"])(object);

    case 'promise':
      return Object(_toPromise__WEBPACK_IMPORTED_MODULE_10__["default"])(object);

    case 'regexp':
      return Object(_toRegExp__WEBPACK_IMPORTED_MODULE_11__["default"])(object);

    case 'set':
      return Object(_toSet__WEBPACK_IMPORTED_MODULE_12__["default"])(object);

    case 'string':
      return Object(_toString__WEBPACK_IMPORTED_MODULE_13__["default"])(object);

    case 'symbol':
      return Object(_toSymbol__WEBPACK_IMPORTED_MODULE_14__["default"])(object);

    case 'undefined':
      return Object(_toUndefined__WEBPACK_IMPORTED_MODULE_15__["default"])(object);

    default:
      throw new TypeError('This type of conversion is not currently supported.');
  }
};

convertify.array = _toArray__WEBPACK_IMPORTED_MODULE_0__["default"];
convertify.boolean = _toBoolean__WEBPACK_IMPORTED_MODULE_1__["default"];
convertify.date = _toDate__WEBPACK_IMPORTED_MODULE_2__["default"];
convertify.error = _toError__WEBPACK_IMPORTED_MODULE_3__["default"];
convertify.function = _toFunction__WEBPACK_IMPORTED_MODULE_4__["default"];
convertify.generator = _toGenerator__WEBPACK_IMPORTED_MODULE_5__["default"];
convertify.map = _toMap__WEBPACK_IMPORTED_MODULE_6__["default"];
convertify.null = _toNull__WEBPACK_IMPORTED_MODULE_7__["default"];
convertify.number = _toNumber__WEBPACK_IMPORTED_MODULE_8__["default"];
convertify.object = _toObject__WEBPACK_IMPORTED_MODULE_9__["default"];
convertify.promise = _toPromise__WEBPACK_IMPORTED_MODULE_10__["default"];
convertify.regexp = _toRegExp__WEBPACK_IMPORTED_MODULE_11__["default"];
convertify.set = _toSet__WEBPACK_IMPORTED_MODULE_12__["default"];
convertify.string = _toString__WEBPACK_IMPORTED_MODULE_13__["default"];
convertify.symbol = _toSymbol__WEBPACK_IMPORTED_MODULE_14__["default"];
convertify.undefined = _toUndefined__WEBPACK_IMPORTED_MODULE_15__["default"];



/* harmony default export */ __webpack_exports__["default"] = (convertify);

/***/ }),

/***/ "./src/toArray.js":
/*!************************!*\
  !*** ./src/toArray.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internals/objectClass */ "./src/_internals/objectClass.js");
/* harmony import */ var _internals_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_internals/utils */ "./src/_internals/utils.js");
// constants


// utils


/**
 * convert object to an array, with different
 * mappings depending on the object type
 *
 * @param {any} object
 * @returns {array}
 */
var toArray = function toArray(object) {
  var objectClass = Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["getObjectClass"])(object);

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["ARRAY"]) {
    return object;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["OBJECT"]) {
    var array = [];

    for (var key in object) {
      array.push(object[key]);
    }

    return array;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["MAP"] || objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["SET"]) {
    var _array = [];

    object.forEach(function (value) {
      return _array.push(value);
    });

    return _array;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["STRING"]) {
    return Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["isEncapsulatedBy"])(object, '[', ']') ? Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["parse"])(object, function () {
      return [object];
    }) : [object];
  }

  return [object];
};

/* harmony default export */ __webpack_exports__["default"] = (toArray);

/***/ }),

/***/ "./src/toBoolean.js":
/*!**************************!*\
  !*** ./src/toBoolean.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internals/objectClass */ "./src/_internals/objectClass.js");
/* harmony import */ var _internals_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_internals/utils */ "./src/_internals/utils.js");
// constants


// utils


var keys = Object.keys;

/**
 * convert object to boolean with different mappings
 * based on object type
 *
 * @param {any} object
 * @returns {boolean}
 */

var toBoolean = function toBoolean(object) {
  var objectClass = Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["getObjectClass"])(object);

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["BOOLEAN"]) {
    return object;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["ARRAY"]) {
    return !!object.length;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["OBJECT"]) {
    return !!keys(object).length;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["MAP"] || objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["SET"]) {
    return !!object.size;
  }

  return !!object;
};

/* harmony default export */ __webpack_exports__["default"] = (toBoolean);

/***/ }),

/***/ "./src/toDate.js":
/*!***********************!*\
  !*** ./src/toDate.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internals/objectClass */ "./src/_internals/objectClass.js");
/* harmony import */ var _internals_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_internals/utils */ "./src/_internals/utils.js");
// constants


// utils


var keys = Object.keys;
var hasOwnProperty = Object.prototype.hasOwnProperty;


var OBJECT_TO_DATE_ORDER = ['year', 'month', 'day', 'hour', 'minutes', 'seconds', 'milliseconds'];
var OBJECT_TO_DATE_ORDER_LENGTH = OBJECT_TO_DATE_ORDER.length;

var getInvalidDate = function getInvalidDate() {
  return new Date('invalid');
};

/**
 * convert object to date with different mappings
 * based on object type
 *
 * @param {any} object
 * @returns {date}
 */
var toDate = function toDate(object) {
  // eslint-disable-next-line eqeqeq
  if (object == null) {
    return new Date();
  }

  var objectClass = Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["getObjectClass"])(object);

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["DATE"]) {
    return object;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["ARRAY"]) {
    return new (Function.prototype.bind.apply(Date, [null].concat(object)))();
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["OBJECT"]) {
    if (!keys(object).length) {
      return new Date();
    }

    var dateArray = [];

    var index = -1;
    var key = void 0;

    while (++index < OBJECT_TO_DATE_ORDER_LENGTH) {
      key = OBJECT_TO_DATE_ORDER[index];

      if (hasOwnProperty.call(object, key)) {
        dateArray.push(object[key]);
      }
    }

    return dateArray.length ? new (Function.prototype.bind.apply(Date, [null].concat(dateArray)))() : getInvalidDate();
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["MAP"]) {
    if (!object.size) {
      return new Date();
    }

    var _dateArray = [];

    var _index = -1;
    var _key = void 0;

    while (++_index < OBJECT_TO_DATE_ORDER_LENGTH) {
      _key = OBJECT_TO_DATE_ORDER[_index];

      if (object.has(_key)) {
        _dateArray.push(object.get(_key));
      }
    }

    return _dateArray.length ? new (Function.prototype.bind.apply(Date, [null].concat(_dateArray)))() : getInvalidDate();
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["SET"]) {
    if (!object.size) {
      return new Date();
    }

    var _dateArray2 = [];

    object.forEach(function (value) {
      return _dateArray2.push(value);
    });

    return new (Function.prototype.bind.apply(Date, [null].concat(_dateArray2)))();
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["BOOLEAN"] || objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["SYMBOL"]) {
    return getInvalidDate();
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["STRING"]) {
    return object ? new Date(object) : new Date();
  }

  return new Date(object);
};

/* harmony default export */ __webpack_exports__["default"] = (toDate);

/***/ }),

/***/ "./src/toError.js":
/*!************************!*\
  !*** ./src/toError.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toString */ "./src/toString.js");
/* harmony import */ var _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_internals/objectClass */ "./src/_internals/objectClass.js");
/* harmony import */ var _internals_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_internals/utils */ "./src/_internals/utils.js");
// transform


// constants


// utils


/**
 * convert object to error with the stringified
 * contents of the object as the message
 *
 * @param {any} object
 * @returns {error}
 */
var toError = function toError(object) {
  var objectClass = Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["getObjectClass"])(object);

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["ERROR"]) {
    return object;
  }

  var message = objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["STRING"] ? object : Object(_toString__WEBPACK_IMPORTED_MODULE_0__["default"])(object);

  return new Error(message);
};

/* harmony default export */ __webpack_exports__["default"] = (toError);

/***/ }),

/***/ "./src/toFunction.js":
/*!***************************!*\
  !*** ./src/toFunction.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internals/objectClass */ "./src/_internals/objectClass.js");
/* harmony import */ var _internals_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_internals/utils */ "./src/_internals/utils.js");
// constants


// utils


/**
 * convert object to function by wrapping the object
 * in a function
 *
 * @param {any} object
 * @returns {function}
 */
var toFunction = function toFunction(object) {
  return Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["getObjectClass"])(object) === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["FUNCTION"] ? object : function () {
    return object;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (toFunction);

/***/ }),

/***/ "./src/toGenerator.js":
/*!****************************!*\
  !*** ./src/toGenerator.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internals/objectClass */ "./src/_internals/objectClass.js");
/* harmony import */ var _internals_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_internals/utils */ "./src/_internals/utils.js");
// constants


// utils


var throwErrorIfUnsupported = function throwErrorIfUnsupported() {
  try {
    /* eslint-disable no-eval */
    eval('(function *(){})');
    /* eslint-enable */
  } catch (exception) {
    Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["throwUnsupportedError"])('Generator');
  }
};

/**
 * convert object to generator function with returned
 * generators based on the object type
 *
 * @param {any} object
 * @returns {generator}
 */
var toGenerator = function toGenerator(object) {
  throwErrorIfUnsupported();

  var objectClass = Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["getObjectClass"])(object);

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["GENERATOR"]) {
    return object;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["ARRAY"]) {
    return (/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var length, index;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                length = object.length;
                index = -1;

              case 2:
                if (!(++index < length)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 5;
                return object[index];

              case 5:
                _context.next = 2;
                break;

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      })
    );
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["MAP"]) {
    return (/*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var keys, values, length, index, key;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                keys = [], values = {};


                object.forEach(function (value, key) {
                  keys.push(key);

                  values[key] = value;
                });

                length = object.size;
                index = -1, key = void 0;

              case 4:
                if (!(++index < length)) {
                  _context2.next = 10;
                  break;
                }

                key = keys[index];

                _context2.next = 8;
                return values[key];

              case 8:
                _context2.next = 4;
                break;

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      })
    );
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["OBJECT"]) {
    return (/*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var keys, length, index, key;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                keys = Object.keys(object);
                length = keys.length;
                index = -1, key = void 0;

              case 3:
                if (!(++index < length)) {
                  _context3.next = 9;
                  break;
                }

                key = keys[index];

                _context3.next = 7;
                return object[key];

              case 7:
                _context3.next = 3;
                break;

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      })
    );
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["SET"]) {
    return (/*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var values, length, index;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                values = [];


                object.forEach(function (value) {
                  values.push(value);
                });

                length = object.size;
                index = -1;

              case 4:
                if (!(++index < length)) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 7;
                return values[index];

              case 7:
                _context4.next = 4;
                break;

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      })
    );
  }

  return (/*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return object;

            case 2:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (toGenerator);

/***/ }),

/***/ "./src/toMap.js":
/*!**********************!*\
  !*** ./src/toMap.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internals/objectClass */ "./src/_internals/objectClass.js");
/* harmony import */ var _internals_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_internals/utils */ "./src/_internals/utils.js");
// constants


// utils


/**
 * convert object to a map with different mappings
 * based on object type
 *
 * @param {any} object
 * @returns {map}
 */
var toMap = function toMap(object) {
  if (typeof Map === 'undefined') {
    Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["throwUnsupportedError"])('Map');
  }

  var objectClass = Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["getObjectClass"])(object);

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["MAP"]) {
    return object;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["ARRAY"]) {
    return object.reduce(function (map, value, index) {
      map.set(index, value);

      return map;
    }, new Map());
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["OBJECT"]) {
    var _map = new Map();

    var mapKey = void 0;

    var _loop = function _loop(key) {
      mapKey = Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["parse"])(key, function () {
        return key;
      });

      _map.set(mapKey, object[key]);
    };

    for (var key in object) {
      _loop(key);
    }

    return _map;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["SET"]) {
    if (typeof Set === 'undefined') {
      Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["throwUnsupportedError"])('Set');
    }

    var _map2 = new Map();

    var index = 0;

    object.forEach(function (value) {
      return _map2.set(index++, value);
    });

    return _map2;
  }

  var map = new Map();

  map.set(0, object);

  return map;
};

/* harmony default export */ __webpack_exports__["default"] = (toMap);

/***/ }),

/***/ "./src/toNull.js":
/*!***********************!*\
  !*** ./src/toNull.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * return null (noop)
 *
 * @returns {null}
 */
var toNull = function toNull() {
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (toNull);

/***/ }),

/***/ "./src/toNumber.js":
/*!*************************!*\
  !*** ./src/toNumber.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internals_numbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internals/numbers */ "./src/_internals/numbers.js");
/* harmony import */ var _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_internals/objectClass */ "./src/_internals/objectClass.js");
/* harmony import */ var _internals_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_internals/utils */ "./src/_internals/utils.js");
// constants



// utils


var keys = Object.keys;

/**
 * remove extraneous portions of the string and eliminate plurals
 *
 * @param {string} string
 * @returns {string}
 */

var sanitize = function sanitize(string) {
  return string.toLowerCase().replace(/ and /g, ' ').replace(/ +(?= )/g, '').replace(/-/g, '').replace(/(hundreds|thousands|millions|billions|trillions)/g, function (match) {
    return match.slice(0, -1);
  });
};

/**
 * get the type (unit, power, special, etc) for the
 * numberString
 *
 * @param {string} numberString
 * @returns {string|null}
 */
var getType = function getType(numberString) {
  for (var key in _internals_numbers__WEBPACK_IMPORTED_MODULE_0__["TOKENS"]) {
    if (~_internals_numbers__WEBPACK_IMPORTED_MODULE_0__["TOKENS"][key].indexOf(numberString)) {
      return key;
    }
  }

  return null;
};

/**
 * split the string and make sure each part
 * is a valid value
 *
 * @param {string} string
 * @returns {array<string>}
 */
var splitAndValidate = function splitAndValidate(string) {
  return string.split(' ').map(function (value) {
    if (value === null) {
      throw new Error(value + ' is not a valid number.');
    }

    return value;
  });
};

/**
 * is the leftArray equal to the right array in value
 *
 * @param {array<string>} leftArray
 * @param {array<string>} rightArray
 * @returns {boolean}
 */
var isSameArray = function isSameArray(leftArray, rightArray) {
  var leftLength = leftArray.length;

  if (Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["getObjectClass"])(leftArray) !== _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["ARRAY"] || Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["getObjectClass"])(rightArray) !== _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["ARRAY"] || leftLength !== rightArray.length) {
    return false;
  }

  var index = -1;

  while (++index < leftLength) {
    if (leftArray[index] !== rightArray[index]) {
      return false;
    }
  }

  return true;
};

/**
 * determine if array contents are considered a stopping point
 *
 * @param {array<string>} array
 * @returns {boolean}
 */
var isStopPoint = function isStopPoint(array) {
  var length = _internals_numbers__WEBPACK_IMPORTED_MODULE_0__["STOP_POINTS"].length;

  var index = -1;

  while (++index < length) {
    if (isSameArray(_internals_numbers__WEBPACK_IMPORTED_MODULE_0__["STOP_POINTS"][index], array)) {
      return true;
    }
  }

  return false;
};

/**
 * group the array of values based on their type
 * (units, powers, etc)
 *
 * @param {array<string>} array
 * @returns {array<array>}
 */
var groupTokens = function groupTokens(array) {
  var arrayClone = [].concat(array),
      tempArray = [],
      groups = [],
      typeArray = void 0,
      currentToken = void 0,
      currentType = void 0;

  while (arrayClone.length) {
    currentToken = arrayClone.pop();
    currentType = getType(currentToken);

    tempArray.unshift(currentToken);

    typeArray = tempArray.map(function (item) {
      return getType(item);
    });

    if (currentType === 'power' || isStopPoint(typeArray)) {
      groups.unshift(tempArray);

      tempArray = [];
    }
  }

  return groups;
};

/**
 * calculate sum based on array
 *
 * @param {array<array>} array
 * @returns {number}
 */
var reduceArray = function reduceArray(array) {
  var next = void 0;

  return array.reduce(function (sum, current, index) {
    next = array[index + 1];

    if (next === 100) {
      return sum += current * 100;
    }

    if (current !== 100) {
      return sum += current;
    }

    return sum;
  }, 0);
};

/**
 * based on groups, calculate the total value
 *
 * @param {array<array>} groups
 * @returns {number}
 */
var calculateValue = function calculateValue(groups) {
  var length = groups.length;

  var currentStack = 0;

  return groups.reduce(function (sum, group, index) {
    if (getType(group[0] === 'power')) {
      sum += currentStack * _internals_numbers__WEBPACK_IMPORTED_MODULE_0__["VALUES"][group[0]];

      currentStack = 0;
    } else {
      currentStack += reduceArray(group.map(function (item) {
        return _internals_numbers__WEBPACK_IMPORTED_MODULE_0__["VALUES"][item];
      }));

      if (index === length - 1) {
        sum += currentStack;
      }
    }

    return sum;
  }, 0);
};

/**
 * convert object to number with different mappings
 * based on object type
 *
 * if object is a string, try to convert it via parseFloat
 * or words-to-number
 *
 * @param {any} object
 * @returns {number}
 */
var toNumber = function toNumber(object) {
  // eslint-disable-next-line eqeqeq
  if (object == null) {
    return 0;
  }

  var objectClass = Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["getObjectClass"])(object);

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["NUMBER"]) {
    return object;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["BOOLEAN"]) {
    return object === true ? 1 : 0;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["DATE"]) {
    return object.getTime();
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["ARRAY"]) {
    return object.length;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["OBJECT"]) {
    return keys(object).length;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["MAP"] || objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["SET"]) {
    return object.size;
  }

  if (objectClass !== _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["STRING"]) {
    return NaN;
  }

  if (object === 'true' || object === 'false') {
    return _internals_numbers__WEBPACK_IMPORTED_MODULE_0__["VALUES"][object];
  }

  var parsedNumber = parseFloat(object);

  if (parsedNumber === parsedNumber) {
    return parsedNumber;
  }

  var string = object.trim();

  if (!string) {
    return 0;
  }

  var valueAsIs = _internals_numbers__WEBPACK_IMPORTED_MODULE_0__["VALUES"][string];

  if (valueAsIs !== void 0) {
    return valueAsIs;
  }

  var sanitizedString = sanitize(string);
  var splitString = splitAndValidate(sanitizedString);
  var groups = groupTokens(splitString);
  var value = calculateValue(groups);

  return typeof value === 'number' ? value : NaN;
};

/* harmony default export */ __webpack_exports__["default"] = (toNumber);

/***/ }),

/***/ "./src/toObject.js":
/*!*************************!*\
  !*** ./src/toObject.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internals/objectClass */ "./src/_internals/objectClass.js");
/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toString */ "./src/toString.js");
/* harmony import */ var _internals_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_internals/utils */ "./src/_internals/utils.js");
// constants


// transform


// utils


/**
 * for most values, return a new object with a single key-value
 * pair, where the object passed is the value
 *
 * @param {any} object
 * @returns {{0: any}}
 */
var returnDefaultObject = function returnDefaultObject(object) {
  return {
    0: object
  };
};

/**
 * convert object to proper object with different mappings
 * based on object type
 *
 * @param {any} object
 * @returns {object}
 */
var toObject = function toObject(object) {
  var objectClass = Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["getObjectClass"])(object);

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["OBJECT"]) {
    return object;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["ARRAY"]) {
    return object.reduce(function (newObject, value, index) {
      newObject[index] = value;

      return newObject;
    }, {});
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["MAP"]) {
    var newObject = {};

    object.forEach(function (value, key) {
      newObject[Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["getObjectClass"])(key) === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["STRING"] ? key : Object(_toString__WEBPACK_IMPORTED_MODULE_1__["default"])(key)] = value;
    });

    return newObject;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["SET"]) {
    var _newObject = {};

    var index = 0;

    object.forEach(function (value) {
      _newObject[index++] = value;
    });

    return _newObject;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["STRING"]) {
    if (Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["isEncapsulatedBy"])(object, '{', '}')) {
      try {
        return JSON.parse(object);
      } catch (exception) {
        return returnDefaultObject(object);
      }
    }

    return returnDefaultObject(object);
  }

  switch (Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["getObjectClass"])(object)) {
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["STRING"]:

    default:
      return returnDefaultObject(object);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (toObject);

/***/ }),

/***/ "./src/toPromise.js":
/*!**************************!*\
  !*** ./src/toPromise.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internals/objectClass */ "./src/_internals/objectClass.js");
/* harmony import */ var _internals_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_internals/utils */ "./src/_internals/utils.js");
// constants


// utils


/**
 * convert object to promise by wrapping it in
 * a Promise.resolve()
 *
 * @param {any} object
 * @returns {promise}
 */
var toPromise = function toPromise(object) {
  if (typeof Promise === 'undefined') {
    Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["throwUnsupportedError"])('Promise');
  }

  return Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["getObjectClass"])(object) === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["PROMISE"] ? object : Promise.resolve(object);
};

/* harmony default export */ __webpack_exports__["default"] = (toPromise);

/***/ }),

/***/ "./src/toRegExp.js":
/*!*************************!*\
  !*** ./src/toRegExp.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internals/objectClass */ "./src/_internals/objectClass.js");
/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toString */ "./src/toString.js");
/* harmony import */ var _internals_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_internals/utils */ "./src/_internals/utils.js");
// constants


// transform


// utils


/**
 * convert object to regexp with different mappings
 * based on object type
 *
 * @param {any} object
 * @returns {regexp}
 */
var toRegExp = function toRegExp(object) {
  var objectToString = Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["getObjectClass"])(object);

  if (objectToString === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["REGEXP"]) {
    return object;
  }

  var string = objectToString === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["STRING"] ? object : Object(_toString__WEBPACK_IMPORTED_MODULE_1__["default"])(object);

  if (Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["isEncapsulatedBy"])(string, '/')) {
    string = string.substring(1, string.length - 1);
  }

  if (!string) {
    string = '(.*)';
  }

  return new RegExp(string);
};

/* harmony default export */ __webpack_exports__["default"] = (toRegExp);

/***/ }),

/***/ "./src/toSet.js":
/*!**********************!*\
  !*** ./src/toSet.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internals/objectClass */ "./src/_internals/objectClass.js");
/* harmony import */ var _internals_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_internals/utils */ "./src/_internals/utils.js");
// constants


// utils


/**
 * convert object to set with different mappings
 * based on object type
 *
 * @param {any} object
 * @returns {set}
 */
var toSet = function toSet(object) {
  if (typeof Set === 'undefined') {
    Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["throwUnsupportedError"])('Set');
  }

  var objectClass = Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["getObjectClass"])(object);

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["SET"]) {
    return object;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["ARRAY"]) {
    return object.reduce(function (set, value) {
      return set.add(value);
    }, new Set());
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["MAP"]) {
    if (typeof Map === 'undefined') {
      Object(_internals_utils__WEBPACK_IMPORTED_MODULE_1__["throwUnsupportedError"])('Map');
    }

    var _set = new Set();

    object.forEach(function (value) {
      return _set.add(value);
    });

    return _set;
  }

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["OBJECT"]) {
    var _set2 = new Set();

    for (var key in object) {
      _set2.add(object[key]);
    }

    return _set2;
  }

  var set = new Set();

  set.add([object]);

  return set;
};

/* harmony default export */ __webpack_exports__["default"] = (toSet);

/***/ }),

/***/ "./src/toString.js":
/*!*************************!*\
  !*** ./src/toString.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fast_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-stringify */ "./node_modules/fast-stringify/es/index.js");
/* harmony import */ var _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_internals/objectClass */ "./src/_internals/objectClass.js");
/* harmony import */ var _internals_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_internals/utils */ "./src/_internals/utils.js");
// external dependencies


// constants


// utils


var HTML_ELEMENT_REGEXP = /\[object (HTML(.*)Element)\]/;
var MATH_PROPERTIES = ['E', 'LN2', 'LN10', 'LOG2E', 'LOG10E', 'PI', 'SQRT1_2', 'SQRT2'];

/**
 * get the string value of the buffer passed
 *
 * @param {ArrayBuffer} buffer
 * @returns {string}
 */
var arrayBufferToString = function arrayBufferToString(buffer) {
  if (typeof Uint16Array === 'undefined') {
    return '';
  }

  return String.fromCharCode.apply(null, new Uint16Array(buffer));
};

/**
 * strip away [object and ] from return of toString()
 * to get the object class
 *
 * @param {string} type
 * @returns {string}
 */
var getObjectType = function getObjectType(type) {
  return type.replace(/^\[object (.+)\]$/, '$1');
};

/**
 * get the string value for the object used for stringification
 *
 * @param {any} object
 * @returns {any}
 */
var getValueForStringification = function getValueForStringification(object) {
  var objectClass = Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["getObjectClass"])(object);
  var type = getObjectType(objectClass);

  switch (objectClass) {
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].ARGUMENTS:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].ARRAY:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].OBJECT:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].NUMBER:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].STRING:
      return object;

    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].NULL:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].REGEXP:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].UNDEFINED:
      return '' + object;

    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].DATE:
      return object.toISOString();

    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].FUNCTION:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].GENERATOR:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].SYMBOL:
      return object.toString();

    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].PROMISE:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].WEAKMAP:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].WEAKSET:
      return type;

    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].MAP:
      var newObject = {};

      object.forEach(function (value, key) {
        newObject[key] = value;
      });

      return newObject;

    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].SET:
      var newArray = [];

      object.forEach(function (item) {
        newArray.push(item);
      });

      return newArray;

    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].ARRAY_BUFFER:
      return arrayBufferToString(object);

    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].DATA_VIEW:
      return arrayBufferToString(object.buffer);

    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].FLOAT_32_ARRAY:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].FLOAT_64_ARRAY:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].INT_8_ARRAY:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].INT_16_ARRAY:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].INT_32_ARRAY:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].UINT_8_ARRAY:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].UINT_8_CLAMPED_ARRAY:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].UINT_16_ARRAY:
    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].UINT_32_ARRAY:
      return '[' + object.join(',') + ']';

    case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].MATH:
      var mathObject = {};

      MATH_PROPERTIES.forEach(function (prop) {
        mathObject[prop] = object[prop];
      });

      return mathObject;

    default:
      return HTML_ELEMENT_REGEXP.test(objectClass) ? object.textContent : object;
  }
};

/**
 * create the replacer function leveraging closure for
 * recursive stack storage
 */
var replacer = function (stack, undefined, recursiveCounter, index) {
  return function (key, value) {
    if (key === '') {
      stack = [value];
      recursiveCounter = 0;

      return value;
    }

    var objectClass = Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["getObjectClass"])(value);

    switch (objectClass) {
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].NUMBER:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].STRING:
        return value;

      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].ARGUMENTS:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].ARRAY:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].OBJECT:
        if (!value) {
          return value;
        }

        if (++recursiveCounter > 255) {
          return 'undefined';
        }

        index = stack.indexOf(value);

        if (!~index) {
          stack.push(value);

          return value;
        }

        return '@@Recursive ' + (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].ARRAY ? '[Array]' : '{Object}') + ' (' + index + ')';

      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].ARRAY_BUFFER:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].DATA_VIEW:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].DATE:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].FLOAT_32_ARRAY:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].FLOAT_64_ARRAY:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].FUNCTION:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].GENERATOR:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].INT_8_ARRAY:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].INT_16_ARRAY:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].INT_32_ARRAY:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].MAP:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].MATH:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].NULL:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].PROMISE:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].REGEXP:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].SET:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].SYMBOL:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].UINT_8_ARRAY:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].UINT_8_CLAMPED_ARRAY:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].UINT_16_ARRAY:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].UINT_32_ARRAY:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].UNDEFINED:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].WEAKMAP:
      case _internals_objectClass__WEBPACK_IMPORTED_MODULE_1__["default"].WEAKSET:
        return getValueForStringification(value);

      default:
        return value;
    }
  };
}();

/**
 * stringify the object passed leveraging the replacer
 *
 * @param {any} object
 * @returns {string}
 */
var toString = function toString(object) {
  var value = Object(fast_stringify__WEBPACK_IMPORTED_MODULE_0__["default"])(getValueForStringification(object), replacer);

  if (Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["isEncapsulatedBy"])(value, '"')) {
    return value.substring(1, value.length - 1);
  }

  return value;
};

/* harmony default export */ __webpack_exports__["default"] = (toString);

/***/ }),

/***/ "./src/toSymbol.js":
/*!*************************!*\
  !*** ./src/toSymbol.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internals/objectClass */ "./src/_internals/objectClass.js");
/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toString */ "./src/toString.js");
/* harmony import */ var _internals_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_internals/utils */ "./src/_internals/utils.js");
// constants


// transform


// utils


/**
 * convert object to symbol by creating a new symbol
 * from the stringified object
 *
 * @param {any} object
 * @returns {symbol}
 */
var toSymbol = function toSymbol(object) {
  if (typeof Symbol === 'undefined') {
    Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["throwUnsupportedError"])('Symbol');
  }

  var objectClass = Object(_internals_utils__WEBPACK_IMPORTED_MODULE_2__["getObjectClass"])(object);

  if (objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["SYMBOL"]) {
    return object;
  }

  var string = objectClass === _internals_objectClass__WEBPACK_IMPORTED_MODULE_0__["STRING"] ? object : Object(_toString__WEBPACK_IMPORTED_MODULE_1__["default"])(object);

  return Symbol(string);
};

/* harmony default export */ __webpack_exports__["default"] = (toSymbol);

/***/ }),

/***/ "./src/toUndefined.js":
/*!****************************!*\
  !*** ./src/toUndefined.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * return undefined (noop)
 *
 * @returns {undefined}
 */
var toUndefined = function toUndefined() {
  return void 0;
};

/* harmony default export */ __webpack_exports__["default"] = (toUndefined);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tquetano/git/convertify/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=convertify.js.map