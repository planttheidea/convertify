// constants
import {
  ARRAY,
  MAP,
  SET,
  OBJECT,
} from './_internals/objectClass';

// utils
import {
  getObjectClass,
  throwUnsupportedError,
} from './_internals/utils';

/**
 * convert object to set with different mappings
 * based on object type
 *
 * @param {any} object
 * @returns {set}
 */
const toSet = (object) => {
  if (typeof Set === 'undefined') {
    throwUnsupportedError('Set');
  }

  const objectClass = getObjectClass(object);

  if (objectClass === SET) {
    return object;
  }

  if (objectClass === ARRAY) {
    return object.reduce((set, value) => {
      set.add(value);

      return set;
    }, new Set());
  }

  if (objectClass === MAP) {
    if (typeof Map === 'undefined') {
      throwUnsupportedError('Map');
    }

    const set = new Set();

    object.forEach((value) => set.add(value));

    return set;
  }

  if (objectClass === OBJECT) {
    const set = new Set();

    for (let key in object) {
      set.add(object[key]);
    }

    return set;
  }

  const set = new Set();

  set.add(object);

  return set;
};

export default toSet;
