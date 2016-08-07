import test from 'ava';

import toString from '../src/toString';
import toSymbol from '../src/toSymbol';

import * as dummyData from './helpers/dummyData';

const KEYS_TO_SKIP_FOR_TOSTRING = [
  'EMPTY_STRING',
  'STRING',
  'SYMBOL'
];

test('if passing a symbol returns the same object', (t) => {
  t.is(toSymbol(dummyData.SYMBOL), dummyData.SYMBOL);
});

test('if passing a string value returns the correct symbol', (t) => {
  t.is(toSymbol(dummyData.EMPTY_STRING).toString(), Symbol(dummyData.EMPTY_STRING).toString());
  t.is(toSymbol(dummyData.STRING).toString(), Symbol(dummyData.STRING).toString());
});

test('if passing a stringified value of the object returns the correct symbol', (t) => {
  for (let key in dummyData) {
    if (!~KEYS_TO_SKIP_FOR_TOSTRING.indexOf(key)) {
      t.is(toSymbol(dummyData[key]).toString(), Symbol(toString(dummyData[key])).toString());
    }
  }
});