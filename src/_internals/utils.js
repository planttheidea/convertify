// external dependencies
import fastStringify from 'fast-stringify';

export const UNSUPPORTED_ERROR_FINISH =
  'is not supported in your current browser. If you are using babel, make sure to import babel-polyfill into your project, otherwise you should add your own polyfill, such as core-js.';

/**
 * get the toString value of object
 *
 * @param {any} object
 * @returns {string}
 */
export const getObjectClass = (object) => toString.call(object);

export const circularStringify = (object, replacer, onFail) => {
  try {
    return fastStringify(object, replacer);
  } catch (nonCircularError) {
    return onFail(object);
  }
};

export const parse = (object, onFail) => {
  try {
    return JSON.parse(object);
  } catch (error) {
    return onFail(object);
  }
};

export const stringify = (object, replacer) => {
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
export const isEncapsulatedBy = (string, begin, end = begin) =>
  typeof string === 'string' && string.indexOf(begin) === 0 && string.lastIndexOf(end) === string.length - 1;

/**
 * throw a new error saying the specific object class is not supported
 *
 * @param {string} objectClass
 */
export const throwUnsupportedError = (objectClass) => {
  throw new Error(`${objectClass} ${UNSUPPORTED_ERROR_FINISH}`);
};
