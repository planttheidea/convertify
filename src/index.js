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

const TRANSFORMABLE_TYPES = {
  ARRAY: 'array',
  BOOLEAN: 'boolean',
  DATE: 'date',
  ERROR: 'error',
  FUNCTION: 'function',
  GENERATOR: 'generator',
  MAP: 'map',
  NULL: 'null',
  NUMBER: 'number',
  OBJECT: 'object',
  PROMISE: 'promise',
  REGEXP: 'regexp',
  SET: 'set',
  STRING: 'string',
  SYMBOL: 'symbol',
  UNDEFINED: 'undefined'
};

const convertify = (type, object) => {
  const normalizedType = type.toLowerCase();

  switch (normalizedType) {
    case TRANSFORMABLE_TYPES.ARRAY:
      return toArray(object);

    case TRANSFORMABLE_TYPES.BOOLEAN:
      return toBoolean(object);

    case TRANSFORMABLE_TYPES.DATE:
      return toDate(object);

    case TRANSFORMABLE_TYPES.ERROR:
      return toError(object);

    case TRANSFORMABLE_TYPES.FUNCTION:
      return toFunction(object);

    case TRANSFORMABLE_TYPES.GENERATOR:
      return toGenerator(object);

    case TRANSFORMABLE_TYPES.MAP:
      return toMap(object);

    case TRANSFORMABLE_TYPES.NULL:
      return toNull(object);

    case TRANSFORMABLE_TYPES.NUMBER:
      return toNumber(object);

    case TRANSFORMABLE_TYPES.OBJECT:
      return toObject(object);

    case TRANSFORMABLE_TYPES.PROMISE:
      return toPromise(object);

    case TRANSFORMABLE_TYPES.REGEXP:
      return toRegExp(object);

    case TRANSFORMABLE_TYPES.SET:
      return toSet(object);

    case TRANSFORMABLE_TYPES.STRING:
      return toString(object);

    case TRANSFORMABLE_TYPES.SYMBOL:
      return toSymbol(object);

    case TRANSFORMABLE_TYPES.UNDEFINED:
      return toUndefined(object);
  }
};

for (let key in TRANSFORMABLE_TYPES) {
  const value = TRANSFORMABLE_TYPES[key];

  convertify[value] = (object) => {
    return convertify(value, object);
  };
}

export {toArray};
export {toBoolean};
export {toDate};
export {toError};
export {toFunction};
export {toGenerator};
export {toMap};
export {toNull};
export {toNumber};
export {toObject};
export {toPromise};
export {toRegExp};
export {toSet};
export {toString};
export {toSymbol};
export {toUndefined};

export default convertify;
