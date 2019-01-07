// constants
import {
  ARRAY,
  BOOLEAN,
  MAP,
  OBJECT,
  SET,
} from './_internals/objectClass';

// utils
import {getObjectClass} from './_internals/utils';

const {keys} = Object;

/**
 * convert object to boolean with different mappings
 * based on object type
 *
 * @param {any} object
 * @returns {boolean}
 */
const toBoolean = (object) => {
  const objectClass = getObjectClass(object);

  if (objectClass === BOOLEAN) {
    return object;
  }

  if (objectClass === ARRAY) {
    return !!object.length;
  }

  if (objectClass === OBJECT) {
    return !!keys(object).length;
  }

  if (objectClass === MAP || objectClass === SET) {
    return !!object.size;
  }

  return !!object;
};

export default toBoolean;
