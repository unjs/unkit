# unkit

> UnJS standard library

This package aggregates a collection of useful packages from [unjs](https://github.com/unjs) for ease of use.

## 💿 Install

Install using npm or yarn:

```bash
npm i unkit
# or
yarn add unkit
```

Import a subpath:

```js
// ESM / Typescript
import { pascalCase  } from 'unkit/string'

// CommonJS
const { pascalCase } = require('unkit/string')
```

**💡 Note:** Please **always** explicitly install `unkit` dependency even if it is already installed by another package in `node_modules`.

Check [⬆️ Upgrading Guide](#%EF%B8%8F-upgrading) for upgrading versions.

## 📙 Libraries

Libraries are exposed via semantic subpaths. Refer to each package documentation for available utilities.

Subpath | Packages
--------|-------------
[`unkit/env`](#env)  | [unjs/std-env](https://github.com/unjs/std-env)
[`unkit/esm`](#esm)   | [unjs/mlly](https://github.com/unjs/mlly)
[`unkit/fetch`](#fetch)  | [unjs/ofetch](https://github.com/unjs/ofetch)
[`unkit/http`](#http)  | [unjs/h3](https://github.com/unjs/h3), [unjs/is-https](https://github.com/unjs/is-https)
[`unkit/object`](#object)  | [unjs/defu](https://github.com/unjs/defu), [unjs/destr](https://github.com/unjs/destr)
[`unkit/promise`](#promise)  | [unjs/items-promise](https://github.com/unjs/items-promise)
[`unkit/string`](#string)  | [unjs/scule](https://github.com/unjs/scule)
[`unkit/url`](#url)  | [unjs/ufo](https://github.com/unjs/ufo)

### `/env`

> Useful environment information of running code.

👉 See [unjs/std-env](https://github.com/unjs/std-env) for more information.

```js
// ESM / Typescript
import {  production, dev } from 'unkit/env'

// CommonJS
const { production, dev } = require('unkit/env')
```

### `/esm`

> Missing ECMaScript module utils for Node.js

👉 See [unjs/mlly](https://github.com/unjs/mlly) for more information.

```js
// ESM / Typescript
import { createCommonJS, resolve } from 'unkit/esm'
```

### `/fetch`

> A better fetch API. Works on node, browser, and workers

👉 See [unjs/ofetch](https://github.com/unjs/ofetch) for more information.

```js
// ESM / Typescript
import { $fetch } from 'unkit/fetch'

// CommonJS
const { $fetch } = require('unkit/fetch')
```

### `/http`

> Helpers for creating HTTP servers

👉 See [unjs/h3](https://github.com/unjs/h3) and [unjs/is-https](https://github.com/unjs/is-https) for more information.

```js
// ESM / Typescript
import { useBody, isHTTPS } from 'unkit/http'

// CommonJS
const { useBody, isHTTPS } = require('unkit/http')
```

### `/object`

> Utilities for working with objects and serialization

👉 See [unjs/defu](https://github.com/unjs/defu) and [unjs/destr](https://github.com/unjs/destr) for more information.

```js
// ESM / Typescript
import { defaults, parseJSON } from 'unkit/object'

// CommonJS
const { defaults, parseJSON } = require('unkit/object')
```

### `/promise`

> Promise utils

👉 See [unjs/items-promise](https://github.com/unjs/items-promise) for more information.

```js
// ESM / Typescript
import { serial, parallel } from 'unkit/promise'

// CommonJS
const { serial, parallel } = require('unkit/promise')
```

### `/string`

> String manipulation utils

👉 See [unjs/scule](https://github.com/unjs/scule) for more information.

```js
// ESM / Typescript
import { snakeCase, upperFirst } from 'unkit/string'

// CommonJS
const { snakeCase, upperFirst } = require('unkit/string')
```

### `/url`

> Utilities to work with URLs

👉 See [unjs/ufo](https://github.com/unjs/ufo) for more information.

```js
// ESM / Typescript
import { joinURL, withQuery } from 'unkit/url'

// CommonJS
const { joinURL, withQuery } = require('unkit/url')
```

## ⬆️ Upgrading

Unkit uses npm dependencies with [caret range](https://nodesource.com/blog/semver-tilde-and-caret#caretflexibleminorandpatch),
 this means when you freshly install `unkit`, the latest features and fixes of sub-dependencies are installed. For upgrading we have two choices:

 - Use `npm up unkit` or `yarn upgrade unkit`: This will update the lock-file with minimal risk to the latest versions.
 - Remove `package-lock.json` or `yarn.lock` and reinstall dependencies with `npm i` or `yarn` this will update all nested dependencies to the latest.

## License

[MIT](./LICENSE)

