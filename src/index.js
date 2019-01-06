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

const convertify = (type, object) => {
  const normalizedType = type.toLowerCase();

  switch (normalizedType) {
    case 'array':
      return toArray(object);

    case 'boolean':
      return toBoolean(object);

    case 'date':
      return toDate(object);

    case 'error':
      return toError(object);

    case 'function':
      return toFunction(object);

    case 'generator':
      return toGenerator(object);

    case 'map':
      return toMap(object);

    case 'null':
      return toNull(object);

    case 'number':
      return toNumber(object);

    case 'object':
      return toObject(object);

    case 'promise':
      return toPromise(object);

    case 'regexp':
      return toRegExp(object);

    case 'set':
      return toSet(object);

    case 'string':
      return toString(object);

    case 'symbol':
      return toSymbol(object);

    case 'undefined':
      return toUndefined(object);

    default:
      throw new TypeError('This type of conversion is not currently supported.');
  }
};

convertify.array = toArray;
convertify.boolean = toBoolean;
convertify.date = toDate;
convertify.error = toError;
convertify.function = toFunction;
convertify.generator = toGenerator;
convertify.map = toMap;
convertify.null = toNull;
convertify.number = toNumber;
convertify.object = toObject;
convertify.promise = toPromise;
convertify.regexp = toRegExp;
convertify.set = toSet;
convertify.string = toString;
convertify.symbol = toSymbol;
convertify.undefined = toUndefined;

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
