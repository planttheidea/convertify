// utils
import {
  forEach,
  isEncapsulatedBy
} from './utils/miscellaneous';
import getObjectClass from './utils/objectClass';

import {
  ARRAY,
  OBJECT,
  MAP,
  SET,
  STRING
} from './constants/objectClass';

/**
 * convert object to an array, with different
 * mappings depending on the object type
 *
 * @param {any} object
 * @returns {array}
 */
const toArray = (object) => {
  const objectClass = getObjectClass(object);

  if (objectClass === ARRAY) {
    return object;
  }

  let newArray = [];

  switch (objectClass) {
    case OBJECT:
      const keys = Object.keys(object);

      forEach(keys, (key) => {
        newArray.push(object[key]);
      });

      return newArray;

    case MAP:
    case SET:
      object.forEach((value) => {
        newArray.push(value);
      });

      return newArray;

    case STRING:
      if (isEncapsulatedBy(object, '[', ']')) {
        try {
          return JSON.parse(object);
        } catch (exception) {
          return [object];
        }
      }

      return [object];

    default:
      return [object];
  }
};

export default toArray;
