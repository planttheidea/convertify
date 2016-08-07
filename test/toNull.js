import test from 'ava';

import toNull from '../src/toNull';

import * as dummyData from './helpers/dummyData';

test('if all executions of toNull yield null', (t) => {
  for (let key in dummyData) {
    t.is(toNull(dummyData[key]), null);
  }
});