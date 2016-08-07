# converity API

Below is the details regarding what kind of objects to expect when making conversions.

**Table of Contents**

* [Note](#note)
* [to.array](#toarray)
* [to.boolean](#toboolean)
* [to.date](#todate)
* [to.error](#toerror)
* [to.function](#tofunction)
* [to.generator](#togenerator)
* [to.map](#tomap)
* [to.null](#tonull)
* [to.number](#tonumber)
* [to.object](#toobject)
* [to.promise](#topromise)
* [to.regexp](#toregexp)
* [to.set](#toset)
* [to.string](#tostring)
* [to.symbol](#tosymbol)
* [to.undefined](#toundefined)

#### Note

if the object passed is the same object class as is attempting to convert to, the original object itself is returned

```javascript
const object = {foo: 'bar'};
const convertedObject = to.object(object);

console.assert(object === convertedObject); // true
```

#### to.array
(*toArray* when imported alone)

* if the object is a standard `Object`, or ES2015 `Map` / `Set`, an array of the values from the `key: value` pairs are returned
  * `to.array({foo: 'bar'}) => ['bar']`
  * `to.array(new Map().set('foo', 'bar')) => ['bar']`
  * `to.array(new Set().add('bar')) => ['bar']`
* if the object is a `String` and it represents a `JSON` object, a parsed value is returned
  * `to.array('{foo: \"bar\"}') => {foo: 'bar'}`
* in all other cases, the object is wrapped in an array
  * `to.array('foo') => ['foo']`

#### to.boolean
(*toBoolean* when imported alone)

* if the object is an `Array`, it returns based on the array having length
  * `to.boolean(['foo']) => true`
  * `to.boolean([]) => false`
* if the object is an `Object`, it returns based on the object having keys
  * `to.boolean({foo: 'bar}) => true`
  * `to.boolean({}) => false`
* if the objec is a `Map` / `Set`, it returns based on the object having size
  * `to.boolean(new Map().set('foo', 'bar')) => true`
  * `to.boolean(new Set().add('foo') => true`
  * `to.boolean(new Map()) => false`
  * `to.boolean(new Set()) => false`
* in all other cases, the object is implictly converted to a boolean
  * `to.boolean('foo') => true`
  * `to.boolean('') => false`

#### to.date
(*toDate* when imported alone)

* if the object is an `Array` or `Set`, it applies the values as arguments to the `Date` constructor
  * `to.date([2000, 0, 1]) => Sat Jan 01 2000 00:00:00 GMT-0500 (EST)`
  * `to.date(new Set().add(2000).add(0).add(1)) => Sat Jan 01 2000 00:00:00 GMT-0500 (EST)`
* if the object is an `Object` or `Map`, it looks for the keys and tries to map them to the arguments to the `Date` constructor
  * `to.date({year: 2000, month: 0, day: 1}) => Sat Jan 01 2000 00:00:00 GMT-0500 (EST)`
  * `to.date(new Map().set('year', 2000).set('month', 9).set('day', 1)) => Sat Jan 01 2000 00:00:00 GMT-0500 (EST)`
  * Valid keys are:
    * year
    * month
    * day
    * hour
    * minutes
    * seconds
    * milliseconds
* if the object is a `Boolean` or `Symbol`, an `Invalid Date` is returned
* If the object is `null`, `undefined`, or an empty `String`, a new date (as if no parameters were passed to the constructor) is returned
* in all other cases, the object is passed to the `Date` constructor directly

#### to.error
(*toError* when imported alone)

* in all cases, the object is stringified via the library's `toString` and that is applied as the message

#### to.function
(*toFunction* when imported alone)

* in all cases, the object passed is wrapped in an anonymous function

#### to.generator
(*toGenerator* when imported alone)

* if the object is an `Array` or `Set`, an anonymous generator that will yield each value in the array is returned
* if the object is an `Object` or `Map`, an anonymous generator that will yield each value from the `key: value` pairs is returned
* in all other cases, a generator that will yield the original object is returned

```javascript
const array = ['foo', 'bar'];
const object = {foo: 'bar', bar: 'baz'}
const string = 'foo';

const arrayGenerator = to.generator(array);

console.log(arrayGenerator.next()); // {value: 'foo', done: false}

const objectGenerator = to.generator(object);

console.log(objectGenerator.next()); // {value: 'foo', done: false}

const stringGenerator = to.generator(string);

console.log(stringGenerator.next()); // {value: 'foo', done: true}
```

#### to.map
(*toMap* when imported alone)

* if the object is an `Array` or `Set`, the indices of the values are used when creating the `key => value` pairs
  * `to.map(['foo', 'bar']) => {0 => 'foo', 1 => 'bar'}`
  * `to.map(new Set().add('foo').add('bar')) => {0 => 'foo', 1 => 'bar'}`
* if the object is an `Object`, the same `key: value` pairs are used
  * `to.map({foo: 'bar}) => {'foo' => 'bar'}`
* in all other cases, the object is given as the value for the key `0`
  * `to.map('foo') => {0 => 'foo'}`

#### to.null
(*toNull* when imported alone)

* in all cases, the value returned is `null`

#### to.number
(*toNumber* when imported alone)

* if the object passed is a `Boolean`, the binary values are returned
  * `to.number(true) => 1`
  * `to.number(false) => 0`
* if the object passed is a `Date`, the `valueOf` is returned
  * `to.number(new Date(2000, 0, 1)) => 946702800000`
* if the object passed is `null` or `undefined`, `0` is returned
* if the object passed is an `Array`, the length is returned
  * `to.number(['foo', 'bar']) => 2`
* if the object passed is an `Object`, the number of keys is returned
  * `to.number({foo: 'bar'}) => 1`
* if the object passed is a `Map` or `Set`, the size is returned
  * `to.number(new Map().set('foo', 'bar')) => 1`
  * `to.number(new Set()) => 0`
* if the object passed is a `String`, then several things can happen:
  * if it is a numeric string, it returns the parsed value
    * `to.number('123') => 123`
  * if it is an empty string, it returns `0`
  * if it is a string of words representing numbers, the numeric value described is returned
    * `to.number('three hundred twenty four') => 324`
    * `to.number('ten billion six hundred forty three thousand eight hundred and four') => 10000643804`
* in all other cases, `NaN` is returned

#### to.object
(*toObject* when imported alone)

* if the object is an `Array` or `Set`, indices are used as keys in the `key: value` pairs
  * `to.object(['foo', 'bar']) => {'0': 'foo', '1': 'bar'}`
* if the object is a `Map`, the `key: value` pairs are translated directly (if the key is not a string, it is stringified via the library's `toString`
  * `to.object(new Map().set('foo', 'bar')) => {'foo': 'bar'}`
  * `to.object(new Map().set({foo: 'bar'}, 'baz') => {'{"foo":"bar"}': 'baz'}`
* if the object is a `String` and in the format of valid `JSON`, the parsed `JSON` is returned
  * `to.object('{"foo":"bar"}') => {foo: 'bar'}`
* in all other cases, the object is used as a value for key `0`
  * `to.object('foo') => {'0': 'foo'}`

#### to.promise
(*toPromise* when imported alone)

* in all cases, the object is wrapped in `Promise.resolve()`

#### to.regexp
(*toRegExp* when imported alone)

* if the object is a `String` then one of two things happens:
  * if the string is in the format of a RegExp (starts and ends with `/`) then the leading / trailing slashes are stripped and the value is used
    * `to.regexp('/\(foo\)/') => /\(foo\)/`
  * otherwise, the string is used directly
    * `to.regexp('foo') => /foo/`
* in all other cases, the object is stringified via the library's `toString` and used directly
  * `to.regexp({foo: 'bar'}) => /{"foo":"bar"}/`

#### to.set
(*toSet* when imported alone)

* if the object is an `Array`, then the values are applied directly to the constructor
 * `to.set(['foo', 'bar']) => {'foo', 'bar'}`
* if the object is an `Object` or `Map`, then the values from the `key: value` pairs are used
 * `to.set({foo: 'bar'}) => {'bar'}`
 * `to.set(new Map().set('foo', 'bar')) => {'bar}`
* in all other cases, the object is saved as the first value in the set
 * `to.set('foo') => {'foo'}`

#### to.string
(*toString* when imported alone)

* if the object is an `Arguments`, `Array`, `Object`, `Number`, or `String`, then `JSON.stringify` is applied directly
 * `to.string(['foo', 'bar']) => '["foo","bar"]'`
 * `to.string({foo: 'bar'}) => '{"foo":"bar"}'`
 * `to.string(1) => '1'`
 * `to.string('foo') => 'foo'`
* if the object is an `Error` or `RegExp`, or is `null` or `undefined`, implict string conversion is used
 * `to.string(new Error('foo')) => 'Error: foo'`
 * `to.string(/foo/) => '/foo/'`
 * `to.string(null) => 'null'`
 * `to.string(undefined) => 'undefined'`
* if the object is a `Date`, then the `toISOString` method is used
 * `to.string(new Date(2000, 0, 1)) => 'Sat Jan 01 2000 00:00:00 GMT-0500 (EST)'`
* if the object is a `Function`, `GeneratorFunction`, or `Symbol`, the native `toString` method is used
 * `to.string(function foo() {}) => 'function foo() {}'`
 * `to.string(Symbol('foo')) => 'Symbol(foo)'`
* if the object is a `Promise`, `WeakMap`, or `WeakSet`, the object class is returned
 * this is because the values of these objects are impossible to see and therefore uniquely stringify
 * `to.string(Promise.resolve(1)) => 'Promise'`
 * `to.string(new WeakMap()) => 'WeakMap'`
 * `to.string(new WeakSet()) => 'WeakSet'`
* if the object is a `Map`, an object of `key: value` pairs is stringified as `JSON`
 * `to.string(new Map().set({foo: 'bar'}, 'baz')) => '{{"foo":"bar"}:"baz}'`
* if the object is a `Set`, an array of values is stringified as `JSON`
 * `to.string(new Set().add('foo').add('bar')) => '["foo","bar"]'`
* if the object is an `ArrayBuffer`, a `Uint16Array` is created from the buffer and converted to charCodes
 * `to.string(new Uint16Array([1,2,3]).buffer) => '\\u0001\\u0002\\u0003'`
* if the object is a `DataView`, the buffer from it is applied with the same technique as `ArrayBuffer`
* if the object is a TypedArray (`Float32Array`, `Int16Array`, `Uint8Array`, etc), the native `join` method is used
 * `to.string(new Uint8Array([1,2,3])) => '[1,2,3]'`
* if the object is the `Math` object, an object of `key: value` pairs for its constants is used
 * `to.string(Math) => '{"E":2.718281828459045,"LN2":0.6931471805599453,"LN10":2.302585092994046,"LOG2E":1.4426950408889634,"LOG10E":0.4342944819032518,"PI":3.141592653589793,"SQRT1_2":0.7071067811865476,"SQRT2":1.4142135623730951}'`
* if the object is an `HTMLElement` (or a subset, such as `HTMLDivElement`), then is `textContent is used

```javascript
const div = document.createElement('div');

div.innerHTML = '<span>Hello</span>';

console.log(to.string(div)); // Hello
```
* in all other cases, the object is stringified as `JSON`

#### to.symbol
(*toSymbol* when imported alone)

* if the object is a string, it is applied to the symbol directly
 * `to.symbol('foo') => Symbol(foo)`
* in all other cases, the object is stringified using the library's `toString` method and applied to the symbol
 * `to.symbol(['foo', 'bar']) => Symbol(["foo","bar"])`

#### to.undefined
(*toUndefined* when imported alone)

* in all cases, the value returned is `undefined`
