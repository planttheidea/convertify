# converity API

Below is the details regarding what kind of objects to expect when making conversions.

**Table of Contents**

* [Note](#note)
* [to.array](#toarray)
* [to.boolean](#toboolean)
* [to.date](#todate)
* [to.error](#toerror)

#### Note

if the object passed is the same object class as is attempting to convert to, the original object itself is returned

```javascript
const object = {foo: 'bar'};
const convertedObject = to.object(object);

console.assert(object === convertedObject); // true
```

#### to.array

* if the object is a standard `Object`, or ES2015 `Map` / `Set`, an array of the values from the `key: value` pairs are returned
  * `to.array({foo: 'bar'}) => ['bar']`
  * `to.array(new Map().set('foo', 'bar')) => ['bar']`
  * `to.array(new Set().add('bar')) => ['bar']`
* if the object is a `String` and it represents a `JSON` object, a parsed value is returned
  * `to.array('{foo: \"bar\"}') => {foo: 'bar'}`
* in all other cases, the object is wrapped in an array
  * `to.array('foo') => ['foo']`

#### toBoolean

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

#### toDate

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
* if the object is a `Boolean` or `Symbol`,an `Invalid Date` is returned
* If the object is `null`, `undefined`, or an empty `String`, a new date (as if no parameters were passed to the constructor) is returned
* in all other cases, the object is passed to the `Date` constructor directly

#### toError

* in all cases, the object is stringified via the library's `toString` and that is applied as the message

**toFunction**

* in all cases, the object passed is wrapped in an anonymous function

**toGenerator**

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

**toMap**

* if the object is an `Array` or `Set`, the indices of the values are used when creating the `key => value` pairs
  * `to.map(['foo', 'bar']) => {0 => 'foo', 1 => 'bar'}`
  * `to.map(new Set().add('foo').add('bar')) => {0 => 'foo', 1 => 'bar'}`
* if the object is an `Object`, the same `key: value` pairs are used
  * `to.map({foo: 'bar}) => {'foo' => 'bar'}`
* in all other cases, the object is given as the value for the key `0`
  * `to.map('foo') => {0 => 'foo'}`

**toNull**

* in all cases, the value returned is `null`

**toNumber**

* if the object passed is a `Boolean`, the binary values are returned
  * `to.number(true) => 1`
  * `to.number(false) => 0`
* if the object passed is a `Date`, the `valueOf` is returned
  * `to.number(new Date([2000, 0, 1])) => 946702800000`
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
  * if it is an empty string, it returns `9`
  * if it is a string of words representing numbers, the numeric value described is returned
    * `to.number('three hundred twenty four') => 324`
    * `to.number('ten billion six hundred forty three thousand eight hundred and four') => 10000643804`
* in all other cases, `NaN` is returned

**toObject**

* if the object is an `Array` or `Set`, indices are used as keys in the `key: value` pairs
  * `to.object(['foo', 'bar']) => {'0': 'foo', '1': 'bar'}`
* if the object is a `Map`, the `key: value` pairs are translated directly (if the key is not a string, it is stringified via the library's `toString`
  * `to.object(new Map().set('foo', 'bar')) => {'foo': 'bar'}`
  * `to.object(new Map().set({foo: 'bar'}, 'baz') => {'{"foo":"bar"}': 'baz'}`
* if the object is a `String` and in the format of valid `JSON`, the parsed `JSON` is returned
  * `to.object('{"foo":"bar"}') => {foo: 'bar'}`
* in all other cases, the object is used as a value for key `0`
  * `to.object('foo') => {'0': 'foo'}`

**toPromise**

* in all cases, the object is wrapped in `Promise.resolve()`

**toRegExp**

* if the object is a `String` then one of two things happens:
  * if the string is in the format of a RegExp (starts and ends with `/`) then the leading / trailing slashes are stripped and the value is used
    * `to.regexp('/\(foo\)/') => /\(foo\)/`
  * otherwise, the string is used directly
    * `to.regexp('foo') => /foo/`
* in all other cases, the object is stringified via the library's `toString` and used directly
  * `to.regexp({foo: 'bar'}) => /{"foo":"bar"}/`

**toSet**

