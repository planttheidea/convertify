// transform
import toString from './toString';

// utils
import {
  throwUnsupportedError
} from './utils/miscellaneous';
import getObjectClass from './utils/objectClass';

// constants
import {
  STRING,
  SYMBOL
} from './constants/objectClass';

/**
 * convert object to symbol by creating a new symbol
 * from the stringified object
 *
 * @param {any} object
 * @returns {symbol}
 */
const toSymbol = (object) => {
  if (typeof Symbol === 'undefined') {
    throwUnsupportedError('Symbol');
  }

  const objectClass = getObjectClass(object);

  if (objectClass === SYMBOL) {
    return object;
  }

  const string = objectClass === STRING ? object : toString(object);

  return Symbol(string);
};

export default toSymbol;
