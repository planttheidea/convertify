import test from 'ava';

import toPromise from '../src/toPromise';

import * as dummyData from './helpers/dummyData';

const testFunctionWrapperResult = async (t, value) => {
  const result = toPromise(value);

  t.is(typeof result, 'object');
  
  const resultValue = await result;

  t.deepEqual(resultValue, value);
};

test('if passing an error returns the same object', (t) => {
  t.is(toPromise(dummyData.PROMISE), dummyData.PROMISE);
});

test('if toPromise calls yield the object wrapped in a function', async (t) => {
  for (let key in dummyData) {
    if (key !== 'PROMISE') {
      await testFunctionWrapperResult(t, dummyData[key]);
    }
  }
});