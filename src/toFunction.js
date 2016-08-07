// utils
import getObjectClass from './utils/objectClass';

// constants
import {
  FUNCTION
} from './constants/objectClass';

/**
 * convert object to function by wrapping the object
 * in a function
 *
 * @param {any} object
 * @returns {function}
 */
const toFunction = (object) => {
  if (getObjectClass(object) === FUNCTION) {
    return object;
  }

  return function() {
    return object;
  };
};

export default toFunction;
