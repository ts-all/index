# @ts-all/index
> A set of utilities for [TypeScript](https://typescriptlang.org) projects

## Usage

```shell
$ npm install @ts-all/index
```

```typescript
import { getRandomNum } from '@ts-all/index';

// outputs a random number in range of 9~99
console.log(getRandomNum(9, 99));
```

```shell
# add the flag to make node find the esmodules
$ node --es-module-specifier-resolution=node ./dist/app.js
```
