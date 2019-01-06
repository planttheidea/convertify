// constants
import {
  ARRAY,
  OBJECT,
  MAP,
  SET,
  STRING,
} from './_internals/objectClass';

// utils
import {
  getObjectClass,
  isEncapsulatedBy,
  parse,
} from './_internals/utils';

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

  if (objectClass === OBJECT) {
    const array = [];

    for (let key in object) {
      array.push(object[key]);
    }

    return array;
  }

  if (objectClass === MAP || objectClass === SET) {
    const array = [];

    object.forEach((value) => array.push(value));

    return array;
  }

  if (objectClass === STRING) {
    return isEncapsulatedBy(object, '[', ']') ? parse(object, () => [object]) : [object];
  }

  return [object];
};

export default toArray;
