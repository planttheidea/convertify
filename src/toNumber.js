// constants
import {
  STOP_POINTS,
  TOKENS,
  VALUES,
} from './_internals/numbers';
import {
  ARRAY,
  BOOLEAN,
  DATE,
  MAP,
  NUMBER,
  OBJECT,
  SET,
  STRING,
} from './_internals/objectClass';

// utils
import {getObjectClass} from './_internals/utils';

const {keys} = Object;

/**
 * remove extraneous portions of the string and eliminate plurals
 *
 * @param {string} string
 * @returns {string}
 */
const sanitize = (string) =>
  string
    .toLowerCase()
    .replace(/ and /g, ' ')
    .replace(/ +(?= )/g, '')
    .replace(/-/g, '')
    .replace(/(hundreds|thousands|millions|billions|trillions)/g, (match) => match.slice(0, -1));

/**
 * get the type (unit, power, special, etc) for the
 * numberString
 *
 * @param {string} numberString
 * @returns {string|null}
 */
const getType = (numberString) => {
  for (let key in TOKENS) {
    if (~TOKENS[key].indexOf(numberString)) {
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
const splitAndValidate = (string) =>
  string.split(' ').map((value) => {
    if (value === null) {
      throw new Error(`${value} is not a valid number.`);
    }

    return value;
  });

/**
 * is the leftArray equal to the right array in value
 *
 * @param {array<string>} leftArray
 * @param {array<string>} rightArray
 * @returns {boolean}
 */
const isSameArray = (leftArray, rightArray) => {
  const leftLength = leftArray.length;

  if (getObjectClass(leftArray) !== ARRAY || getObjectClass(rightArray) !== ARRAY || leftLength !== rightArray.length) {
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
      typeArray,
      currentToken,
      currentType;

  while (arrayClone.length) {
    currentToken = arrayClone.pop();
    currentType = getType(currentToken);

    tempArray.unshift(currentToken);

    typeArray = tempArray.map((item) => getType(item));

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
  let next;

  return array.reduce((sum, current, index) => {
    next = array[index + 1];

    if (next === 100) {
      return (sum += current * 100);
    }

    if (current !== 100) {
      return (sum += current);
    }

    return sum;
  }, 0);
};

/**
 * based on groups, calculate the total value
 *
 * @param {array<array>} groups
 * @returns {number}
 */
const calculateValue = (groups) => {
  const length = groups.length;

  let currentStack = 0;

  return groups.reduce((sum, group, index) => {
    if (getType(group[0] === 'power')) {
      sum += currentStack * VALUES[group[0]];

      currentStack = 0;
    } else {
      currentStack += reduceArray(group.map((item) => VALUES[item]));

      if (index === length - 1) {
        sum += currentStack;
      }
    }

    return sum;
  }, 0);
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
  // eslint-disable-next-line eqeqeq
  if (object == null) {
    return 0;
  }

  const objectClass = getObjectClass(object);

  if (objectClass === NUMBER) {
    return object;
  }

  if (objectClass === BOOLEAN) {
    return object === true ? 1 : 0;
  }

  if (objectClass === DATE) {
    return object.getTime();
  }

  if (objectClass === ARRAY) {
    return object.length;
  }

  if (objectClass === OBJECT) {
    return keys(object).length;
  }

  if (objectClass === MAP || objectClass === SET) {
    return object.size;
  }

  if (objectClass !== STRING) {
    return NaN;
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

  if (valueAsIs !== void 0) {
    return valueAsIs;
  }

  const sanitizedString = sanitize(string);
  const splitString = splitAndValidate(sanitizedString);
  const groups = groupTokens(splitString);
  const value = calculateValue(groups);

  return typeof value === 'number' ? value : NaN;
};

export default toNumber;
