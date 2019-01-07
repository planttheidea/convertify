// constants
import {
  ARRAY,
  GENERATOR,
  MAP,
  OBJECT,
  SET,
} from './_internals/objectClass';

// utils
import {
  getObjectClass,
  throwUnsupportedError,
} from './_internals/utils';

const throwErrorIfUnsupported = () => {
  try {
    /* eslint-disable no-eval */
    eval('(function *(){})');
    /* eslint-enable */
  } catch (exception) {
    throwUnsupportedError('Generator');
  }
};

/**
 * convert object to generator function with returned
 * generators based on the object type
 *
 * @param {any} object
 * @returns {generator}
 */
const toGenerator = (object) => {
  throwErrorIfUnsupported();

  const objectClass = getObjectClass(object);

  if (objectClass === GENERATOR) {
    return object;
  }

  if (objectClass === ARRAY) {
    return function* () {
      const length = object.length;

      let index = -1;

      while (++index < length) {
        yield object[index];
      }
    };
  }

  if (objectClass === MAP) {
    return function* () {
      let keys = [],
          values = {};

      object.forEach((value, key) => {
        keys.push(key);

        values[key] = value;
      });

      const length = object.size;

      let index = -1,
          key;

      while (++index < length) {
        key = keys[index];

        yield values[key];
      }
    };
  }

  if (objectClass === OBJECT) {
    return function* () {
      const keys = Object.keys(object);
      const length = keys.length;

      let index = -1,
          key;

      while (++index < length) {
        key = keys[index];

        yield object[key];
      }
    };
  }

  if (objectClass === SET) {
    return function* () {
      let values = [];

      object.forEach((value) => {
        values.push(value);
      });

      const length = object.size;

      let index = -1;

      while (++index < length) {
        yield values[index];
      }
    };
  }

  return function* () {
    yield object;
  };
};

export default toGenerator;
