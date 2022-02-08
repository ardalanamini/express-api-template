# Express.js API Template

[![Test][TEST_WORKFLOW_BADGE]][TEST_WORKFLOW_URL]

This is a starter _Express.js_[^EXPRESS_JS_FOOTNOTE] API Template, helping to get past the routine of starting a new
project from scratch again and again!

> This template is still in WIP phase!

## Table of Contents

- [Prerequisites](#prerequisites)
- [Usage](#usage)
  - [Build](#build)
  - [Code Style](#code-style)
  - [Config](#config)
    - [Common](#common-config)
    - [Server](#server-config)
  - [Start](#start)
- [Directory Layout](#directory-layout)
- [Versioning](#versioning)

## Prerequisites

- _Node.js_[^NODE_JS_FOOTNOTE] (`v16.13.2` or higher)

## Usage

First install the dependencies:

```shell
npm i
```

### Build

Build the project. (Using _TypeScript_[^TYPESCRIPT_FOOTNOTE])

```shell
npm run build
```

Watch for changes and rebuild automatically.

```shell
npm run build:watch
```

### Code Style

Check for code style issues in the project. (Using _ESLint_[^ESLINT_FOOTNOTE])

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

|    Name    |               Type                |    Default    |                                                Description                                                |
|:----------:|:---------------------------------:|:-------------:|:---------------------------------------------------------------------------------------------------------:|
| `NODE_ENV` | `production`,`development`,`test` | `development` | _Node.js_[^NODE_JS_FOOTNOTE] environment (`test` will be provided by the testing framework automatically) |

#### Server Config

| Name              |  Type   |   Default   |                    Description                     |
|-------------------|:-------:|:-----------:|:--------------------------------------------------:|
| `SERVER_HOSTNAME` | string  | `localhost` | _Express.js_[^EXPRESS_JS_FOOTNOTE] server hostname |
| `SERVER_PORT`     | integer |   `3000`    |   _Express.js_[^EXPRESS_JS_FOOTNOTE] server port   |

### Start

Start the API.

```shell
npm start
```

Watch for changes and restart automatically.

```shell
npm run start:watch
```

## Directory Layout

```
.
└── src              # Source files
    ├── config       # Configuration values
    ├── constants    # Constants
    ├── controllers  # Express.js controllers
    └── lib          # Libraries
```

## Versioning

We use _SemVer_[^SEMVER_FOOTNOTE] for versioning. For the versions & changelogs available, see the releases on this
repository.

<!-- Footnotes -->

[^EXPRESS_JS_FOOTNOTE]: [Express.js][EXPRESS_JS_WEBSITE]

[^NODE_JS_FOOTNOTE]: [Node.js][NODE_JS_WEBSITE]

[^TYPESCRIPT_FOOTNOTE]: [TypeScript][TYPESCRIPT_WEBSITE]

[^ESLINT_FOOTNOTE]: [ESLint][ESLINT_WEBSITE]

[^SEMVER_FOOTNOTE]: [SemVer][SEMVER_WEBSITE]

<!-- Links -->

[TEST_WORKFLOW_URL]: https://github.com/ardalanamini/express-api-template/actions/workflows/test.yml

[TEST_WORKFLOW_BADGE]: https://github.com/ardalanamini/express-api-template/actions/workflows/test.yml/badge.svg

[NODE_JS_WEBSITE]: https://nodejs.org/en

[EXPRESS_JS_WEBSITE]: https://expressjs.com

[TYPESCRIPT_WEBSITE]: https://www.typescriptlang.org

[ESLINT_WEBSITE]: https://eslint.org

[SEMVER_WEBSITE]: http://semver.org
