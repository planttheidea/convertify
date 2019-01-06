// constants
import {
  REGEXP,
  STRING,
} from './_internals/objectClass';

// transform
import toString from './toString';

// utils
import {
  getObjectClass,
  isEncapsulatedBy,
} from './_internals/utils';

/**
 * convert object to regexp with different mappings
 * based on object type
 *
 * @param {any} object
 * @returns {regexp}
 */
const toRegExp = (object) => {
  const objectToString = getObjectClass(object);

  if (objectToString === REGEXP) {
    return object;
  }

  let string = objectToString === STRING ? object : toString(object);

  if (isEncapsulatedBy(string, '/')) {
    string = string.substring(1, string.length - 1);
  }

  if (!string) {
    string = '(.*)';
  }

  return new RegExp(string);
};

export default toRegExp;
