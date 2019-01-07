// constants
import {
  ARRAY,
  OBJECT,
  MAP,
  SET,
  STRING,
} from './_internals/objectClass';

// transform
import toString from './toString';

// utils
import {
  getObjectClass,
  isEncapsulatedBy,
} from './_internals/utils';

/**
 * for most values, return a new object with a single key-value
 * pair, where the object passed is the value
 *
 * @param {any} object
 * @returns {{0: any}}
 */
const returnDefaultObject = (object) => ({
  0: object,
});

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

  if (objectClass === ARRAY) {
    return object.reduce((newObject, value, index) => {
      newObject[index] = value;

      return newObject;
    }, {});
  }

  if (objectClass === MAP) {
    const newObject = {};

    object.forEach((value, key) => {
      newObject[getObjectClass(key) === STRING ? key : toString(key)] = value;
    });

    return newObject;
  }

  if (objectClass === SET) {
    const newObject = {};

    let index = 0;

    object.forEach((value) => {
      newObject[index++] = value;
    });

    return newObject;
  }

  if (objectClass === STRING) {
    if (isEncapsulatedBy(object, '{', '}')) {
      try {
        return JSON.parse(object);
      } catch (exception) {
        return returnDefaultObject(object);
      }
    }

    return returnDefaultObject(object);
  }

  switch (getObjectClass(object)) {
    case STRING:

    default:
      return returnDefaultObject(object);
  }
};

export default toObject;
