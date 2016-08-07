import test from 'ava';

import toGenerator from '../src/toGenerator';

import * as dummyData from './helpers/dummyData';

const testGeneratorWrapperResult = (t, value) => {
  const result = toGenerator(value);

  t.is(typeof result, 'function');

  const iterator = result();
  
  try {
    iterator.next();
    t.pass();
  } catch (exception) {
    t.fail();
  }
};

test('if passing an error returns the same object', (t) => {
  t.is(toGenerator(dummyData.GENERATOR), dummyData.GENERATOR);
});

test('if toGenerator calls yield the object wrapped in a function', (t) => {
  for (let key in dummyData) {
    if (key !== 'GENERATOR') {
      testGeneratorWrapperResult(t, dummyData[key]);
    }
  }
});