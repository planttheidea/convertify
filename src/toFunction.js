// constants
import {FUNCTION} from './_internals/objectClass';

// utils
import {getObjectClass} from './_internals/utils';

/**
 * convert object to function by wrapping the object
 * in a function
 *
 * @param {any} object
 * @returns {function}
 */
const toFunction = (object) =>
  getObjectClass(object) === FUNCTION
    ? object
    : function() {
      return object;
    };

export default toFunction;
