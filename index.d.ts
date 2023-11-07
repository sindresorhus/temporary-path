/**
Get a random temporary path.

The path can be used for either a file or directory.

@example
```
import temporaryPath from 'temporary-path';

temporaryPath();
//=> '/private/var/folders/65/kgp6v1_n67z4f4smky78zrgw0000gn/T/46dac20f-b104-42f0-b667-fbeabed3ac31'
```
*/
export default function temporaryPath(): string;
