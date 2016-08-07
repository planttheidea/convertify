// utils
import {
  throwUnsupportedError
} from './utils/miscellaneous';
import getObjectClass from './utils/objectClass';

// constants
import {
  PROMISE
} from './constants/objectClass';

/**
 * convert object to promise by wrapping it in
 * a Promise.resolve()
 *
 * @param {any} object
 * @returns {promise}
 */
const toPromise = (object) => {
  if (typeof Promise === 'undefined') {
    throwUnsupportedError('Promise');
  }

  if (getObjectClass(object) === PROMISE) {
    return object;
  }

  return Promise.resolve(object);
};

export default toPromise;
