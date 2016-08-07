// utils
import {
  forEach,
  throwUnsupportedError
} from './utils/miscellaneous';
import getObjectClass from './utils/objectClass';

// constants
import {
  ARRAY,
  MAP,
  OBJECT,
  SET
} from './constants/objectClass';

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

  let keyValuePairs = [];

  switch (objectClass) {
    case ARRAY:
      forEach(object, (value, index) => {
        keyValuePairs.push([index, value]);
      });

      return new Map(keyValuePairs);

    case OBJECT:
      for (let key in object) {
        keyValuePairs.push([key, object[key]]);
      }

      return new Map(keyValuePairs);

    case SET:
      if (typeof Set === 'undefined') {
        throwUnsupportedError('Set');
      }

      let index = 0;

      object.forEach((value) => {
        keyValuePairs.push([index, value]);

        index++;
      });

      return new Map(keyValuePairs);

    default:
      return new Map([[0, object]]);
  }
};

export default toMap;
