// external dependencies
import fastStringify from 'fast-stringify';

/**
 * @function circularStringify
 *
 * @description
 * use fast-stringify to handle circular objects
 *
 * @param {*} object the object to stringify
 * @param {function} replacer the custom replacer
 * @param {function} onFail the method to call when a failure occurs
 * @returns {string} the stringified value
 */
export const circularStringify = (object, replacer, onFail) => {
  try {
    return fastStringify(object, replacer);
  } catch (nonCircularError) {
    return onFail(object);
  }
};

/**
 * get the toString value of object
 *
 * @param {any} object
 * @returns {string}
 */
export const getObjectClass = (object) => toString.call(object);

/**
 * determine if string starts with begin and ends with end
 *
 * @param {string} string
 * @param {string} begin
 * @param {string} end
 * @returns {boolean}
 */
export const isEncapsulatedBy = (string, begin, end = begin) =>
  typeof string === 'string' && string.indexOf(begin) === 0 && string.lastIndexOf(end) === string.length - 1;

/**
 * @function parse
 *
 * @description
 * parse the string into a valid JS object
 *
 * @param {string} string the string to parse
 * @param {function} onFail the method to call when a failure occurs
 * @returns {*} the parsed string
 */
export const parse = (string, onFail) => {
  try {
    return JSON.parse(string);
  } catch (error) {
    return onFail(string);
  }
};

/**
 * @function stringify
 *
 * @description
 * stringify the object
 *
 * @param {*} object the object to stringify
 * @param {function} replacer the custom replacer method
 * @returns {string} the stringified object
 */
export const stringify = (object, replacer) => {
  try {
    return JSON.stringify(object, replacer);
  } catch (error) {
    return circularStringify(object, replacer);
  }
};

/**
 * throw a new error saying the specific object class is not supported
 *
 * @param {string} objectClass
 */
export const throwUnsupportedError = (objectClass) => {
  throw new Error(
    `${objectClass} 'is not supported in your current browser. If you are using babel, make sure to import babel-polyfill into your project, otherwise you should add your own polyfill, such as core-js.'`
  );
};
