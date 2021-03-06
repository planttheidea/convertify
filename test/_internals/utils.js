import test from 'ava';

import types from '../../src/_internals/objectClass';

import {
  getObjectClass,
  isEncapsulatedBy,
  throwUnsupportedError,
} from '../../src/_internals/utils';

const ARRAY = [1, 2, 3];
const OBJECTS = {
  array: ['foo', 'bar'],
  boolean: true,
  dataView: new DataView(new ArrayBuffer(2)),
  date: new Date(),
  error: new Error('Test'),
  float32Array: new Float32Array(ARRAY),
  float64Array: new Float64Array(ARRAY),
  function: () => {},
  * generator() {},
  int8Array: new Int8Array(ARRAY),
  int16Array: new Int16Array(ARRAY),
  int32Array: new Int32Array(ARRAY),
  map: new Map().set('foo', 'bar'),
  math: Math,
  null: null,
  number: 2,
  object: {foo: 'bar'},
  promise: Promise.resolve(1),
  regexp: /foo/,
  set: new Set().add('foo'),
  string: 'string',
  symbol: Symbol('foo'),
  uint8Array: new Uint8Array(ARRAY),
  uint8ClampedArray: new Uint8ClampedArray(ARRAY),
  uint16Array: new Uint16Array(ARRAY),
  uint32Array: new Uint32Array(ARRAY),
  undefined,
  weakMap: new WeakMap().set({}, 'bar'),
  weakSet: new WeakSet().add({foo: 'bar'}),
};

test('if types are correct string values', (t) => {
  t.is(types.ARRAY, '[object Array]');
  t.is(types.ARRAY_BUFFER, '[object ArrayBuffer]');
  t.is(types.BOOLEAN, '[object Boolean]');
  t.is(types.DATA_VIEW, '[object DataView]');
  t.is(types.DATE, '[object Date]');
  t.is(types.ERROR, '[object Error]');
  t.is(types.FLOAT_32_ARRAY, '[object Float32Array]');
  t.is(types.FLOAT_64_ARRAY, '[object Float64Array]');
  t.is(types.FUNCTION, '[object Function]');
  t.is(types.GENERATOR, '[object GeneratorFunction]');
  t.is(types.INT_8_ARRAY, '[object Int8Array]');
  t.is(types.INT_16_ARRAY, '[object Int16Array]');
  t.is(types.INT_32_ARRAY, '[object Int32Array]');
  t.is(types.MAP, '[object Map]');
  t.is(types.MATH, '[object Math]');
  t.is(types.NULL, '[object Null]');
  t.is(types.NUMBER, '[object Number]');
  t.is(types.OBJECT, '[object Object]');
  t.is(types.PROMISE, '[object Promise]');
  t.is(types.REGEXP, '[object RegExp]');
  t.is(types.SET, '[object Set]');
  t.is(types.STRING, '[object String]');
  t.is(types.SYMBOL, '[object Symbol]');
  t.is(types.UINT_8_ARRAY, '[object Uint8Array]');
  t.is(types.UINT_8_CLAMPED_ARRAY, '[object Uint8ClampedArray]');
  t.is(types.UINT_16_ARRAY, '[object Uint16Array]');
  t.is(types.UINT_32_ARRAY, '[object Uint32Array]');
  t.is(types.UNDEFINED, '[object Undefined]');
  t.is(types.WEAKMAP, '[object WeakMap]');
  t.is(types.WEAKSET, '[object WeakSet]');
});

test('if getObjectClass correctly identifies to object class values', (t) => {
  t.is(getObjectClass(OBJECTS.array), types.ARRAY);
  t.is(getObjectClass(OBJECTS.boolean), types.BOOLEAN);
  t.is(getObjectClass(OBJECTS.dataView), types.DATA_VIEW);
  t.is(getObjectClass(OBJECTS.date), types.DATE);
  t.is(getObjectClass(OBJECTS.error), types.ERROR);
  t.is(getObjectClass(OBJECTS.float32Array), types.FLOAT_32_ARRAY);
  t.is(getObjectClass(OBJECTS.float64Array), types.FLOAT_64_ARRAY);
  t.is(getObjectClass(OBJECTS.function), types.FUNCTION);
  t.is(getObjectClass(OBJECTS.generator), types.GENERATOR);
  t.is(getObjectClass(OBJECTS.int8Array), types.INT_8_ARRAY);
  t.is(getObjectClass(OBJECTS.int16Array), types.INT_16_ARRAY);
  t.is(getObjectClass(OBJECTS.int32Array), types.INT_32_ARRAY);
  t.is(getObjectClass(OBJECTS.map), types.MAP);
  t.is(getObjectClass(OBJECTS.math), types.MATH);
  t.is(getObjectClass(OBJECTS.null), types.NULL);
  t.is(getObjectClass(OBJECTS.number), types.NUMBER);
  t.is(getObjectClass(OBJECTS.object), types.OBJECT);
  t.is(getObjectClass(OBJECTS.promise), types.PROMISE);
  t.is(getObjectClass(OBJECTS.regexp), types.REGEXP);
  t.is(getObjectClass(OBJECTS.set), types.SET);
  t.is(getObjectClass(OBJECTS.string), types.STRING);
  t.is(getObjectClass(OBJECTS.symbol), types.SYMBOL);
  t.is(getObjectClass(OBJECTS.uint8Array), types.UINT_8_ARRAY);
  t.is(getObjectClass(OBJECTS.uint8ClampedArray), types.UINT_8_CLAMPED_ARRAY);
  t.is(getObjectClass(OBJECTS.uint16Array), types.UINT_16_ARRAY);
  t.is(getObjectClass(OBJECTS.uint32Array), types.UINT_32_ARRAY);
  t.is(getObjectClass(OBJECTS.undefined), types.UNDEFINED);
  t.is(getObjectClass(OBJECTS.weakMap), types.WEAKMAP);
  t.is(getObjectClass(OBJECTS.weakSet), types.WEAKSET);
});

test('isEncapsulatedBy tests if string is encapsulated by the correct values', (t) => {
  const sameBeginAndEnd = '|foo|';
  const differentBeginAndEnd = '[foo]';
  const notEncapsulated = 'foo';

  t.true(isEncapsulatedBy(sameBeginAndEnd, '|'));
  t.true(isEncapsulatedBy(differentBeginAndEnd, '[', ']'));
  t.false(isEncapsulatedBy(notEncapsulated, '|'));
});

test('if UnsupportedError throws with the correct message', (t) => {
  t.throws(() => {
    throwUnsupportedError('Map');
  });
});
