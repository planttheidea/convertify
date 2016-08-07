import test from 'ava';

import toBoolean from '../src/toBoolean';

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

test('if passing a boolean returns the same object', (t) => {
  t.is(toBoolean(BOOLEAN), BOOLEAN);
});

test('if passing implicitly coerced values yield the correct result', (t) => {
  t.false(toBoolean(EMPTY_STRING));
  t.true(toBoolean(ERROR));
  t.true(toBoolean(FUNCTION));
  t.true(toBoolean(GENERATOR));
  t.false(toBoolean(NULL));
  t.true(toBoolean(NUMBER));
  t.true(toBoolean(PROMISE));
  t.true(toBoolean(REGEXP));
  t.true(toBoolean(STRING));
  t.true(toBoolean(SYMBOL));
  t.false(toBoolean(UNDEFINED));
});

test('if passing mapped values based on values existing yield the correct result', (t) => {
  t.true(toBoolean(ARRAY));
  t.true(toBoolean(DATE));
  t.false(toBoolean(EMPTY_ARRAY));
  t.false(toBoolean(EMPTY_MAP));
  t.false(toBoolean(EMPTY_OBJECT));
  t.false(toBoolean(EMPTY_SET));
  t.true(toBoolean(MAP));
  t.true(toBoolean(OBJECT));
  t.true(toBoolean(SET));
});