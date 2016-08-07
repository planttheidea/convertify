import test from 'ava';

import toFunction from '../src/toFunction';

import * as dummyData from './helpers/dummyData';

const testFunctionWrapperResult = (t, value) => {
  const result = toFunction(value);

  t.is(typeof result, 'function');

  t.deepEqual(result(), value);
};

test('if passing an error returns the same object', (t) => {
  t.is(toFunction(dummyData.FUNCTION), dummyData.FUNCTION);
});

test('if toFunction calls yield the object wrapped in a function', (t) => {
  for (let key in dummyData) {
    if (key !== 'FUNCTION') {
      testFunctionWrapperResult(t, dummyData.key);
    }
  }
});