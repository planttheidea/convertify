// transform
import toString from './toString';

// constants
import {
  ERROR,
  STRING,
} from './_internals/objectClass';

// utils
import {getObjectClass} from './_internals/utils';

/**
 * convert object to error with the stringified
 * contents of the object as the message
 *
 * @param {any} object
 * @returns {error}
 */
const toError = (object) => {
  const objectClass = getObjectClass(object);

  if (objectClass === ERROR) {
    return object;
  }

  const message = objectClass === STRING ? object : toString(object);

  return new Error(message);
};

export default toError;
