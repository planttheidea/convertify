const UNSUPPORTED_ERROR_FINISH = 'is not supported in your current browser. If you are using babel, make sure to import babel-polyfill into your project, otherwise you should add your own polyfill, such as core-js.';

/**
 * convenience function when you need to loop and don't need
 * to worry about breaking
 *
 * @param {array<any>} array
 * @param {function} fn
 */
const forEach = (array, fn) => {
  const length = array.length;

  let index = -1;

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
const isEncapsulatedBy = (string, begin, end = begin) => {
  return string.indexOf(begin) === 0 && string.lastIndexOf(end) === string.length - 1;
};

/**
 * throw a new error saying the specific object class is not supported
 *
 * @param {string} objectClass
 */
const throwUnsupportedError = (objectClass) => {
  throw new Error(`${objectClass} ${UNSUPPORTED_ERROR_FINISH}`);
};

export {forEach};
export {isEncapsulatedBy};
export {throwUnsupportedError};
