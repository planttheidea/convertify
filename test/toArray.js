import test from 'ava';

import toArray from '../src/toArray';

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

test('if passing an array returns the same object', (t) => {
  t.is(toArray(ARRAY), ARRAY);
  t.is(toArray(EMPTY_ARRAY), EMPTY_ARRAY);
});

test('if passing unmapped values yield the original object wrapped in an array', (t) => {
  t.deepEqual(toArray(BOOLEAN), [BOOLEAN]);
  t.deepEqual(toArray(DATE), [DATE]);
  t.deepEqual(toArray(ERROR), [ERROR]);
  t.deepEqual(toArray(EMPTY_STRING), [EMPTY_STRING]);
  t.deepEqual(toArray(FUNCTION), [FUNCTION]);
  t.deepEqual(toArray(GENERATOR), [GENERATOR]);
  t.deepEqual(toArray(NULL), [NULL]);
  t.deepEqual(toArray(NUMBER), [NUMBER]);
  t.deepEqual(toArray(PROMISE), [PROMISE]);
  t.deepEqual(toArray(REGEXP), [REGEXP]);
  t.deepEqual(toArray(STRING), [STRING]);
  t.deepEqual(toArray(SYMBOL), [SYMBOL]);
  t.deepEqual(toArray(UNDEFINED), [UNDEFINED]);
});

test('if passing mapped values yield the correct result', (t) => {
  let mapToArray = [],
      objectToArray = [],
      setToArray = [];

  MAP.forEach((value) => {
    mapToArray.push(value);
  });

  for (let key in OBJECT) {
    objectToArray.push(OBJECT[key]);
  }

  SET.forEach((value) => {
    setToArray.push(value);
  });

  t.deepEqual(toArray(EMPTY_OBJECT), []);
  t.deepEqual(toArray(EMPTY_MAP), []);
  t.deepEqual(toArray(EMPTY_SET), []);
  t.deepEqual(toArray(MAP), mapToArray);
  t.deepEqual(toArray(OBJECT), objectToArray);
  t.deepEqual(toArray(SET), setToArray);

  t.deepEqual(toArray(JSON.stringify(ARRAY)), ARRAY);
});