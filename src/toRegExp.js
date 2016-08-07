// transform
import toString from './toString';

// utils
import {
  isEncapsulatedBy
} from './utils/miscellaneous';
import getObjectClass from './utils/objectClass';

// constants
import {
  REGEXP,
  STRING
} from './constants/objectClass';

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
