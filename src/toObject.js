// utils
import {
  forEach,
  isEncapsulatedBy
} from './utils/miscellaneous';
import getObjectClass from './utils/objectClass';

// constants
import {
  ARRAY,
  OBJECT,
  MAP,
  SET,
  STRING
} from './constants/objectClass';

/**
 * for most values, return a new object with a single key-value
 * pair, where the object passed is the value
 *
 * @param {any} object
 * @returns {{0: any}}
 */
const returnDefaultObject = (object) => {
  return {
    '0': object
  };
};

/**
 * convert object to proper object with different mappings
 * based on object type
 *
 * @param {any} object
 * @returns {object}
 */
const toObject = (object) => {
  const objectClass = getObjectClass(object);

  if (objectClass === OBJECT) {
    return object;
  }

  let newObject = {};

  switch (getObjectClass(object)) {
    case ARRAY:
      forEach(object, (value, index) => {
        newObject[index] = value;
      });

      return newObject;

    case MAP:
      object.forEach((value, key) => {
        newObject[key] = value;
      });

      return newObject;

    case SET:
      let index = 0;

      object.forEach((value) => {
        newObject[index] = value;

        index++;
      });

      return newObject;

    case STRING:
      if (isEncapsulatedBy(object, '{', '}')) {
        try {
          return JSON.parse(object);
        } catch (exception) {
          return returnDefaultObject(object);
        }
      }

      return returnDefaultObject(object);

    default:
      return returnDefaultObject(object);
  }
};

export default toObject;
