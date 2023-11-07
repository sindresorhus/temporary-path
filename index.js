import path from 'node:path';
import {randomUUID} from 'node:crypto';
import temporaryDirectory from 'temp-dir';

export default function temporaryPath() {
	return path.join(temporaryDirectory, randomUUID());
}
