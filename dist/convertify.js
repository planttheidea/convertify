var convertify =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.toUndefined = exports.toSymbol = exports.toString = exports.toSet = exports.toRegExp = exports.toPromise = exports.toObject = exports.toNumber = exports.toNull = exports.toMap = exports.toGenerator = exports.toFunction = exports.toError = exports.toDate = exports.toBoolean = exports.toArray = undefined;
	
	var _toArray = __webpack_require__(2);
	
	var _toArray2 = _interopRequireDefault(_toArray);
	
	var _toBoolean = __webpack_require__(6);
	
	var _toBoolean2 = _interopRequireDefault(_toBoolean);
	
	var _toDate = __webpack_require__(7);
	
	var _toDate2 = _interopRequireDefault(_toDate);
	
	var _toError = __webpack_require__(8);
	
	var _toError2 = _interopRequireDefault(_toError);
	
	var _toFunction = __webpack_require__(12);
	
	var _toFunction2 = _interopRequireDefault(_toFunction);
	
	var _toGenerator = __webpack_require__(13);
	
	var _toGenerator2 = _interopRequireDefault(_toGenerator);
	
	var _toMap = __webpack_require__(14);
	
	var _toMap2 = _interopRequireDefault(_toMap);
	
	var _toNull = __webpack_require__(15);
	
	var _toNull2 = _interopRequireDefault(_toNull);
	
	var _toNumber = __webpack_require__(16);
	
	var _toNumber2 = _interopRequireDefault(_toNumber);
	
	var _toObject = __webpack_require__(18);
	
	var _toObject2 = _interopRequireDefault(_toObject);
	
	var _toPromise = __webpack_require__(19);
	
	var _toPromise2 = _interopRequireDefault(_toPromise);
	
	var _toRegExp = __webpack_require__(20);
	
	var _toRegExp2 = _interopRequireDefault(_toRegExp);
	
	var _toSet = __webpack_require__(21);
	
	var _toSet2 = _interopRequireDefault(_toSet);
	
	var _toString = __webpack_require__(9);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _toSymbol = __webpack_require__(22);
	
	var _toSymbol2 = _interopRequireDefault(_toSymbol);
	
	var _toUndefined = __webpack_require__(23);
	
	var _toUndefined2 = _interopRequireDefault(_toUndefined);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TRANSFORMABLE_TYPES = {
	  ARRAY: 'array',
	  BOOLEAN: 'boolean',
	  DATE: 'date',
	  ERROR: 'error',
	  FUNCTION: 'function',
	  GENERATOR: 'generator',
	  MAP: 'map',
	  NULL: 'null',
	  NUMBER: 'number',
	  OBJECT: 'object',
	  PROMISE: 'promise',
	  REGEXP: 'regexp',
	  SET: 'set',
	  STRING: 'string',
	  SYMBOL: 'symbol',
	  UNDEFINED: 'undefined'
	};
	
	var convertify = function convertify(type, object) {
	  var normalizedType = type.toLowerCase();
	
	  switch (normalizedType) {
	    case TRANSFORMABLE_TYPES.ARRAY:
	      return (0, _toArray2.default)(object);
	
	    case TRANSFORMABLE_TYPES.BOOLEAN:
	      return (0, _toBoolean2.default)(object);
	
	    case TRANSFORMABLE_TYPES.DATE:
	      return (0, _toDate2.default)(object);
	
	    case TRANSFORMABLE_TYPES.ERROR:
	      return (0, _toError2.default)(object);
	
	    case TRANSFORMABLE_TYPES.FUNCTION:
	      return (0, _toFunction2.default)(object);
	
	    case TRANSFORMABLE_TYPES.GENERATOR:
	      return (0, _toGenerator2.default)(object);
	
	    case TRANSFORMABLE_TYPES.MAP:
	      return (0, _toMap2.default)(object);
	
	    case TRANSFORMABLE_TYPES.NULL:
	      return (0, _toNull2.default)(object);
	
	    case TRANSFORMABLE_TYPES.NUMBER:
	      return (0, _toNumber2.default)(object);
	
	    case TRANSFORMABLE_TYPES.OBJECT:
	      return (0, _toObject2.default)(object);
	
	    case TRANSFORMABLE_TYPES.PROMISE:
	      return (0, _toPromise2.default)(object);
	
	    case TRANSFORMABLE_TYPES.REGEXP:
	      return (0, _toRegExp2.default)(object);
	
	    case TRANSFORMABLE_TYPES.SET:
	      return (0, _toSet2.default)(object);
	
	    case TRANSFORMABLE_TYPES.STRING:
	      return (0, _toString2.default)(object);
	
	    case TRANSFORMABLE_TYPES.SYMBOL:
	      return (0, _toSymbol2.default)(object);
	
	    case TRANSFORMABLE_TYPES.UNDEFINED:
	      return (0, _toUndefined2.default)(object);
	  }
	};
	
	var _loop = function _loop(key) {
	  var value = TRANSFORMABLE_TYPES[key];
	
	  convertify[value] = function (object) {
	    return convertify(value, object);
	  };
	};
	
	for (var key in TRANSFORMABLE_TYPES) {
	  _loop(key);
	}
	
	exports.toArray = _toArray2.default;
	exports.toBoolean = _toBoolean2.default;
	exports.toDate = _toDate2.default;
	exports.toError = _toError2.default;
	exports.toFunction = _toFunction2.default;
	exports.toGenerator = _toGenerator2.default;
	exports.toMap = _toMap2.default;
	exports.toNull = _toNull2.default;
	exports.toNumber = _toNumber2.default;
	exports.toObject = _toObject2.default;
	exports.toPromise = _toPromise2.default;
	exports.toRegExp = _toRegExp2.default;
	exports.toSet = _toSet2.default;
	exports.toString = _toString2.default;
	exports.toSymbol = _toSymbol2.default;
	exports.toUndefined = _toUndefined2.default;
	exports.default = convertify;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _miscellaneous = __webpack_require__(3);
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _objectClass3 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * convert object to an array, with different
	 * mappings depending on the object type
	 *
	 * @param {any} object
	 * @returns {array}
	 */
	var toArray = function toArray(object) {
	  var objectClass = (0, _objectClass2.default)(object);
	
	  if (objectClass === _objectClass3.ARRAY) {
	    return object;
	  }
	
	  var newArray = [];
	
	  switch (objectClass) {
	    case _objectClass3.OBJECT:
	      var keys = Object.keys(object);
	
	      (0, _miscellaneous.forEach)(keys, function (key) {
	        newArray.push(object[key]);
	      });
	
	      return newArray;
	
	    case _objectClass3.MAP:
	    case _objectClass3.SET:
	      object.forEach(function (value) {
	        newArray.push(value);
	      });
	
	      return newArray;
	
	    case _objectClass3.STRING:
	      if ((0, _miscellaneous.isEncapsulatedBy)(object, '[', ']')) {
	        try {
	          return JSON.parse(object);
	        } catch (exception) {
	          return [object];
	        }
	      }
	
	      return [object];
	
	    default:
	      return [object];
	  }
	}; // utils
	exports.default = toArray;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var UNSUPPORTED_ERROR_FINISH = 'is not supported in your current browser. If you are using babel, make sure to import babel-polyfill into your project, otherwise you should add your own polyfill, such as core-js.';
	
	/**
	 * convenience function when you need to loop and don't need
	 * to worry about breaking
	 *
	 * @param {array<any>} array
	 * @param {function} fn
	 */
	var forEach = function forEach(array, fn) {
	  var length = array.length;
	
	  var index = -1;
	
	  while (++index < length) {
	    fn(array[index], index, array);
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
	  var end = arguments.length <= 2 || arguments[2] === undefined ? begin : arguments[2];
	
	  return string.indexOf(begin) === 0 && string.lastIndexOf(end) === string.length - 1;
	};
	
	/**
	 * throw a new error saying the specific object class is not supported
	 *
	 * @param {string} objectClass
	 */
	var throwUnsupportedError = function throwUnsupportedError(objectClass) {
	  throw new Error(objectClass + ' ' + UNSUPPORTED_ERROR_FINISH);
	};
	
	exports.forEach = forEach;
	exports.isEncapsulatedBy = isEncapsulatedBy;
	exports.throwUnsupportedError = throwUnsupportedError;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	/**
	 * get the toString value of object
	 *
	 * @param {any} object
	 * @returns {string}
	 */
	var getObjectClass = function getObjectClass(object) {
	  return Object.prototype.toString.call(object);
	};
	
	exports.default = getObjectClass;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
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
	
	exports.ARRAY = ARRAY;
	exports.BOOLEAN = BOOLEAN;
	exports.DATE = DATE;
	exports.ERROR = ERROR;
	exports.FUNCTION = FUNCTION;
	exports.GENERATOR = GENERATOR;
	exports.MAP = MAP;
	exports.NULL = NULL;
	exports.NUMBER = NUMBER;
	exports.OBJECT = OBJECT;
	exports.PROMISE = PROMISE;
	exports.REGEXP = REGEXP;
	exports.SET = SET;
	exports.STRING = STRING;
	exports.SYMBOL = SYMBOL;
	exports.UNDEFINED = UNDEFINED;
	exports.WEAKMAP = WEAKMAP;
	exports.WEAKSET = WEAKSET;
	exports.default = {
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
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _objectClass3 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * convert object to boolean with different mappings
	 * based on object type
	 *
	 * @param {any} object
	 * @returns {boolean}
	 */
	// utils
	var toBoolean = function toBoolean(object) {
	  switch ((0, _objectClass2.default)(object)) {
	    case _objectClass3.BOOLEAN:
	      return object;
	
	    case _objectClass3.ARRAY:
	      return !!object.length;
	
	    case _objectClass3.OBJECT:
	      return !!Object.keys(object).length;
	
	    case _objectClass3.MAP:
	    case _objectClass3.SET:
	      return !!object.size;
	
	    default:
	      return !!object;
	  }
	};
	
	// constants
	exports.default = toBoolean;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _objectClass3 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// utils
	var OBJECT_TO_DATE_ORDER = ['year', 'month', 'day', 'hour', 'minutes', 'seconds', 'milliseconds'];
	
	// constants
	
	var OBJECT_TO_DATE_ORDER_LENGTH = OBJECT_TO_DATE_ORDER.length;
	
	/**
	 * convert object to date with different mappings
	 * based on object type
	 *
	 * @param {any} object
	 * @returns {date}
	 */
	var toDate = function toDate(object) {
	  var objectClass = (0, _objectClass2.default)(object);
	
	  if (objectClass === _objectClass3.DATE) {
	    return object;
	  }
	
	  var dateArray = void 0,
	      index = void 0,
	      key = void 0;
	
	  switch (objectClass) {
	    case _objectClass3.ARRAY:
	      return new (Function.prototype.bind.apply(Date, [null].concat(object)))();
	
	    case _objectClass3.OBJECT:
	      if (!Object.keys(object).length) {
	        return new Date();
	      }
	
	      dateArray = [];
	      index = -1;
	
	      while (++index < OBJECT_TO_DATE_ORDER_LENGTH) {
	        key = OBJECT_TO_DATE_ORDER[index];
	
	        if (!object.hasOwnProperty(key)) {
	          break;
	        }
	
	        dateArray.push(object[key]);
	      }
	
	      return dateArray.length ? new (Function.prototype.bind.apply(Date, [null].concat(dateArray)))() : new Date('foo');
	
	    case _objectClass3.MAP:
	      if (!object.size) {
	        return new Date();
	      }
	
	      dateArray = [];
	      index = -1;
	
	      while (++index < OBJECT_TO_DATE_ORDER_LENGTH) {
	        key = OBJECT_TO_DATE_ORDER[index];
	
	        if (!object.has(key)) {
	          break;
	        }
	
	        dateArray.push(object.get(key));
	      }
	
	      return dateArray.length ? new (Function.prototype.bind.apply(Date, [null].concat(dateArray)))() : new Date('foo');
	
	    case _objectClass3.SET:
	      if (!object.size) {
	        return new Date();
	      }
	
	      dateArray = [];
	
	      object.forEach(function (value) {
	        dateArray.push(value);
	      });
	
	      return new (Function.prototype.bind.apply(Date, [null].concat(dateArray)))();
	
	    case _objectClass3.BOOLEAN:
	    case _objectClass3.SYMBOL:
	      return new Date('foo');
	
	    case _objectClass3.NULL:
	    case _objectClass3.UNDEFINED:
	      return new Date();
	
	    case _objectClass3.STRING:
	      return !!object ? new Date(object) : new Date();
	
	    default:
	      return new Date(object);
	  }
	};
	
	exports.default = toDate;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _toString = __webpack_require__(9);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _objectClass3 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * convert object to error with the stringified
	 * contents of the object as the message
	 *
	 * @param {any} object
	 * @returns {error}
	 */
	
	
	// utils
	var toError = function toError(object) {
	  var objectClass = (0, _objectClass2.default)(object);
	
	  if ((0, _objectClass2.default)(object) === _objectClass3.ERROR) {
	    return object;
	  }
	
	  var message = objectClass === _objectClass3.STRING ? object : (0, _toString2.default)(object);
	
	  return new Error(message);
	};
	
	// constants
	// transform
	exports.default = toError;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _miscellaneous = __webpack_require__(3);
	
	var _toString = __webpack_require__(10);
	
	var _prune = __webpack_require__(11);
	
	var _prune2 = _interopRequireDefault(_prune);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * move try/catch to standalone function as any function that contains a try/catch
	 * is not optimized (this allows optimization for as much as possible)
	 *
	 * @param {any} value
	 * @returns {string}
	 */
	var tryCatch = function tryCatch(value) {
	  try {
	    return JSON.stringify(value, _toString.replacer);
	  } catch (exception) {
	    return _prune2.default.prune(value);
	  }
	};
	
	/**
	 * stringify the object passed leveraging the replacer
	 *
	 * @param {any} object
	 * @returns {string}
	 */
	// utils
	var toString = function toString(object) {
	  var value = tryCatch((0, _toString.getValueForStringification)(object));
	
	  if ((0, _miscellaneous.isEncapsulatedBy)(value, '"')) {
	    return value.substring(1, value.length - 1);
	  }
	
	  return value;
	};
	
	exports.default = toString;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.replacer = exports.getValueForStringification = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; // utils
	
	
	// constants
	
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _objectClass3 = __webpack_require__(5);
	
	var _objectClass4 = _interopRequireDefault(_objectClass3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	 * prepend type to string value
	 *
	 * @param {string} string
	 * @param {string} type
	 * @returns {string}
	 */
	var prependTypeToString = function prependTypeToString(string, type) {
	  return type + ' ' + string;
	};
	
	/**
	 * get the string value for the object used for stringification
	 *
	 * @param {any} object
	 * @returns {any}
	 */
	var getValueForStringification = function getValueForStringification(object) {
	  var objectClass = (0, _objectClass2.default)(object);
	  var type = getObjectType(objectClass);
	
	  var _ret = function () {
	    switch (objectClass) {
	      case _objectClass4.default.ARGUMENTS:
	      case _objectClass4.default.ARRAY:
	      case _objectClass4.default.OBJECT:
	      case _objectClass4.default.NUMBER:
	      case _objectClass4.default.STRING:
	        return {
	          v: object
	        };
	
	      case _objectClass4.default.ERROR:
	      case _objectClass4.default.NULL:
	      case _objectClass4.default.REGEXP:
	      case _objectClass4.default.UNDEFINED:
	        return {
	          v: '' + object
	        };
	
	      case _objectClass4.default.DATE:
	        return {
	          v: object.toISOString()
	        };
	
	      case _objectClass4.default.FUNCTION:
	      case _objectClass4.default.GENERATOR:
	      case _objectClass4.default.SYMBOL:
	        return {
	          v: object.toString()
	        };
	
	      case _objectClass4.default.PROMISE:
	      case _objectClass4.default.WEAKMAP:
	      case _objectClass4.default.WEAKSET:
	        return {
	          v: prependTypeToString('NOT_ENUMERABLE', type)
	        };
	
	      case _objectClass4.default.MAP:
	        var newObject = {};
	
	        object.forEach(function (value, key) {
	          newObject[key] = value;
	        });
	
	        return {
	          v: newObject
	        };
	
	      case _objectClass4.default.SET:
	        var newArray = [];
	
	        object.forEach(function (item) {
	          newArray.push(item);
	        });
	
	        return {
	          v: newArray
	        };
	
	      case _objectClass4.default.ARRAY_BUFFER:
	        return {
	          v: arrayBufferToString(object)
	        };
	
	      case _objectClass4.default.DATA_VIEW:
	        return {
	          v: arrayBufferToString(object.buffer)
	        };
	
	      case _objectClass4.default.FLOAT_32_ARRAY:
	      case _objectClass4.default.FLOAT_64_ARRAY:
	      case _objectClass4.default.INT_8_ARRAY:
	      case _objectClass4.default.INT_16_ARRAY:
	      case _objectClass4.default.INT_32_ARRAY:
	      case _objectClass4.default.UINT_8_ARRAY:
	      case _objectClass4.default.UINT_8_CLAMPED_ARRAY:
	      case _objectClass4.default.UINT_16_ARRAY:
	      case _objectClass4.default.UINT_32_ARRAY:
	        return {
	          v: '[' + object.join(',') + ']'
	        };
	
	      case _objectClass4.default.MATH:
	        var mathObject = {};
	
	        MATH_PROPERTIES.forEach(function (prop) {
	          mathObject[prop] = object[prop];
	        });
	
	        return {
	          v: mathObject
	        };
	
	      default:
	        return {
	          v: HTML_ELEMENT_REGEXP.test(objectClass) ? 'HTMLElement ' + object.textContent : object
	        };
	    }
	  }();
	
	  if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	};
	
	/**
	 * create the replacer function leveraging closure for
	 * recursive stack storage
	 */
	var REPLACER = function (stack, undefined, recursiveCounter, index) {
	  return function (key, value) {
	    if (key === '') {
	      stack = [value];
	      recursiveCounter = 0;
	
	      return value;
	    }
	
	    var objectClass = (0, _objectClass2.default)(value);
	
	    switch (objectClass) {
	      case _objectClass4.default.NUMBER:
	      case _objectClass4.default.STRING:
	        return value;
	
	      case _objectClass4.default.ARGUMENTS:
	      case _objectClass4.default.ARRAY:
	      case _objectClass4.default.OBJECT:
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
	
	        return '@@Recursive ' + (objectClass === _objectClass4.default.ARRAY ? '[Array]' : '{Object}') + ' (' + index + ')';
	
	      case _objectClass4.default.ARRAY_BUFFER:
	      case _objectClass4.default.DATA_VIEW:
	      case _objectClass4.default.DATE:
	      case _objectClass4.default.FLOAT_32_ARRAY:
	      case _objectClass4.default.FLOAT_64_ARRAY:
	      case _objectClass4.default.FUNCTION:
	      case _objectClass4.default.GENERATOR:
	      case _objectClass4.default.INT_8_ARRAY:
	      case _objectClass4.default.INT_16_ARRAY:
	      case _objectClass4.default.INT_32_ARRAY:
	      case _objectClass4.default.ERROR:
	      case _objectClass4.default.MAP:
	      case _objectClass4.default.MATH:
	      case _objectClass4.default.NULL:
	      case _objectClass4.default.PROMISE:
	      case _objectClass4.default.REGEXP:
	      case _objectClass4.default.SET:
	      case _objectClass4.default.SYMBOL:
	      case _objectClass4.default.UINT_8_ARRAY:
	      case _objectClass4.default.UINT_8_CLAMPED_ARRAY:
	      case _objectClass4.default.UINT_16_ARRAY:
	      case _objectClass4.default.UINT_32_ARRAY:
	      case _objectClass4.default.UNDEFINED:
	      case _objectClass4.default.WEAKMAP:
	      case _objectClass4.default.WEAKSET:
	        return getValueForStringification(value);
	
	      default:
	        return value;
	    }
	  };
	}();
	
	exports.getValueForStringification = getValueForStringification;
	exports.replacer = REPLACER;
	exports.default = REPLACER;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _objectClass3 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	  This is a heavily modified and reduced version of JSON.prune provided by Canop
	  at https://github.com/Canop/JSON.prune. All credit and praise should be directed
	  there.
	 */
	
	var DEFAULT_MAX_DEPTH = 6;
	var DEFAULT_ARRAY_MAX_LENGTH = 50;
	var DEFAULT_PRUNED_VALUE = '@@Recursive';
	var ESCAPABLE = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	var META = { // table of character substitutions
	  '\b': '\\b',
	  '\t': '\\t',
	  '\n': '\\n',
	  '\f': '\\f',
	  '\r': '\\r',
	  '"': '\\"',
	  '\\': '\\\\'
	};
	
	var seen = void 0;
	
	/**
	 * iterates on enumerable own properties (default behavior)
	 *
	 * @param {object} object
	 * @param {function} callback
	 */
	var forEachEnumerableOwnProperty = function forEachEnumerableOwnProperty(object, callback) {
	  for (var key in object) {
	    if (Object.prototype.hasOwnProperty.call(object, key)) {
	      callback(key);
	    }
	  }
	};
	
	/**
	 * return value surrounded by quotes, replacing escapable values
	 *
	 * @param {string} string
	 * @returns {string}
	 */
	var quote = function quote(string) {
	  ESCAPABLE.lastIndex = 0;
	
	  var c = void 0;
	
	  return !ESCAPABLE.test(string) ? '"' + string + '"' : '"' + string.replace(ESCAPABLE, function (a) {
	    c = META[a];
	
	    return (0, _objectClass2.default)(c) === _objectClass3.STRING ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	  }) + '"';
	};
	
	/**
	 * prune JSON for stringification
	 *
	 * @param {any} value
	 * @returns {string}
	 */
	var prune = function prune(value) {
	  seen = [];
	
	  var pruneString = function pruneString(key, holder, depthDecr) {
	    var value = holder[key],
	        partial = [],
	        v = void 0;
	
	    switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
	      case 'string':
	        return quote(value);
	
	      case 'boolean':
	      case 'function':
	      case 'null':
	      case 'number':
	      case 'undefined':
	        return '' + value;
	
	      case 'object':
	        if (!value) {
	          return '' + value;
	        }
	
	        var index = seen.indexOf(value);
	
	        var type = (0, _objectClass2.default)(value);
	
	        if (depthDecr <= 0 || !!~index) {
	          var displayedValue = type === _objectClass3.ARRAY ? '[' + value.join(',') + ']' : '{' + Object.keys(value) + '}';
	
	          return DEFAULT_PRUNED_VALUE + ' - ' + displayedValue;
	        }
	
	        switch (type) {
	          case _objectClass3.ARRAY:
	            seen.push(value);
	
	            var length = Math.min(value.length, DEFAULT_ARRAY_MAX_LENGTH);
	
	            var _index = -1;
	
	            while (++_index < length) {
	              partial[_index] = pruneString(_index, value, depthDecr - 1);
	            }
	
	            v = '[' + partial.join(',') + ']';
	
	            return v;
	
	          case _objectClass3.DATE:
	            return '' + value.valueOf();
	
	          default:
	            seen.push(value);
	
	            forEachEnumerableOwnProperty(value, function (k) {
	              try {
	                v = pruneString(k, value, depthDecr - 1);
	
	                if (v) {
	                  partial.push(quote(k) + ':' + v);
	                }
	              } catch (exception) {
	                // this try/catch due to forbidden accessors on some objects
	              }
	            });
	
	            return '{' + partial.join(',') + '}';
	        }
	    }
	  };
	
	  return pruneString('', {
	    '': value
	  }, DEFAULT_MAX_DEPTH);
	};
	
	exports.default = {
	  prune: prune
	};
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _objectClass3 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * convert object to function by wrapping the object
	 * in a function
	 *
	 * @param {any} object
	 * @returns {function}
	 */
	// utils
	var toFunction = function toFunction(object) {
	  if ((0, _objectClass2.default)(object) === _objectClass3.FUNCTION) {
	    return object;
	  }
	
	  return function () {
	    return object;
	  };
	};
	
	// constants
	exports.default = toFunction;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _miscellaneous = __webpack_require__(3);
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _objectClass3 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * convert object to generator function with returned
	 * generators based on the object type
	 *
	 * @param {any} object
	 * @returns {generator}
	 */
	var toGenerator = function toGenerator(object) {
	  try {
	    /* eslint-disable no-eval */
	    eval('(function *(){})');
	    /* eslint-enable */
	  } catch (exception) {
	    (0, _miscellaneous.throwUnsupportedError)('Generator');
	  }
	
	  switch ((0, _objectClass2.default)(object)) {
	    case _objectClass3.GENERATOR:
	      return object;
	
	    case _objectClass3.ARRAY:
	      return regeneratorRuntime.mark(function _callee() {
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
	      });
	
	    case _objectClass3.MAP:
	      return regeneratorRuntime.mark(function _callee2() {
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
	      });
	
	    case _objectClass3.OBJECT:
	      return regeneratorRuntime.mark(function _callee3() {
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
	      });
	
	    case _objectClass3.SET:
	      return regeneratorRuntime.mark(function _callee4() {
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
	      });
	
	    default:
	      return regeneratorRuntime.mark(function _callee5() {
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
	      });
	  }
	};
	
	// constants
	// utils
	exports.default = toGenerator;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; // utils
	
	
	// constants
	
	
	var _miscellaneous = __webpack_require__(3);
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _objectClass3 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * convert object to a map with different mappings
	 * based on object type
	 *
	 * @param {any} object
	 * @returns {map}
	 */
	var toMap = function toMap(object) {
	  if (typeof Map === 'undefined') {
	    (0, _miscellaneous.throwUnsupportedError)('Map');
	  }
	
	  var objectClass = (0, _objectClass2.default)(object);
	
	  if (objectClass === _objectClass3.MAP) {
	    return object;
	  }
	
	  var keyValuePairs = [];
	
	  var _ret = function () {
	    switch (objectClass) {
	      case _objectClass3.ARRAY:
	        (0, _miscellaneous.forEach)(object, function (value, index) {
	          keyValuePairs.push([index, value]);
	        });
	
	        return {
	          v: new Map(keyValuePairs)
	        };
	
	      case _objectClass3.OBJECT:
	        for (var key in object) {
	          keyValuePairs.push([key, object[key]]);
	        }
	
	        return {
	          v: new Map(keyValuePairs)
	        };
	
	      case _objectClass3.SET:
	        if (typeof Set === 'undefined') {
	          (0, _miscellaneous.throwUnsupportedError)('Set');
	        }
	
	        var index = 0;
	
	        object.forEach(function (value) {
	          keyValuePairs.push([index, value]);
	
	          index++;
	        });
	
	        return {
	          v: new Map(keyValuePairs)
	        };
	
	      default:
	        return {
	          v: new Map([[0, object]])
	        };
	    }
	  }();
	
	  if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	};
	
	exports.default = toMap;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	/**
	 * return null (noop)
	 *
	 * @returns {null}
	 */
	var toNull = function toNull() {
	  return null;
	};
	
	exports.default = toNull;
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _miscellaneous = __webpack_require__(3);
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _numbers = __webpack_require__(17);
	
	var _objectClass3 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * remove extraneous portions of the string and eliminate plurals
	 *
	 * @param {string} string
	 * @returns {string}
	 */
	
	
	// constants
	// utils
	var sanitize = function sanitize(string) {
	  return string.toLowerCase().replace(/ and /g, '\ ').replace(/ +(?= )/g, '').replace(/-/g, '').replace(/(hundreds|thousands|millions|billions|trillions)/g, function (match) {
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
	  for (var key in _numbers.TOKENS) {
	    if (!!~_numbers.TOKENS[key].indexOf(numberString)) {
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
	  var array = string.split(' ');
	
	  (0, _miscellaneous.forEach)(array, function (value) {
	    if ((0, _objectClass2.default)(value) === _objectClass3.NULL) {
	      throw new Error(value + ' is not a valid number.');
	    }
	  });
	
	  return array;
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
	
	  if (!((0, _objectClass2.default)(leftArray) === _objectClass3.ARRAY && (0, _objectClass2.default)(rightArray) === _objectClass3.ARRAY && leftLength === rightArray.length)) {
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
	  var length = _numbers.STOP_POINTS.length;
	
	  var index = -1;
	
	  while (++index < length) {
	    if (isSameArray(_numbers.STOP_POINTS[index], array)) {
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
	  var sum = 0,
	      next = void 0;
	
	  (0, _miscellaneous.forEach)(array, function (current, index) {
	    next = array[index + 1];
	
	    if (next === 100) {
	      sum += current * 100;
	    } else if (current !== 100) {
	      sum += current;
	    }
	  });
	
	  return sum;
	};
	
	/**
	 * based on groups, calculate the total value
	 * 
	 * @param {array<array>} groups
	 * @returns {number}
	 */
	var calculateValue = function calculateValue(groups) {
	  var length = groups.length;
	
	  var currentStack = 0,
	      sum = 0,
	      valueArray = void 0;
	
	  (0, _miscellaneous.forEach)(groups, function (group, index) {
	    if (getType(group[0]) === 'power') {
	      sum += currentStack * _numbers.VALUES[group[0]];
	
	      currentStack = 0;
	    } else {
	      valueArray = group.map(function (item) {
	        return _numbers.VALUES[item];
	      });
	
	      currentStack += reduceArray(valueArray);
	
	      if (index === length - 1) {
	        sum += currentStack;
	      }
	    }
	  });
	
	  return sum;
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
	  var objectClass = (0, _objectClass2.default)(object);
	
	  switch (objectClass) {
	    case _objectClass3.NUMBER:
	      return object;
	
	    case _objectClass3.BOOLEAN:
	      return object === true ? 1 : 0;
	
	    case _objectClass3.DATE:
	      return object.valueOf();
	
	    case _objectClass3.NULL:
	    case _objectClass3.UNDEFINED:
	      return 0;
	
	    case _objectClass3.ARRAY:
	      return object.length;
	
	    case _objectClass3.OBJECT:
	      return Object.keys(object).length;
	
	    case _objectClass3.MAP:
	    case _objectClass3.SET:
	      return object.size;
	
	    default:
	      if (objectClass !== _objectClass3.STRING) {
	        return NaN;
	      } else {
	        break;
	      }
	  }
	
	  if (object === 'true' || object === 'false') {
	    return _numbers.VALUES[object];
	  }
	
	  var parsedNumber = parseFloat(object);
	
	  if (parsedNumber === parsedNumber) {
	    return parsedNumber;
	  }
	
	  var string = object.trim();
	
	  if (!string) {
	    return 0;
	  }
	
	  var valueAsIs = _numbers.VALUES[string];
	
	  if ((0, _objectClass2.default)(valueAsIs) !== _objectClass3.UNDEFINED) {
	    return valueAsIs;
	  }
	
	  var sanitizedString = sanitize(string);
	  var splitString = splitAndValidate(sanitizedString);
	  var groups = groupTokens(splitString);
	
	  return calculateValue(groups) || NaN;
	};
	
	exports.default = toNumber;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var STOP_POINTS = [['special'], ['ten'], ['unit'], ['ten', 'unit'], ['unit', 'hundred'], ['unit', 'hundred', 'special'], ['unit', 'hundred', 'ten'], ['unit', 'hundred', 'unit'], ['unit', 'hundred', 'ten', 'unit']];
	
	var TOKENS = {
	  hundred: ['hundred'],
	  power: ['thousand', 'million', 'billion', 'trillion'],
	  special: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
	  ten: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
	  unit: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	};
	
	var VALUES = {
	  'false': 0,
	  'true': 1,
	
	  zero: 0,
	  one: 1,
	  two: 2,
	  three: 3,
	  four: 4,
	  five: 5,
	  six: 6,
	  seven: 7,
	  eight: 8,
	  nine: 9,
	  ten: 10,
	  eleven: 11,
	  twelve: 12,
	  thirteen: 13,
	  fourteen: 14,
	  fifteen: 15,
	  sixteen: 16,
	  seventeen: 17,
	  eighteen: 18,
	  nineteen: 19,
	  twenty: 20,
	  thirty: 30,
	  forty: 40,
	  fifty: 50,
	  sixty: 60,
	  seventy: 70,
	  eighty: 80,
	  ninety: 90,
	  hundred: 100,
	  thousand: 1000,
	  million: 1000000,
	  billion: 1000000000,
	  trillion: 1000000000000
	};
	
	exports.STOP_POINTS = STOP_POINTS;
	exports.TOKENS = TOKENS;
	exports.VALUES = VALUES;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; // utils
	
	
	// constants
	
	
	var _miscellaneous = __webpack_require__(3);
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _objectClass3 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * for most values, return a new object with a single key-value
	 * pair, where the object passed is the value
	 *
	 * @param {any} object
	 * @returns {{0: any}}
	 */
	var returnDefaultObject = function returnDefaultObject(object) {
	  return {
	    '0': object
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
	  var objectClass = (0, _objectClass2.default)(object);
	
	  if (objectClass === _objectClass3.OBJECT) {
	    return object;
	  }
	
	  var newObject = {};
	
	  var _ret = function () {
	    switch ((0, _objectClass2.default)(object)) {
	      case _objectClass3.ARRAY:
	        (0, _miscellaneous.forEach)(object, function (value, index) {
	          newObject[index] = value;
	        });
	
	        return {
	          v: newObject
	        };
	
	      case _objectClass3.MAP:
	        object.forEach(function (value, key) {
	          newObject[key] = value;
	        });
	
	        return {
	          v: newObject
	        };
	
	      case _objectClass3.SET:
	        var index = 0;
	
	        object.forEach(function (value) {
	          newObject[index] = value;
	
	          index++;
	        });
	
	        return {
	          v: newObject
	        };
	
	      case _objectClass3.STRING:
	        if ((0, _miscellaneous.isEncapsulatedBy)(object, '{', '}')) {
	          try {
	            return {
	              v: JSON.parse(object)
	            };
	          } catch (exception) {
	            return {
	              v: returnDefaultObject(object)
	            };
	          }
	        }
	
	        return {
	          v: returnDefaultObject(object)
	        };
	
	      default:
	        return {
	          v: returnDefaultObject(object)
	        };
	    }
	  }();
	
	  if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	};
	
	exports.default = toObject;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _miscellaneous = __webpack_require__(3);
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _objectClass3 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * convert object to promise by wrapping it in
	 * a Promise.resolve()
	 *
	 * @param {any} object
	 * @returns {promise}
	 */
	var toPromise = function toPromise(object) {
	  if (typeof Promise === 'undefined') {
	    (0, _miscellaneous.throwUnsupportedError)('Promise');
	  }
	
	  if ((0, _objectClass2.default)(object) === _objectClass3.PROMISE) {
	    return object;
	  }
	
	  return Promise.resolve(object);
	};
	
	// constants
	// utils
	exports.default = toPromise;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _toString = __webpack_require__(9);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _miscellaneous = __webpack_require__(3);
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _objectClass3 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * convert object to regexp with different mappings
	 * based on object type
	 *
	 * @param {any} object
	 * @returns {regexp}
	 */
	// transform
	var toRegExp = function toRegExp(object) {
	  var objectToString = (0, _objectClass2.default)(object);
	
	  if (objectToString === _objectClass3.REGEXP) {
	    return object;
	  }
	
	  var string = objectToString === _objectClass3.STRING ? object : (0, _toString2.default)(object);
	
	  if ((0, _miscellaneous.isEncapsulatedBy)(string, '/')) {
	    string = string.substring(1, string.length - 1);
	  }
	
	  if (!string) {
	    string = '(.*)';
	  }
	
	  return new RegExp(string);
	};
	
	// constants
	
	
	// utils
	exports.default = toRegExp;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _miscellaneous = __webpack_require__(3);
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _objectClass3 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * convert object to set with different mappings
	 * based on object type
	 *
	 * @param {any} object
	 * @returns {set}
	 */
	var toSet = function toSet(object) {
	  if (typeof Set === 'undefined') {
	    (0, _miscellaneous.throwUnsupportedError)('Set');
	  }
	
	  var objectClass = (0, _objectClass2.default)(object);
	
	  if (objectClass === _objectClass3.SET) {
	    return object;
	  }
	
	  var values = [];
	
	  switch (objectClass) {
	    case _objectClass3.ARRAY:
	      return new Set(object);
	
	    case _objectClass3.MAP:
	      if (typeof Map === 'undefined') {
	        (0, _miscellaneous.throwUnsupportedError)('Map');
	      }
	
	      object.forEach(function (value) {
	        values.push(value);
	      });
	
	      return new Set(values);
	
	    case _objectClass3.OBJECT:
	      for (var key in object) {
	        values.push(object[key]);
	      }
	
	      return new Set(values);
	
	    default:
	      return new Set([object]);
	  }
	};
	
	// constants
	// utils
	exports.default = toSet;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _toString = __webpack_require__(9);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _miscellaneous = __webpack_require__(3);
	
	var _objectClass = __webpack_require__(4);
	
	var _objectClass2 = _interopRequireDefault(_objectClass);
	
	var _objectClass3 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * convert object to symbol by creating a new symbol
	 * from the stringified object
	 *
	 * @param {any} object
	 * @returns {symbol}
	 */
	// transform
	var toSymbol = function toSymbol(object) {
	  if (typeof Symbol === 'undefined') {
	    (0, _miscellaneous.throwUnsupportedError)('Symbol');
	  }
	
	  var objectClass = (0, _objectClass2.default)(object);
	
	  if (objectClass === _objectClass3.SYMBOL) {
	    return object;
	  }
	
	  var string = objectClass === _objectClass3.STRING ? object : (0, _toString2.default)(object);
	
	  return Symbol(string);
	};
	
	// constants
	
	
	// utils
	exports.default = toSymbol;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	/**
	 * return undefined (noop)
	 *
	 * @returns {undefined}
	 */
	var toUndefined = function toUndefined() {
	  return undefined;
	};
	
	exports.default = toUndefined;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=convertify.js.map