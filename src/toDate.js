// utils
import getObjectClass from './utils/objectClass';

// constants
import {
  ARRAY,
  BOOLEAN,
  DATE,
  MAP,
  NULL,
  OBJECT,
  SET,
  STRING,
  SYMBOL,
  UNDEFINED
} from './constants/objectClass';

const OBJECT_TO_DATE_ORDER = [
  'year',
  'month',
  'day',
  'hour',
  'minutes',
  'seconds',
  'milliseconds'
];
const OBJECT_TO_DATE_ORDER_LENGTH = OBJECT_TO_DATE_ORDER.length;

/**
 * convert object to date with different mappings
 * based on object type
 *
 * @param {any} object
 * @returns {date}
 */
const toDate = (object) => {
  const objectClass = getObjectClass(object);

  if (objectClass === DATE) {
    return object;
  }

  let dateArray,
      index,
      key;

  switch (objectClass) {
    case ARRAY:
      return new Date(...object);

    case OBJECT:
      if (!Object.keys(object).length) {
        return new Date();
      }

      dateArray = [];
      index = -1;

      while (++index < OBJECT_TO_DATE_ORDER_LENGTH) {
        key = OBJECT_TO_DATE_ORDER[index];

        if (!object.hasOwnProperty(key)) {
          break;
        }

        dateArray.push(object[key]);
      }

      return dateArray.length ? new Date(...dateArray) : new Date('foo');

    case MAP:
      if (!object.size) {
        return new Date();
      }

      dateArray = [];
      index = -1;

      while (++index < OBJECT_TO_DATE_ORDER_LENGTH) {
        key = OBJECT_TO_DATE_ORDER[index];

        if (!object.has(key)) {
          break;
        }

        dateArray.push(object.get(key));
      }

      return dateArray.length ? new Date(...dateArray) : new Date('foo');

    case SET:
      if (!object.size) {
        return new Date();
      }

      dateArray = [];

      object.forEach((value) => {
        dateArray.push(value);
      });

      return new Date(...dateArray);

    case BOOLEAN:
    case SYMBOL:
      return new Date('foo');

    case NULL:
    case UNDEFINED:
      return new Date();

    case STRING:
      return !!object ? new Date(object) : new Date();

    default:
      return new Date(object);
  }
};

export default toDate;
