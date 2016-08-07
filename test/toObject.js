import test from 'ava';

import toObject from '../src/toObject';

import {
  ARRAY,
  BOOLEAN,
  DATE,
  EMPTY_ARRAY,
  EMPTY_MAP,
  EMPTY_OBJECT,
  EMPTY_SET,
  EMPTY_STRING,
  ERROR,
  FUNCTION,
  GENERATOR,
  MAP,
  NULL,
  NUMBER,
  OBJECT,
  PROMISE,
  REGEXP,
  SET,
  STRING,
  SYMBOL,
  UNDEFINED
} from './helpers/dummyData';

test('if passing an object returns the same object', (t) => {
  t.is(toObject(OBJECT), OBJECT);
  t.is(toObject(EMPTY_OBJECT), EMPTY_OBJECT);
});

test('if passing simply-mapped values yield the correct result', (t) => {
  t.deepEqual(toObject(BOOLEAN), {'0': BOOLEAN});
  t.deepEqual(toObject(DATE), {'0': DATE});
  t.deepEqual(toObject(ERROR), {'0': ERROR});
  t.deepEqual(toObject(EMPTY_STRING), {'0': EMPTY_STRING});
  t.deepEqual(toObject(FUNCTION), {'0': FUNCTION});
  t.deepEqual(toObject(GENERATOR), {'0': GENERATOR});
  t.deepEqual(toObject(NULL), {'0': NULL});
  t.deepEqual(toObject(NUMBER), {'0': NUMBER});
  t.deepEqual(toObject(PROMISE), {'0': PROMISE});
  t.deepEqual(toObject(REGEXP), {'0': REGEXP});
  t.deepEqual(toObject(STRING), {'0': STRING});
  t.deepEqual(toObject(SYMBOL), {'0': SYMBOL});
  t.deepEqual(toObject(UNDEFINED), {'0': UNDEFINED});
});

test('if passing mapped values yield the original object wrapped in an array', (t) => {
  const arrayToObject = ARRAY.reduce((object, value, index) => {
    return {
      ...object,
      [index]: value
    };
  }, {});

  let mapToObject = {},
      setToObject = {};

  MAP.forEach((value, key) => {
    mapToObject[key] = value;
  });

  let index = 0;

  SET.forEach((value) => {
    setToObject[index] = value;

    index++;
  });

  const objectKeyMap = new Map().set({foo: 'bar'}, 'baz');
  const stringifiedKeyObject = {
    '{"foo":"bar"}': 'baz'
  };

  t.deepEqual(toObject(ARRAY), arrayToObject);
  t.deepEqual(toObject(EMPTY_ARRAY), {});
  t.deepEqual(toObject(EMPTY_MAP), {});
  t.deepEqual(toObject(EMPTY_SET), {});
  t.deepEqual(toObject(MAP), mapToObject);
  t.deepEqual(toObject(SET), setToObject);

  t.deepEqual(toObject(objectKeyMap), stringifiedKeyObject);
  t.deepEqual(toObject(JSON.stringify(OBJECT)), OBJECT);
});