// constants
import {PROMISE} from './_internals/objectClass';

// utils
import {
  getObjectClass,
  throwUnsupportedError,
} from './_internals/utils';

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

  return getObjectClass(object) === PROMISE ? object : Promise.resolve(object);
};

export default toPromise;
