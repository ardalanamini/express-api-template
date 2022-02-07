# Express.js API Template

[![Test][TEST_WORKFLOW_BADGE]][TEST_WORKFLOW_URL]

This is a starter [Express.js][EXPRESS_JS_WEBSITE] API Template, helping to get past the routine of starting a new
project from scratch again and again!

## Table of Contents

- [Prerequisites](#prerequisites)
- [Usage](#usage)
  - [Build](#build)
  - [Lint](#lint)
  - [Config](#config)
    - [Common](#common-config)
    - [Server](#server-config)
- [Versioning](#versioning)
- [References](#references)

## Prerequisites

- [Node.js][NODE_JS_WEBSITE] (`v16.13.2` or higher)

## Usage

First install the dependencies:

```shell
npm i
```

### Build

Build the project. (Using [`TypeScript`][TYPESCRIPT_WEBSITE])

```shell
npm run build
```

Watch for changes and rebuild automatically.

```shell
npm run build:watch
```

### Lint

Check for code style issues in the project. (Using [`ESLint`][ESLINT_WEBSITE])

```shell
npm run lint
```

Fix code style issues in the project.

```shell
npm run lint:fix
```

### Config

First create the `.env` file:

```shell
cp .env.example .env
```

#### Common Config

|    Name    |               Type                |    Default    |                                               Description                                               |
|:----------:|:---------------------------------:|:-------------:|:-------------------------------------------------------------------------------------------------------:|
| `NODE_ENV` | `production`,`development`,`test` | `development` | [Node.js][NODE_JS_WEBSITE] environment (`test` will be provided by the testing framework automatically) |

#### Server Config

| Name              |  Type   |   Default   |                   Description                    |
|-------------------|:-------:|:-----------:|:------------------------------------------------:|
| `SERVER_HOSTNAME` | string  | `localhost` | [Express.js][EXPRESS_JS_WEBSITE] server hostname |
| `SERVER_PORT`     | integer |   `3000`    |   [Express.js][EXPRESS_JS_WEBSITE] server port   |

## Versioning

We use [SemVer][SEMVER_WEBSITE] for versioning. For the versions & changelogs available, see the releases on this
repository.

## References

- [Node.js][NODE_JS_WEBSITE]
- [Express.js][EXPRESS_JS_WEBSITE]
- [TypeScript][TYPESCRIPT_WEBSITE]
- [ESLint][ESLINT_WEBSITE]
- [SemVer][SEMVER_WEBSITE]

<!-- Links -->

[TEST_WORKFLOW_URL]: https://github.com/ardalanamini/express-api-template/actions/workflows/test.yml

[TEST_WORKFLOW_BADGE]: https://github.com/ardalanamini/express-api-template/actions/workflows/test.yml/badge.svg

[NODE_JS_WEBSITE]: https://nodejs.org/en

[EXPRESS_JS_WEBSITE]: https://expressjs.com

[TYPESCRIPT_WEBSITE]: https://www.typescriptlang.org

[ESLINT_WEBSITE]: https://eslint.org

[SEMVER_WEBSITE]: http://semver.org
