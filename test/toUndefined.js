import test from 'ava';

import toUndefined from '../src/toUndefined';

import * as dummyData from './helpers/dummyData';

test('if all executions of toUndefined yield undefined', (t) => {
  for (let key in dummyData) {
    t.is(toUndefined(dummyData[key]), undefined);
  }
});