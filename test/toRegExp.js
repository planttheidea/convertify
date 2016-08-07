import test from 'ava';

import toString from '../src/toString';
import toRegExp from '../src/toRegExp';

import * as dummyData from './helpers/dummyData';

const EMPTY_REGEXP = /(.*)/;

const KEYS_TO_SKIP_FOR_TOSTRING = [
  'EMPTY_STRING',
  'STRING',
  'SYMBOL',
  'REGEXP'
];

test('if passing a regexp returns the same object', (t) => {
  t.is(toRegExp(dummyData.REGEXP), dummyData.REGEXP);
});

test('if passing a string value returns the correct RegExp value without stringification needed', (t) => {
  t.deepEqual(toRegExp(dummyData.EMPTY_STRING), EMPTY_REGEXP);
  t.deepEqual(toRegExp(dummyData.STRING), new RegExp(dummyData.STRING));
});

test('if passing a stringified value of the object returns the correct new RegExp', (t) => {
  for (let key in dummyData) {
    if (!~KEYS_TO_SKIP_FOR_TOSTRING.indexOf(key)) {
      t.deepEqual(toRegExp(dummyData[key]), new RegExp(toString(dummyData[key])));
    }
  }
});