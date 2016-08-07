import 'babel-polyfill';

import React from 'react';
import {
  render
} from 'react-dom';

import to from '../src';

const fooBar = {
  foo: {}
};

fooBar.foo = fooBar;

const fn = (blah) => {
  console.log('test', blah);
};

const array = [
  fooBar
];

array.push(array);

const num = 1;
const string = 'foo';

const testPerformance = (message, convertTo, object) => {
  const length = 1000;

  let index = -1;

  const start = Date.now();

  while (++index < length) {
    to(convertTo, object);
  }

  console.log(`${message} took ${Date.now() - start} milliseconds to do ${length} conversions.`);
};

const timeAction = (message, convertTo, object) => {
  const fullMessage = `${message} to ${convertTo}`;

  let convertedObject;

  console.group(fullMessage);

  console.time(fullMessage);
  convertedObject = to(convertTo, object);
  console.timeEnd(fullMessage);

  console.log(convertedObject);

  // testPerformance(message, convertTo, object);

  console.groupEnd(fullMessage);
};

timeAction('object', 'string', {foo: 'bar'});
timeAction('recursive object', 'string', fooBar);
timeAction('function', 'string', fn);
timeAction('number', 'string', num);
timeAction('already string', 'string', string);
timeAction('array', 'string', ['foo', 'bar']);
timeAction('recursive array', 'string', array);
timeAction('undefined', 'string', undefined);
timeAction('null', 'string', null);
timeAction('date', 'string', new Date());


timeAction('already number', 'number', 1);
timeAction('numeric string', 'number', '1');
timeAction('simple string number (thirteen)', 'number', 'thirteen');
timeAction('complex string number (two billion three hundred sixty one million fifty three thousand and seven hundred ninety nine)', 'number', 'two billion three hundred sixty one million fifty three thousand and seven hundred ninety nine');
timeAction('array', 'number', ['foo', 'bar']);
timeAction('object', 'number', {foo: 'bar'});
timeAction('boolean (true)', 'number', true);
timeAction('boolean (false)', 'number', false);
timeAction('string boolean (true)', 'number', 'true');
timeAction('string boolean (false)', 'number', 'false');
timeAction('date', 'number', new Date());
timeAction('undefined', 'number', undefined);
timeAction('null', 'number', null);

timeAction('already array', 'array', ['foo', 'bar', 'baz']);
timeAction('object', 'array', {foo: 'bar', bar: 'baz'});
timeAction('string', 'array', 'foo');
timeAction('stringified array', 'array', JSON.stringify(['foo', 'bar']));
timeAction('number', 'array', 1);
timeAction('date', 'array', new Date());
timeAction('undefined', 'array', undefined);
timeAction('null', 'array', null);

timeAction('already boolean', 'boolean', true);
timeAction('string', 'boolean', 'stuff');
timeAction('empty string', 'boolean', '');
timeAction('object', 'boolean', {foo: 'bar'});
timeAction('empty object', 'boolean', {});
timeAction('number (true)', 'boolean', 1);
timeAction('number (false)', 'boolean', 0);
timeAction('date', 'boolean', new Date());
timeAction('undefined', 'boolean', undefined);
timeAction('null', 'boolean', null);

timeAction('already object', 'object', {foo: 'bar'});
timeAction('array', 'object', ['foo', 'bar']);
timeAction('number', 'object', 1);
timeAction('string', 'object', 'foo');
timeAction('map', 'object', new Map([['foo', 'bar'], ['bar', 'baz']]));
timeAction('set', 'object', new Set(['foo', 'bar', 'baz']));
timeAction('date', 'object', new Date());
timeAction('undefined', 'object', undefined);
timeAction('null', 'object', null);

timeAction('already date', 'date', new Date());
timeAction('array', 'date', [1985, 0, 1]);
timeAction('array of bad values', 'date', ['foo', 'bar', 'baz']);
timeAction('object', 'date', {
  day: 15,
  hour: 3,
  minutes: 4,
  month: 3,
  seconds: 14,
  year: 2013
});
timeAction('number', 'date', 1400000000000);
timeAction('good string', 'date', new Date().toISOString());
timeAction('bad string', 'date', 'not a date');
timeAction('map', 'date', new Map([['foo', 'bar'], ['bar', 'baz']]));
timeAction('set', 'date', new Set(['foo', 'bar', 'baz']));
timeAction('boolean', 'date', true);
timeAction('undefined', 'date', undefined);
timeAction('null', 'date', null);

timeAction('already error', 'error', new Error('test'));
timeAction('string', 'error', 'foo');
timeAction('number', 'error', 10);
timeAction('object', 'error', {foo: 'bar'});
timeAction('array', 'error', ['foo', 'bar']);
timeAction('function', 'error', () => {});
timeAction('map', 'error', new Map([['foo', 'bar'], ['bar', 'baz']]));
timeAction('set', 'error', new Set(['foo', 'bar', 'baz']));
timeAction('boolean', 'error', true);
timeAction('undefined', 'error', undefined);
timeAction('null', 'error', null);

