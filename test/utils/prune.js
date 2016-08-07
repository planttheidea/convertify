import test from 'ava';

import json from '../../src/utils/prune';

test('if prune handles recursive objects correctly', (t) => {
  const a = {
    foo: 'bar'
  };
  const b = {
    a
  };

  a.b = b;

  const expectedString = '{"foo":"bar","b":{"a":@@Recursive - {foo,b}}}';

  t.is(json.prune(a), expectedString);
});