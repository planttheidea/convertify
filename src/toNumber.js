// utils
import {
  forEach
} from './utils/miscellaneous';
import getObjectClass from './utils/objectClass';

// constants
import {
  STOP_POINTS,
  TOKENS,
  VALUES
} from './constants/numbers';
import {
  ARRAY,
  BOOLEAN,
  DATE,
  MAP,
  NULL,
  NUMBER,
  OBJECT,
  SET,
  STRING,
  UNDEFINED
} from './constants/objectClass';

/**
 * remove extraneous portions of the string and eliminate plurals
 *
 * @param {string} string
 * @returns {string}
 */
const sanitize = (string) => {
  return string.toLowerCase()
    .replace(/ and /g, '\ ')
    .replace(/ +(?= )/g, '')
    .replace(/-/g, '')
    .replace(/(hundreds|thousands|millions|billions|trillions)/g, (match) => {
      return match.slice(0, -1);
    });
};

/**
 * get the type (unit, power, special, etc) for the
 * numberString
 *
 * @param {string} numberString
 * @returns {string|null}
 */
const getType = (numberString) => {
  for (let key in TOKENS) {
    if (!!~TOKENS[key].indexOf(numberString)) {
      return key;
    }
  }

  return null;
};

/**
 * split the string and make sure each part
 * is a valid value
 * 
 * @param {string} string
 * @returns {array<string>}
 */
const splitAndValidate = (string) => {
  const array = string.split(' ');

  forEach(array, (value) => {
    if (getObjectClass(value) === NULL) {
      throw new Error(`${value} is not a valid number.`);
    }
  });

  return array;
};

/**
 * is the leftArray equal to the right array in value
 * 
 * @param {array<string>} leftArray
 * @param {array<string>} rightArray
 * @returns {boolean}
 */
const isSameArray = (leftArray, rightArray) => {
  const leftLength = leftArray.length;

  if (!(getObjectClass(leftArray) === ARRAY && getObjectClass(rightArray) === ARRAY && leftLength === rightArray.length)) {
    return false;
  }

  let index = -1;

  while (++index < leftLength) {
    if (leftArray[index] !== rightArray[index]) {
      return false;
    }
  }

  return true;
};

/**
 * determine if array contents are considered a stopping point
 * 
 * @param {array<string>} array
 * @returns {boolean}
 */
const isStopPoint = (array) => {
  const length = STOP_POINTS.length;

  let index = -1;

  while (++index < length) {
    if (isSameArray(STOP_POINTS[index], array)) {
      return true;
    }
  }

  return false;
};

/**
 * group the array of values based on their type
 * (units, powers, etc)
 * 
 * @param {array<string>} array
 * @returns {array<array>}
 */
const groupTokens = (array) => {
  let arrayClone = [...array],
      tempArray = [],
      groups = [],
      typeArray, currentToken, currentType;

  while (arrayClone.length) {
    currentToken = arrayClone.pop();
    currentType = getType(currentToken);

    tempArray.unshift(currentToken);

    typeArray = tempArray.map((item) => {
      return getType(item);
    });

    if (currentType === 'power' || isStopPoint(typeArray)) {
      groups.unshift(tempArray);

      tempArray = [];
    }
  }

  return groups;
};

/**
 * calculate sum based on array
 * 
 * @param {array<array>} array
 * @returns {number}
 */
const reduceArray = (array) => {
  let sum = 0,
      next;

  forEach(array, (current, index) => {
    next = array[index + 1];

    if (next === 100) {
      sum += current * 100;
    } else if (current !== 100) {
      sum += current;
    }
  });

  return sum;
};

/**
 * based on groups, calculate the total value
 * 
 * @param {array<array>} groups
 * @returns {number}
 */
const calculateValue = (groups) => {
  const length = groups.length;

  let currentStack = 0,
      sum = 0,
      valueArray;

  forEach(groups, (group, index) => {
    if (getType(group[0]) === 'power') {
      sum += currentStack * VALUES[group[0]];

      currentStack = 0;
    } else {
      valueArray = group.map((item) => {
        return VALUES[item];
      });

      currentStack += reduceArray(valueArray);

      if (index === length - 1) {
        sum += currentStack;
      }
    }
  });

  return sum;
};

/**
 * convert object to number with different mappings
 * based on object type
 * 
 * if object is a string, try to convert it via parseFloat
 * or words-to-number
 *
 * @param {any} object
 * @returns {number}
 */
const toNumber = (object) => {
  const objectClass = getObjectClass(object);

  switch (objectClass) {
    case NUMBER:
      return object;

    case BOOLEAN:
      return object === true ? 1 : 0;

    case DATE:
      return object.valueOf();

    case NULL:
    case UNDEFINED:
      return 0;

    case ARRAY:
      return object.length;

    case OBJECT:
      return Object.keys(object).length;

    case MAP:
    case SET:
      return object.size;

    default:
      if (objectClass !== STRING) {
        return NaN;
      } else {
        break;
      }
  }

  if (object === 'true' || object === 'false') {
    return VALUES[object];
  }

  const parsedNumber = parseFloat(object);

  if (parsedNumber === parsedNumber) {
    return parsedNumber;
  }

  const string = object.trim();

  if (!string) {
    return 0;
  }

  const valueAsIs = VALUES[string];

  if (getObjectClass(valueAsIs) !== UNDEFINED) {
    return valueAsIs;
  }

  const sanitizedString = sanitize(string);
  const splitString = splitAndValidate(sanitizedString);
  const groups = groupTokens(splitString);

  return calculateValue(groups) || NaN;

};

export default toNumber;
