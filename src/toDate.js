// constants
import {
  ARRAY,
  BOOLEAN,
  DATE,
  MAP,
  OBJECT,
  SET,
  STRING,
  SYMBOL,
} from './_internals/objectClass';

// utils
import {getObjectClass} from './_internals/utils';

const {keys} = Object;
const {hasOwnProperty} = Object.prototype;

const OBJECT_TO_DATE_ORDER = ['year', 'month', 'day', 'hour', 'minutes', 'seconds', 'milliseconds'];
const OBJECT_TO_DATE_ORDER_LENGTH = OBJECT_TO_DATE_ORDER.length;

const getInvalidDate = () => new Date('invalid');

/**
 * convert object to date with different mappings
 * based on object type
 *
 * @param {any} object
 * @returns {date}
 */
const toDate = (object) => {
  // eslint-disable-next-line eqeqeq
  if (object == null) {
    return new Date();
  }

  const objectClass = getObjectClass(object);

  if (objectClass === DATE) {
    return object;
  }

  if (objectClass === ARRAY) {
    return new Date(...object);
  }

  if (objectClass === OBJECT) {
    if (!keys(object).length) {
      return new Date();
    }

    const dateArray = [];

    let index = -1;
    let key;

    while (++index < OBJECT_TO_DATE_ORDER_LENGTH) {
      key = OBJECT_TO_DATE_ORDER[index];

      if (hasOwnProperty.call(object, key)) {
        dateArray.push(object[key]);
      }
    }

    return dateArray.length ? new Date(...dateArray) : getInvalidDate();
  }

  if (objectClass === MAP) {
    if (!object.size) {
      return new Date();
    }

    const dateArray = [];

    let index = -1;
    let key;

    while (++index < OBJECT_TO_DATE_ORDER_LENGTH) {
      key = OBJECT_TO_DATE_ORDER[index];

      if (object.has(key)) {
        dateArray.push(object.get(key));
      }
    }

    return dateArray.length ? new Date(...dateArray) : getInvalidDate();
  }

  if (objectClass === SET) {
    if (!object.size) {
      return new Date();
    }

    const dateArray = [];

    object.forEach((value) => dateArray.push(value));

    return new Date(...dateArray);
  }

  if (objectClass === BOOLEAN || objectClass === SYMBOL) {
    return getInvalidDate();
  }

  if (objectClass === STRING) {
    return object ? new Date(object) : new Date();
  }

  return new Date(object);
};

export default toDate;
