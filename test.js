import {tmpdir} from 'node:os';
import test from 'ava';
import temporaryPath from './index.js';

test('main', t => {
	t.true(temporaryPath().includes(tmpdir()));
});
