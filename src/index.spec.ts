
import test from 'ava';
import { foo } from './index';

test('foo', t => {
    t.is(foo, 'foo');
});
