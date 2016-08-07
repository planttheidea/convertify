# convertify

A simple conversion tool from one object type to the next

#### Installation

```
$ npm i convertify --save
```

#### Usage

```javascript
// ES2015
import to from 'convertify';

// CommonJS
const to = require('convertify');

// script
const to = window.convertify;
```

Or you can bring in individual functions:
```javascript
// in this case toString, which is the same as to.string

// ES2015
import {
  toString
} from 'convertify';

// CommonJS
const toString = require('convertify').toString;

// script
const toString = window.convertify.toString;
```

#### Implementation

```javascript
const someObject = {
  foo: 'bar'
};

// you can use the default method
const map = to('map', someObject); // Map {'foo' => 'bar'}

// or the convenience methods
const array = to.array(map); // ['bar']
```

#### API

**to(convertTo: string, object: any)**

The standard method accepts two parameters, the first being a string of the object class you wnat to convert the object to, and the second being the object itself. The valid object classes you can convert to:
* `array`
* `boolean`
* `date`
* `error`
* `function`
* `generator`
* `map`
* `null`
* `number`
* `object`
* `promise`
* `regexp`
* `set`
* `string`
* `symbol`
* `undefined`

These values are either the string value you pass in as the first parameter to `to`, or the shorthand method name for that specific conversion:

```javascript
const stringifiedObject = to('string', object);

// is the same as

const alsoStringifiedObject = to.string(object);
```

The conversions themselves try to be smarter than the standard implicit conversions, so check out the [API](API.md) to learn more details about specific conversion results.
