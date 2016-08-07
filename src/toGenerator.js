// utils
import {
  throwUnsupportedError
} from './utils/miscellaneous';
import getObjectClass from './utils/objectClass';

// constants
import {
  ARRAY,
  GENERATOR,
  MAP,
  OBJECT,
  SET
} from './constants/objectClass';

/**
 * convert object to generator function with returned
 * generators based on the object type
 *
 * @param {any} object
 * @returns {generator}
 */
const toGenerator = (object) => {
  try {
    /* eslint-disable no-eval */
    eval('(function *(){})');
    /* eslint-enable */
  } catch (exception) {
    throwUnsupportedError('Generator');
  }

  switch (getObjectClass(object)) {
    case GENERATOR:
      return object;

    case ARRAY:
      return function* () {
        const length = object.length;

        let index = -1;

        while (++index < length) {
          yield object[index];
        }
      };

    case MAP:
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

    case OBJECT:
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

    case SET:
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

    default:
      return function* () {
        yield object;
      };
  }
};

export default toGenerator;
