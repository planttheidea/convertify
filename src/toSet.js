// utils
import {
  throwUnsupportedError
} from './utils/miscellaneous';
import getObjectClass from './utils/objectClass';

// constants
import {
  ARRAY,
  MAP,
  SET,
  OBJECT
} from './constants/objectClass';

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

  let values = [];

  switch (objectClass) {
    case ARRAY:
      return new Set(object);

    case MAP:
      if (typeof Map === 'undefined') {
        throwUnsupportedError('Map');
      }

      object.forEach((value) => {
        values.push(value);
      });

      return new Set(values);

    case OBJECT:
      for (let key in object) {
        values.push(object[key]);
      }

      return new Set(values);

    default:
      return new Set([object]);
  }
};

export default toSet;
