import test from 'ava';

import {
  forEach,
  isEncapsulatedBy,
  throwUnsupportedError
} from '../../src/utils/miscellaneous';

test('if forEach loops over things correctly', (t) => {
  const length = 10;
  const array = new Array(length);

  let index = 0;

  forEach(array, () => {
    index++;
  });

  t.is(index, length);
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