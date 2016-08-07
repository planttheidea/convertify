import test from 'ava';

import toMap from '../src/toMap';

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

const testIfMapIsEqual = (t, map1, map2) => {
  t.deepEqual(map1.keys(), map2.keys());
  t.deepEqual(map1.values(), map2.values());
};

test('if passing a map returns the same object', (t) => {
  t.is(toMap(MAP), MAP);
  t.is(toMap(EMPTY_MAP), EMPTY_MAP);
});

test('if passing simply-mapped values yield the original object wrapped in an array', (t) => {
  testIfMapIsEqual(t, toMap(BOOLEAN), new Map([[0, BOOLEAN]]));
  testIfMapIsEqual(t, toMap(DATE), new Map([[0, DATE]]));
  testIfMapIsEqual(t, toMap(ERROR), new Map([[0, ERROR]]));
  testIfMapIsEqual(t, toMap(EMPTY_STRING), new Map([[0, EMPTY_STRING]]));
  testIfMapIsEqual(t, toMap(FUNCTION), new Map([[0, FUNCTION]]));
  testIfMapIsEqual(t, toMap(GENERATOR), new Map([[0, GENERATOR]]));
  testIfMapIsEqual(t, toMap(NULL), new Map([[0, NULL]]));
  testIfMapIsEqual(t, toMap(NUMBER), new Map([[0, NUMBER]]));
  testIfMapIsEqual(t, toMap(PROMISE), new Map([[0, PROMISE]]));
  testIfMapIsEqual(t, toMap(REGEXP), new Map([[0, REGEXP]]));
  testIfMapIsEqual(t, toMap(STRING), new Map([[0, STRING]]));
  testIfMapIsEqual(t, toMap(SYMBOL), new Map([[0, SYMBOL]]));
  testIfMapIsEqual(t, toMap(UNDEFINED), new Map([[0, UNDEFINED]]));
});

test('if passing mapped values yield the correct result', (t) => {
  let objectToMap = [],
      setToMap = [],
      index = 0;

  const mappedArray = ARRAY.map((value, index) => {
    return [index, value];
  });

  for (let key in OBJECT) {
    objectToMap.push([key, OBJECT[key]])
  }

  SET.forEach((value) => {
    setToMap.push([index, value]);

    index++;
  });

  testIfMapIsEqual(t, toMap(ARRAY), new Map(mappedArray));
  testIfMapIsEqual(t, toMap(EMPTY_ARRAY), new Map());
  testIfMapIsEqual(t, toMap(EMPTY_OBJECT), new Map());
  testIfMapIsEqual(t, toMap(EMPTY_MAP), new Map());
  testIfMapIsEqual(t, toMap(EMPTY_SET), new Map());
  testIfMapIsEqual(t, toMap(OBJECT), new Map(objectToMap));
  testIfMapIsEqual(t, toMap(SET), new Map(setToMap));
});