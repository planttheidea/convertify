// external dependencies
import stringify from 'fast-stringify';

// constants
import TYPES from './_internals/objectClass';

// utils
import {
  getObjectClass,
  isEncapsulatedBy,
} from './_internals/utils';

const HTML_ELEMENT_REGEXP = /\[object (HTML(.*)Element)\]/;
const MATH_PROPERTIES = ['E', 'LN2', 'LN10', 'LOG2E', 'LOG10E', 'PI', 'SQRT1_2', 'SQRT2'];

/**
 * get the string value of the buffer passed
 *
 * @param {ArrayBuffer} buffer
 * @returns {string}
 */
const arrayBufferToString = (buffer) => {
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
const getObjectType = (type) => type.replace(/^\[object (.+)\]$/, '$1');

/**
 * get the string value for the object used for stringification
 *
 * @param {any} object
 * @returns {any}
 */
const getValueForStringification = (object) => {
  const objectClass = getObjectClass(object);
  const type = getObjectType(objectClass);

  switch (objectClass) {
    case TYPES.ARGUMENTS:
    case TYPES.ARRAY:
    case TYPES.OBJECT:
    case TYPES.NUMBER:
    case TYPES.STRING:
      return object;

    case TYPES.ERROR:
    case TYPES.NULL:
    case TYPES.REGEXP:
    case TYPES.UNDEFINED:
      return `${object}`;

    case TYPES.DATE:
      return object.toISOString();

    case TYPES.FUNCTION:
    case TYPES.GENERATOR:
    case TYPES.SYMBOL:
      return object.toString();

    case TYPES.PROMISE:
    case TYPES.WEAKMAP:
    case TYPES.WEAKSET:
      return type;

    case TYPES.MAP:
      let newObject = {};

      object.forEach((value, key) => {
        newObject[key] = value;
      });

      return newObject;

    case TYPES.SET:
      let newArray = [];

      object.forEach((item) => {
        newArray.push(item);
      });

      return newArray;

    case TYPES.ARRAY_BUFFER:
      return arrayBufferToString(object);

    case TYPES.DATA_VIEW:
      return arrayBufferToString(object.buffer);

    case TYPES.FLOAT_32_ARRAY:
    case TYPES.FLOAT_64_ARRAY:
    case TYPES.INT_8_ARRAY:
    case TYPES.INT_16_ARRAY:
    case TYPES.INT_32_ARRAY:
    case TYPES.UINT_8_ARRAY:
    case TYPES.UINT_8_CLAMPED_ARRAY:
    case TYPES.UINT_16_ARRAY:
    case TYPES.UINT_32_ARRAY:
      return `[${object.join(',')}]`;

    case TYPES.MATH:
      let mathObject = {};

      MATH_PROPERTIES.forEach((prop) => {
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
export const replacer = ((stack, undefined, recursiveCounter, index) => (key, value) => {
  if (key === '') {
    stack = [value];
    recursiveCounter = 0;

    return value;
  }

  const objectClass = getObjectClass(value);

  switch (objectClass) {
    case TYPES.NUMBER:
    case TYPES.STRING:
      return value;

    case TYPES.ARGUMENTS:
    case TYPES.ARRAY:
    case TYPES.OBJECT:
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

      return `@@Recursive ${objectClass === TYPES.ARRAY ? '[Array]' : '{Object}'} (${index})`;

    case TYPES.ARRAY_BUFFER:
    case TYPES.DATA_VIEW:
    case TYPES.DATE:
    case TYPES.FLOAT_32_ARRAY:
    case TYPES.FLOAT_64_ARRAY:
    case TYPES.FUNCTION:
    case TYPES.GENERATOR:
    case TYPES.INT_8_ARRAY:
    case TYPES.INT_16_ARRAY:
    case TYPES.INT_32_ARRAY:
    case TYPES.ERROR:
    case TYPES.MAP:
    case TYPES.MATH:
    case TYPES.NULL:
    case TYPES.PROMISE:
    case TYPES.REGEXP:
    case TYPES.SET:
    case TYPES.SYMBOL:
    case TYPES.UINT_8_ARRAY:
    case TYPES.UINT_8_CLAMPED_ARRAY:
    case TYPES.UINT_16_ARRAY:
    case TYPES.UINT_32_ARRAY:
    case TYPES.UNDEFINED:
    case TYPES.WEAKMAP:
    case TYPES.WEAKSET:
      return getValueForStringification(value);

    default:
      return value;
  }
})();

/**
 * stringify the object passed leveraging the replacer
 *
 * @param {any} object
 * @returns {string}
 */
const toString = (object) => {
  const value = stringify(getValueForStringification(object), replacer);

  if (isEncapsulatedBy(value, '"')) {
    return value.substring(1, value.length - 1);
  }

  return value;
};

export default toString;
