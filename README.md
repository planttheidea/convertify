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

#### Basic implementation

```javascript
const someObject = {
  foo: 'bar'
};

const map = to('map', someObject); // Map {'foo' => 'bar'}
const array = to('array', map); // ['bar']
const bool = to('boolean', array); //true
```
