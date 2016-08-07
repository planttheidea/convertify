// transform
import toString from './toString';

// utils
import getObjectClass from './utils/objectClass';

// constants
import {
  ERROR,
  STRING
} from './constants/objectClass';

/**
 * convert object to error with the stringified
 * contents of the object as the message
 *
 * @param {any} object
 * @returns {error}
 */
const toError = (object) => {
  const objectClass = getObjectClass(object);

  if (getObjectClass(object) === ERROR) {
    return object;
  }

  const message = objectClass === STRING ? object : toString(object);

  return new Error(message);
};

export default toError;
