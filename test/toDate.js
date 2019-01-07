import test from 'ava';

import toDate from '../src/toDate';

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
  UNDEFINED,
} from './helpers/dummyData';

const testIsDateMostlyEqual = (date1, date2) => {
  const date1String = date1
    .toISOString()
    .split(':')
    .slice(0, -1)
    .join(':');
  const date2String = date2
    .toISOString()
    .split(':')
    .slice(0, -1)
    .join(':');

  return date1String === date2String;
};

const VALID_DATE_ARRAY = [2000, 0, 1];
const VALID_DATE_MAP = new Map()
  .set('day', 1)
  .set('month', 0)
  .set('year', 2000);
const VALID_DATE_OBJECT = {
  day: 1,
  month: 0,
  year: 2000,
};
const VALID_DATE_SET = new Set([2000, 0, 1]);
const VALID_DATE_RESULT = new Date(2000, 0, 1);

test('if passing a date returns the same object', (t) => {
  t.is(toDate(DATE), DATE);
});

test('if passing invalid date values are identified as invalid dates', (t) => {
  t.true(isNaN(toDate(ARRAY).valueOf()));
  t.true(isNaN(toDate(BOOLEAN).valueOf()));
  t.true(isNaN(toDate(ERROR).valueOf()));
  t.true(isNaN(toDate(FUNCTION).valueOf()));
  t.true(isNaN(toDate(GENERATOR).valueOf()));
  t.true(isNaN(toDate(MAP).valueOf()));
  t.true(isNaN(toDate(OBJECT).valueOf()));
  t.true(isNaN(toDate(PROMISE).valueOf()));
  t.true(isNaN(toDate(REGEXP).valueOf()));
  t.true(isNaN(toDate(SET).valueOf()));
  t.true(isNaN(toDate(STRING).valueOf()));
  t.true(isNaN(toDate(SYMBOL).valueOf()));
});

test('if passing values mapped to new dates yield new dates', (t) => {
  t.true(testIsDateMostlyEqual(toDate(EMPTY_ARRAY), new Date()));
  t.true(testIsDateMostlyEqual(toDate(EMPTY_MAP), new Date()));
  t.true(testIsDateMostlyEqual(toDate(EMPTY_OBJECT), new Date()));
  t.true(testIsDateMostlyEqual(toDate(EMPTY_SET), new Date()));
  t.true(testIsDateMostlyEqual(toDate(EMPTY_STRING), new Date()));
  t.true(testIsDateMostlyEqual(toDate(NULL), new Date()));
  t.true(testIsDateMostlyEqual(toDate(UNDEFINED), new Date()));
});

test('if passing standard date input values yield the correct date', (t) => {
  t.deepEqual(toDate(NUMBER), new Date('1970-01-01T00:00:00.123Z'));
  t.deepEqual(toDate(VALID_DATE_ARRAY), VALID_DATE_RESULT);
  t.deepEqual(toDate(VALID_DATE_MAP), VALID_DATE_RESULT);
  t.deepEqual(toDate(VALID_DATE_OBJECT), VALID_DATE_RESULT);
  t.deepEqual(toDate(VALID_DATE_SET), VALID_DATE_RESULT);
});
