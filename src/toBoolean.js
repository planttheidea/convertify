// utils
import getObjectClass from './utils/objectClass';

// constants
import {
  ARRAY,
  BOOLEAN,
  MAP,
  OBJECT,
  SET
} from './constants/objectClass';

/**
 * convert object to boolean with different mappings
 * based on object type
 *
 * @param {any} object
 * @returns {boolean}
 */
const toBoolean = (object) => {
  switch (getObjectClass(object)) {
    case BOOLEAN:
      return object;

    case ARRAY:
      return !!object.length;

    case OBJECT:
      return !!Object.keys(object).length;

    case MAP:
    case SET:
      return !!object.size;

    default:
      return !!object;
  }
};

export default toBoolean;
