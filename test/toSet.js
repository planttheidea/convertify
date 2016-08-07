import test from 'ava';

import toSet from '../src/toSet';

import * as dummyData from './helpers/dummyData';

const testIfSetIsEqual = (t, set1, set2) => {
  t.deepEqual(set1.values(), set2.values());
};

test('if passing a map returns the same object', (t) => {
  t.is(toSet(dummyData.SET), dummyData.SET);
  t.is(toSet(dummyData.EMPTY_SET), dummyData.EMPTY_SET);
});

const STRINGS_TO_NOT_TEST_AUTOMATEDLY = [
  'ARRAY',
  'EMPTY_ARRAY',
  'EMPTY_OBJECT',
  'EMPTY_MAP',
  'EMPTY_SET',
  'MAP',
  'OBJECT',
  'SET'
];

test('if passing simply-mapped values yield the original object wrapped in an array', (t) => {
  for (let key in dummyData) {
    if (!~STRINGS_TO_NOT_TEST_AUTOMATEDLY.indexOf(key)) {
      testIfSetIsEqual(t, toSet(dummyData[key]), new Set([dummyData[key]]));
    }
  }
});

test('if passing mapped values yield the correct result', (t) => {
  let objectToArray = [],
      mapToArray = [];

  for (let key in dummyData.OBJECT) {
    objectToArray.push(dummyData.OBJECT[key]);
  }

  dummyData.MAP.forEach((value) => {
    mapToArray.push(value);
  });

  testIfSetIsEqual(t, toSet(dummyData.ARRAY), new Set(dummyData.ARRAY));
  testIfSetIsEqual(t, toSet(dummyData.EMPTY_ARRAY), new Set());
  testIfSetIsEqual(t, toSet(dummyData.EMPTY_OBJECT), new Set());
  testIfSetIsEqual(t, toSet(dummyData.EMPTY_MAP), new Set());
  testIfSetIsEqual(t, toSet(dummyData.EMPTY_SET), new Set());
  testIfSetIsEqual(t, toSet(dummyData.MAP), new Set(mapToArray));
  testIfSetIsEqual(t, toSet(dummyData.OBJECT), new Set(objectToArray));
});