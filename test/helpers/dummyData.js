export const ARRAY = [
  'foo',
  'bar'
];
export const BOOLEAN = true;
export const DATE = new Date();
export const ERROR = new Error('foo');
export const FUNCTION = (foo) => {
  return foo;
};
export const GENERATOR = function* (foo) {
  yield foo;
};
export const MAP = new Map().set('foo', 'bar').set('bar', 'baz');
export const NULL = null;
export const NUMBER = 123;
export const OBJECT = {
  foo: 'bar',
  bar: 'baz'
};
export const PROMISE = Promise.resolve('foo');
export const REGEXP = /foo/;
export const SET = new Set().add('foo').add('bar');
export const STRING = 'foo';
export const SYMBOL = Symbol('foo');
export const UNDEFINED = undefined;

export const EMPTY_ARRAY = [];
export const EMPTY_OBJECT = {};
export const EMPTY_MAP = new Map();
export const EMPTY_SET = new Set();
export const EMPTY_STRING = '';