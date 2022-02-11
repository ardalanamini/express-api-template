# Express.js API Template

[![Test][TEST_WORKFLOW_BADGE]][TEST_WORKFLOW_URL]
[![CodeCov][CODECOV_BADGE]][CODECOV_URL]

This is a starter _Express.js_[^EXPRESS_JS_FOOTNOTE] API Template, helping to get past the routine of starting a new
project from scratch again and again!

> This template is still in WIP phase!

## Table of Contents

- [Prerequisites](#prerequisites)
- [Usage](#usage)
  - [Build](#build)
  - [Test](#test)
  - [Code Style](#code-style)
  - [Documents](#documents)
    - [API](#api-documents)
  - [Config](#config)
    - [Common](#common-config)
    - [Server](#server-config)
    - [Sentry](#sentry-config)
  - [Start](#start)
  - [Docker](#docker)[^DOCKER_FOOTNOTE]
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

### Test

Test the project. (Using _Jest_[^JEST_FOOTNOTE])

```shell
npm test
```

Test with code coverage report.

```shell
npm run test:coverage
```

Test in ci.

```shell
npm run test:ci
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

### Documents

#### API Documents

Generate the API documents to be served statically. (Using _Swagger_[^SWAGGER_FOOTNOTE])

```shell
npm run docs:swagger
```

Generate & serve the API documents. (The documents' server address will be printed in the terminal)

```shell
npm run docs:api
```

### Config

First create the `.env` file:

```shell
cp .env.example .env
```

#### Common Config

|     Name      |               Type                |    Default    |                                                Description                                                |
|:-------------:|:---------------------------------:|:-------------:|:---------------------------------------------------------------------------------------------------------:|
|  `NODE_ENV`   | `production`,`development`,`test` | `development` | _Node.js_[^NODE_JS_FOOTNOTE] environment (`test` will be provided by the testing framework automatically) |
| `RELEASE_ENV` |      `production`,`staging`       |   `staging`   |                                            Release environment                                            |

#### Server Config

| Name              |  Type   |   Default   |                    Description                     |
|-------------------|:-------:|:-----------:|:--------------------------------------------------:|
| `SERVER_HOSTNAME` | string  | `localhost` | _Express.js_[^EXPRESS_JS_FOOTNOTE] server hostname |
| `SERVER_PORT`     | integer |   `3000`    |   _Express.js_[^EXPRESS_JS_FOOTNOTE] server port   |

#### Sentry Config

| Name         |  Type  | Default |                 Description                  |
|--------------|:------:|:-------:|:--------------------------------------------:|
| `SENTRY_DSN` | string |    -    | _Sentry_[^SENTRY_FOOTNOTE] project DSN value |

### Start

Start the API.

```shell
npm start
```

Watch for changes and restart automatically.

```shell
npm run start:watch
```

### Docker

Start the services:

```shell
docker-compose up -d --build --remove-orphans
```

Stop the services:

```shell
docker-compose down
```

## Directory Layout

```
.
├── __tests__        # Test files
│   ├── controllers  # Express.js controller tests
│   └── jest         # Test utilities
├── docs             # Static documents
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

[^JEST_FOOTNOTE]: [Jest][JEST_WEBSITE]

[^ESLINT_FOOTNOTE]: [ESLint][ESLINT_WEBSITE]

[^SWAGGER_FOOTNOTE]: [Swagger][SWAGGER_WEBSITE]

[^SEMVER_FOOTNOTE]: [SemVer][SEMVER_WEBSITE]

[^DOCKER_FOOTNOTE]: [Docker][DOCKER_WEBSITE]

[^SENTRY_FOOTNOTE]: [Sentry][SENTRY_WEBSITE]

<!-- Links -->

[TEST_WORKFLOW_URL]: https://github.com/ardalanamini/express-api-template/actions/workflows/test.yml

[TEST_WORKFLOW_BADGE]: https://github.com/ardalanamini/express-api-template/actions/workflows/test.yml/badge.svg

[CODECOV_URL]: https://codecov.io/gh/ardalanamini/express-api-template

[CODECOV_BADGE]: https://codecov.io/gh/ardalanamini/express-api-template/branch/main/graph/badge.svg?token=PSHIW2SL1S

[NODE_JS_WEBSITE]: https://nodejs.org/en

[EXPRESS_JS_WEBSITE]: https://expressjs.com

[TYPESCRIPT_WEBSITE]: https://www.typescriptlang.org

[JEST_WEBSITE]: https://jestjs.io

[ESLINT_WEBSITE]: https://eslint.org

[SWAGGER_WEBSITE]: https://swagger.io

[SEMVER_WEBSITE]: http://semver.org

[DOCKER_WEBSITE]: https://www.docker.com

[SENTRY_WEBSITE]: https://sentry.io
