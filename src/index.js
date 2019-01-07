import toArray from './toArray';
import toBoolean from './toBoolean';
import toDate from './toDate';
import toError from './toError';
import toFunction from './toFunction';
import toGenerator from './toGenerator';
import toMap from './toMap';
import toNull from './toNull';
import toNumber from './toNumber';
import toObject from './toObject';
import toPromise from './toPromise';
import toRegExp from './toRegExp';
import toSet from './toSet';
import toString from './toString';
import toSymbol from './toSymbol';
import toUndefined from './toUndefined';

const CONVERTIFY_MAP = {
  array: toArray,
  boolean: toBoolean,
  date: toDate,
  error: toError,
  function: toFunction,
  generator: toGenerator,
  map: toMap,
  null: toNull,
  number: toNumber,
  object: toObject,
  promise: toPromise,
  regexp: toRegExp,
  set: toSet,
  string: toString,
  symbol: toSymbol,
  undefined: toUndefined,
};

const convertify = (type, object) => {
  const normalizedType = typeof type === 'string' ? type.toLowerCase() : '';
  const handler = CONVERTIFY_MAP[normalizedType];

  if (handler) {
    return handler(object);
  }

  throw new TypeError('This type of conversion is not currently supported.');
};

for (let key in CONVERTIFY_MAP) {
  convertify[key] = CONVERTIFY_MAP[key];
}

export {
  toArray,
  toBoolean,
  toDate,
  toError,
  toFunction,
  toGenerator,
  toMap,
  toNull,
  toNumber,
  toObject,
  toPromise,
  toRegExp,
  toSet,
  toString,
  toSymbol,
  toUndefined,
};

export default convertify;