timeAction('already function', 'function', function(foo) { return foo; });
timeAction('object', 'function', {foo: 'bar'});
timeAction('array', 'function', ['foo', 'bar']);
timeAction('map', 'function', new Map([['foo', 'bar'], ['bar', 'baz']]));
timeAction('set', 'function', new Set(['foo', 'bar', 'baz']));
timeAction('boolean', 'function', true);
timeAction('undefined', 'function', undefined);
timeAction('null', 'function', null);

timeAction('already generator', 'generator', function* (foo) { yield foo; });
timeAction('object', 'generator', {foo: 'bar'});
timeAction('array', 'generator', ['foo', 'bar']);
timeAction('map', 'generator', new Map([['foo', 'bar'], ['bar', 'baz']]));
timeAction('set', 'generator', new Set(['foo', 'bar', 'baz']));
timeAction('boolean', 'generator', true);
timeAction('undefined', 'generator', undefined);
timeAction('null', 'generator', null);

timeAction('already symbol', 'symbol', Symbol('foo'));
timeAction('string', 'symbol', 'foo');
timeAction('number', 'symbol', 1);
timeAction('array', 'symbol', ['foo', 'bar']);
timeAction('object', 'symbol', {foo: 'bar'});
timeAction('map', 'symbol', new Map([['foo', 'bar'], ['bar', 'baz']]));
timeAction('set', 'symbol', new Set(['foo', 'bar', 'baz']));
timeAction('boolean', 'symbol', true);
timeAction('undefined', 'symbol', undefined);
timeAction('null', 'symbol', null);

timeAction('already map', 'map', new Map());
timeAction('object', 'map', {foo: 'bar', bar: 'baz'});
timeAction('array', 'map', ['foo', 'bar', 'baz']);
timeAction('string', 'map', 'foo');
timeAction('number', 'map', 1);
timeAction('set', 'map', new Set(['foo', 'bar', 'baz']));
timeAction('boolean', 'map', true);
timeAction('undefined', 'map', undefined);
timeAction('null', 'map', null);

timeAction('already null', 'null', null);
timeAction('undefined', 'null', undefined);
timeAction('string', 'null', 'foo');
timeAction('number', 'null', 1);
timeAction('array', 'null', ['foo', 'bar']);
timeAction('object', 'null', {foo: 'bar'});
timeAction('map', 'null', new Map([['foo', 'bar'], ['bar', 'baz']]));
timeAction('set', 'null', new Set(['foo', 'bar', 'baz']));
timeAction('boolean', 'symbol', true);

const promise = new Promise((resolve) => {
  resolve(10);
});

timeAction('already promise', 'promise', promise);
timeAction('object', 'promise', {foo: 'bar', bar: 'baz'});
timeAction('array', 'promise', ['foo', 'bar', 'baz']);
timeAction('string', 'promise', 'foo');
timeAction('number', 'promise', 1);
timeAction('map', 'promise', new Map([['foo', 'bar'], ['bar', 'baz']]));
timeAction('set', 'promise', new Set(['foo', 'bar', 'baz']));
timeAction('boolean', 'promise', true);
timeAction('undefined', 'promise', undefined);
timeAction('null', 'promise', null);

timeAction('already regexp', 'regexp', /foo/);
timeAction('string', 'regexp', 'foo');
timeAction('regexp as string', 'regexp', '/foo/');
timeAction('number', 'regexp', '10');
timeAction('array', 'regexp', ['foo', 'bar']);
timeAction('object', 'regexp', {foo: 'bar'});
timeAction('map', 'regexp', new Map([['foo', 'bar'], ['bar', 'baz']]));
timeAction('set', 'regexp', new Set(['foo', 'bar', 'baz']));
timeAction('boolean', 'regexp', true);
timeAction('undefined', 'regexp', undefined);
timeAction('null', 'regexp', null);

timeAction('already set', 'set', new Set(['foo', 'bar', 'baz']));
timeAction('object', 'set', {foo: 'bar', bar: 'baz'});
timeAction('array', 'set', ['foo', 'bar', 'baz']);
timeAction('string', 'set', 'foo');
timeAction('number', 'set', 1);
timeAction('map', 'set', new Map([['foo', 'bar'], ['bar', 'baz']]));
timeAction('boolean', 'set', true);
timeAction('undefined', 'set', undefined);
timeAction('null', 'set', null);

timeAction('already undefined', 'undefined', undefined);
timeAction('null', 'undefined', undefined);
timeAction('string', 'undefined', 'foo');
timeAction('number', 'undefined', 1);
timeAction('array', 'undefined', ['foo', 'bar']);
timeAction('object', 'undefined', {foo: 'bar'});
timeAction('map', 'undefined', new Map([['foo', 'bar'], ['bar', 'baz']]));
timeAction('set', 'undefined', new Set(['foo', 'bar', 'baz']));
timeAction('boolean', 'undefined', true);

const App = () => {
  return (
    <div>
      App
    </div>
  );
};

const div = document.createElement('div');

div.id = 'app-container';

render((
  <App/>
), div);

document.body.appendChild(div);