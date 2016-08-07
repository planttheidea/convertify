// utils
import {
  isEncapsulatedBy
} from './utils/miscellaneous';
import {
  getValueForStringification,
  replacer
} from './utils/toString';
import json from './utils/prune';

/**
 * move try/catch to standalone function as any function that contains a try/catch
 * is not optimized (this allows optimization for as much as possible)
 *
 * @param {any} value
 * @returns {string}
 */
const tryCatch = (value) => {
  try {
    return JSON.stringify(value, replacer);
  } catch (exception) {
    return json.prune(value);
  }
};

/**
 * stringify the object passed leveraging the replacer
 *
 * @param {any} object
 * @returns {string}
 */
const toString = (object) => {
  const value = tryCatch(getValueForStringification(object));

  if (isEncapsulatedBy(value, '"')) {
    return value.substring(1, value.length - 1);
  }

  return value;
};

export default toString;
