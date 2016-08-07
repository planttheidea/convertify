import test from 'ava';

import toError from '../src/toError';
import toString from '../src/toString';

import * as dummyData from './helpers/dummyData';

test('if passing an error returns the same object', (t) => {
  t.is(toError(dummyData.ERROR), dummyData.ERROR);
});

test('if passing values yield the stringified object wrapped in an error', (t) => {
  for (let key in dummyData) {
    if (key !== 'ERROR') {
      t.deepEqual(toError(dummyData[key]), new Error(toString(dummyData[key])));
    }
  }
});