// constants
import {
  ARRAY,
  MAP,
  OBJECT,
  SET,
} from './_internals/objectClass';

// utils
import {
  getObjectClass,
  parse,
  throwUnsupportedError,
} from './_internals/utils';

/**
 * convert object to a map with different mappings
 * based on object type
 *
 * @param {any} object
 * @returns {map}
 */
const toMap = (object) => {
  if (typeof Map === 'undefined') {
    throwUnsupportedError('Map');
  }

  const objectClass = getObjectClass(object);

  if (objectClass === MAP) {
    return object;
  }

  if (objectClass === ARRAY) {
    return object.reduce((map, value, index) => {
      map.set(index, value);

      return map;
    }, new Map());
  }

  if (objectClass === OBJECT) {
    const map = new Map();

    let mapKey;

    for (let key in object) {
      mapKey = parse(key, () => key);

      map.set(mapKey, object[key]);
    }

    return map;
  }

  if (objectClass === SET) {
    if (typeof Set === 'undefined') {
      throwUnsupportedError('Set');
    }

    const map = new Map();

    let index = 0;

    object.forEach((value) => map.set(index++, value));

    return map;
  }

  const map = new Map();

  map.set(0, object);

  return map;
};

export default toMap;
