import test from 'ava';

import toNumber from '../src/toNumber';

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

test('if passing number returns the same object', (t) => {
  t.is(toNumber(NUMBER), NUMBER);
});

test('if numeric strings return the parsed value of the string', (t) => {
  t.is(toNumber('1'), parseFloat(1));
  t.is(toNumber('0.234'), parseFloat(0.234));
  t.is(toNumber('12345'), parseFloat(12345));
});

test('if simple string units return their numeric counterparts', (t) => {
  t.is(toNumber('one'), 1);
  t.is(toNumber('two'), 2);
  t.is(toNumber('three'), 3);
  t.is(toNumber('four'), 4);
  t.is(toNumber('five'), 5);
  t.is(toNumber('six'), 6);
  t.is(toNumber('seven'), 7);
  t.is(toNumber('eight'), 8);
  t.is(toNumber('nine'), 9);
  t.is(toNumber('ten'), 10);
  t.is(toNumber('eleven'), 11);
  t.is(toNumber('twelve'), 12);
  t.is(toNumber('thirteen'), 13);
  t.is(toNumber('fourteen'), 14);
  t.is(toNumber('fifteen'), 15);
  t.is(toNumber('sixteen'), 16);
  t.is(toNumber('seventeen'), 17);
  t.is(toNumber('eighteen'), 18);
  t.is(toNumber('nineteen'), 19);
});

test('if string units with powers return their numeric counterparts', (t) => {
  t.is(toNumber('one hundred'), 100);
  t.is(toNumber('one thousand'), 1000);
  t.is(toNumber('one million'), 1000000);
  t.is(toNumber('one billion'), 1000000000);
  t.is(toNumber('one trillion'), 1000000000000);
});

test('if random complex string units with powers return their numeric counterparts', (t) => {
  t.is(toNumber('three thousand four hundred and twelve'), 3412);
  t.is(toNumber('seventeen million and eight'), 17000008);
  t.is(toNumber('forty billion three hundred and twelve thousand eight hundred and seventy three'), 40000312873);
});

test('if unmapped object types return their correct value assignment', (t) => {
  t.true(isNaN(toNumber(ERROR)));
  t.true(isNaN(toNumber(FUNCTION)));
  t.true(isNaN(toNumber(GENERATOR)));
  t.true(isNaN(toNumber(PROMISE)));
  t.true(isNaN(toNumber(REGEXP)));
  t.true(isNaN(toNumber(STRING)));
  t.true(isNaN(toNumber(SYMBOL)));
});

test('if mapped object types return their correct value assignment', (t) => {
  t.is(toNumber(ARRAY), ARRAY.length);
  t.is(toNumber(BOOLEAN), 1);
  t.is(toNumber(DATE), DATE.valueOf());
  t.is(toNumber(EMPTY_ARRAY), 0);
  t.is(toNumber(EMPTY_MAP), 0);
  t.is(toNumber(EMPTY_OBJECT), 0);
  t.is(toNumber(EMPTY_SET), 0);
  t.is(toNumber(EMPTY_STRING), 0);
  t.is(toNumber(MAP), MAP.size);
  t.is(toNumber(NULL), 0);
  t.is(toNumber(OBJECT), Object.keys(OBJECT).length);
  t.is(toNumber(SET), SET.size);
  t.is(toNumber(UNDEFINED), 0);
});