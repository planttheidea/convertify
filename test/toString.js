import test from 'ava';
import sinon from 'sinon';

import toString from '../src/toString';
import {
  replacer
} from '../src/utils/toString';

import json from '../src/utils/prune';

const DATE = new Date();
const INTEGER_ARRAY = [1, 2, 3];
const FUNCTION = function value() {};
const GENERATOR = function* value() {};
const TEST_VALUES = [
  {
    comparator: 'deepEqual',
    expectedResult: {},
    expectedString: '{}',
    key: '',
    value: {}
  }, {
    comparator: 'deepEqual',
    expectedResult: ['foo', 'bar'],
    expectedString: '{"0":"foo","1":"bar"}',
    key: 'arguments',
    value: (function() {
      return arguments;
    })('foo', 'bar')
  }, {
    comparator: 'deepEqual',
    expectedResult: ['foo', 'bar'],
    expectedString: '["foo","bar"]',
    key: 'array',
    value: ['foo', 'bar']
  }, {
    comparator: 'deepEqual',
    expectedResult: `\u0001\u0002\u0003`,
    expectedString: `\\u0001\\u0002\\u0003`,
    key: 'arrayBuffer',
    value: new Uint16Array(INTEGER_ARRAY).buffer
  }, {
    comparator: 'is',
    expectedResult: true,
    expectedString: 'true',
    key: 'boolean',
    value: true
  }, {
    comparator: 'deepEqual',
    expectedResult: `\u0000`,
    expectedString: `\\u0000`,
    key: 'dataView',
    value: new DataView(new ArrayBuffer(2))
  }, {
    comparator: 'is',
    expectedResult: DATE.toISOString(),
    expectedString: DATE.toISOString(),
    key: 'date',
    value: DATE
  }, {
    comparator: 'is',
    expectedResult: 'Error: test',
    expectedString: 'Error: test',
    key: 'error',
    value: new Error('test')
  }, {
    comparator: 'deepEqual',
    expectedResult: '[1,2,3]',
    expectedString: '[1,2,3]',
    key: 'float32Array',
    value: new Float32Array(INTEGER_ARRAY)
  }, {
    comparator: 'deepEqual',
    expectedResult: '[1,2,3]',
    expectedString: '[1,2,3]',
    key: 'float64Array',
    value: new Float64Array(INTEGER_ARRAY)
  }, {
    comparator: 'is',
    expectedResult: FUNCTION.toString(),
    expectedString: FUNCTION.toString(),
    key: 'function',
    value: FUNCTION
  }, {
    comparator: 'is',
    expectedResult: GENERATOR.toString(),
    expectedString: GENERATOR.toString(),
    key: 'generator',
    value: GENERATOR
  }, {
    comparator: 'deepEqual',
    expectedResult: '[1,2,3]',
    expectedString: '[1,2,3]',
    key: 'int8Array',
    value: new Int8Array(INTEGER_ARRAY)
  }, {
    comparator: 'deepEqual',
    expectedResult: '[1,2,3]',
    expectedString: '[1,2,3]',
    key: 'int16Array',
    value: new Int16Array(INTEGER_ARRAY)
  }, {
    comparator: 'deepEqual',
    expectedResult: '[1,2,3]',
    expectedString: '[1,2,3]',
    key: 'int32Array',
    value: new Int32Array(INTEGER_ARRAY)
  }, {
    comparator: 'deepEqual',
    expectedResult: {foo: 'bar'},
    expectedString: '{"foo":"bar"}',
    key: 'map',
    value: new Map().set('foo', 'bar')
  }, {
    comparator: 'deepEqual',
    expectedResult: {E: 2.718281828459045, LN2: 0.6931471805599453, LN10: 2.302585092994046, LOG2E: 1.4426950408889634, LOG10E: 0.4342944819032518, PI: 3.141592653589793, SQRT1_2: 0.7071067811865476, SQRT2: 1.4142135623730951},
    expectedString: '{"E":2.718281828459045,"LN2":0.6931471805599453,"LN10":2.302585092994046,"LOG2E":1.4426950408889634,"LOG10E":0.4342944819032518,"PI":3.141592653589793,"SQRT1_2":0.7071067811865476,"SQRT2":1.4142135623730951}',
    key: 'math',
    value: Math
  }, {
    comparator: 'is',
    expectedResult: 'null',
    expectedString: 'null',
    key: 'null',
    value: null
  }, {
    comparator: 'is',
    expectedResult: 12,
    expectedString: '12',
    key: 'number',
    value: 12
  }, {
    comparator: 'deepEqual',
    expectedResult: {foo: 'bar'},
    expectedString: '{"foo":"bar"}',
    key: 'object',
    value: {foo: 'bar'}
  }, {
    comparator: 'is',
    expectedResult: 'Promise NOT_ENUMERABLE',
    expectedString: 'Promise NOT_ENUMERABLE',
    key: 'promise',
    value: Promise.resolve(1)
  }, {
    comparator: 'is',
    expectedResult: '/foo/',
    expectedString: '/foo/',
    key: 'regexp',
    value: /foo/
  }, {
    comparator: 'deepEqual',
    expectedResult: ['foo'],
    expectedString: '["foo"]',
    key: 'set',
    value: new Set().add('foo')
  }, {
    comparator: 'is',
    expectedResult: 'foo',
    expectedString: 'foo',
    key: 'string',
    value: 'foo'
  }, {
    comparator: 'is',
    expectedResult: 'Symbol(foo)',
    expectedString: 'Symbol(foo)',
    key: 'symbol',
    value: Symbol('foo')
  }, {
    comparator: 'deepEqual',
    expectedResult: '[1,2,3]',
    expectedString: '[1,2,3]',
    key: 'uint8Array',
    value: new Uint8Array(INTEGER_ARRAY)
  }, {
    comparator: 'deepEqual',
    expectedResult: '[1,2,3]',
    expectedString: '[1,2,3]',
    key: 'uint8ClampedArray',
    value: new Uint8ClampedArray(INTEGER_ARRAY)
  }, {
    comparator: 'deepEqual',
    expectedResult: '[1,2,3]',
    expectedString: '[1,2,3]',
    key: 'uint16Array',
    value: new Uint16Array(INTEGER_ARRAY)
  }, {
    comparator: 'deepEqual',
    expectedResult: '[1,2,3]',
    expectedString: '[1,2,3]',
    key: 'uint32Array',
    value: new Uint32Array(INTEGER_ARRAY)
  }, {
    comparator: 'is',
    expectedResult: 'undefined',
    expectedString: 'undefined',
    key: 'undefined',
    value: undefined
  }, {
    comparator: 'is',
    expectedResult: 'WeakMap NOT_ENUMERABLE',
    expectedString: 'WeakMap NOT_ENUMERABLE',
    key: 'weakMap',
    value: new WeakMap().set({}, 'foo')
  }, {
    comparator: 'is',
    expectedResult: 'WeakSet NOT_ENUMERABLE',
    expectedString: 'WeakSet NOT_ENUMERABLE',
    key: 'weakSet',
    value: new WeakSet().add({})
  }
];

test('if replacer provides correct values for different object types', (t) => {
  TEST_VALUES.forEach(({comparator, expectedResult, key, value}) => {
    t[comparator](replacer(key, value), expectedResult);
  });
});

test('if toString uses JSON.stringify with replacer correctly, and falls back to prune when needed', sinon.test(function(t) {
  const spy = this.spy(json, 'prune');

  TEST_VALUES.forEach(({comparator, expectedString, key, value}) => {
    if (key !== 'generator') {
      t[comparator](toString(value), expectedString);
    }
  });

  toString(window);

  t.true(spy.calledOnce);
}));

test.todo('Figure out how to compare generators and their string values');