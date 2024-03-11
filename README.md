# next-boilerplate

<!-- Badges -->

[![Last Commit](https://img.shields.io/github/last-commit/shin-sforzando/next-boilerplate)](https://github.com/shin-sforzando/next-boilerplate/graphs/commit-activity)
[![CI](https://github.com/shin-sforzando/next-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/shin-sforzando/next-boilerplate/actions/workflows/ci.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<!-- Screenshots -->

| ![Screenshot 1](https://placehold.jp/32/3d4070/ffffff/720x480.png?text=Screenshot%201) | ![Screenshot 2](https://placehold.jp/32/703d40/ffffff/720x480.png?text=Screenshot%202) |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
|                                      Screenshot 1                                      |                                      Screenshot 2                                      |

<!-- Synopsis -->

**next-boilerplate** is a template repository for Next.js.

## _Use this template_

- [ ] Replace the string `shin-sforzando` with the actual project owner
- [ ] Replace the string `next-boilerplate` with the actual project name
- [ ] Create an issue `#1` for screenshots
- [ ] `npm install` to install dependencies
- [ ] Check the [repository secrets](https://github.com/shin-sforzando/next-boilerplate/settings/secrets/actions)
  - [ ] Set `CHROMATIC_PROJECT_TOKEN` for Chromatic
- [ ] Integrate with Slack: `/github subscribe shin-sforzando/next-boilerplate reviews comments branches commits:*`
- [ ] **Delete this section!**

## ToDo

- [ ] Implement `src/app/loading.tsx`
- [ ] Upgrade Storybook to v8(RC)

<!-- TOC -->

- [_Use this template_](#use-this-template)
- [ToDo](#todo)
- [Prerequisites](#prerequisites)
- [How to](#how-to)
  - [Prepare for Development](#prepare-for-development)
    - [Update Dependencies](#update-dependencies)
    - [Secret Files](#secret-files)
  - [Code](#code)
    - [Logging w/ Axiom](#logging-w-axiom)
      - [Client Components](#client-components)
      - [Server Components](#server-components)
    - [Lint](#lint)
    - [Format](#format)
  - [Launch Dev Server](#launch-dev-server)
  - [Launch Storybook](#launch-storybook)
    - [Publish to Chromatic](#publish-to-chromatic)
  - [Test](#test)
    - [Unit \& Integration Tests w/ Vitest](#unit--integration-tests-w-vitest)
    - [E2E Tests w/ Storybook](#e2e-tests-w-storybook)
  - [Documentation](#documentation)
  - [Build](#build)
  - [Deploy](#deploy)
  - [Documenting](#documenting)
    - [CHANGELOG](#changelog)
- [Misc](#misc)
  - [CodeRabbit](#coderabbit)
- [Notes](#notes)
  - [LICENSE](#license)
  - [Contributors](#contributors)

## Prerequisites

- [Volta](https://volta.sh) as _JS Tool Manager_
  - [Node.js](https://nodejs.org/) (Version 21 or higher)
    - [Next.js](https://nextjs.org/) (Version 14 or higher)
    - [Axiom](https://axiom.co/) as _Logging Service_
    - [Vitest](https://vitest.dev/) as _Unit & Integration Test Framework_
    - [Storybook](https://storybook.js.org/) (Version 7.6) as _UI Catalogue and Interaction Test Framework_
    - [TypeDoc](https://typedoc.org/) as _TypeScript Document Generator_
    - [Biome](https://biomejs.dev/) as _Script Linter and Formatter_
    - [Husky](https://typicode.github.io/husky/) as _Git Hooks Manager_
- [git-secret](https://git-secret.io/) as _Secret File Manager_
- [direnv](https://direnv.net/) as _`.env` Loader_

## How to

```shell
$ npm run
Lifecycle scripts included in next-boilerplate@0.0.0:
  start
    next start
  test
    vitest --coverage

available via `npm run-script`:
  prepare
    husky
  secret:hide
    git secret hide -mvF
  secret:reveal
    git secret reveal -vf
  reinstall
    node -e 'fs.rmSync(`node_modules`, {recursive:true, force:true})' && npm install
  dev
    next dev
  build
    next build
  check
    run-p check:*
  lint
    run-p lint:*
  format
    run-p format:*
  check:script
    run-s lint:script format:script
  lint:script
    biome lint --apply .
  format:script
    biome format --write .
  lint:markup
    markuplint 'src/**/*.{html,tsx}'
  check:style
    run-s lint:style
  lint:style
    stylelint --fix 'src/**/*.{css,scss,less}'
  lint:secret
    secretlint --maskSecrets --secretlintignore .gitignore '**/*'
  storybook
    storybook dev -p 6006
  build-storybook
    storybook build
  test-storybook
    test-storybook --coverage && npx nyc report --reporter=lcov -t coverage/storybook --report-dir coverage/storybook
  chromatic
    npx chromatic
  doc
    typedoc
```

### Prepare for Development

`npm install` to install dependencies.

#### Update Dependencies

`npx npm-check-updates` to check the latest versions of all project dependencies.

#### Secret Files

`npm run secret:hide` to hide all secret files.

`npm run secret:reveal` to reveal all secret files.

### Code

#### Logging w/ Axiom

##### Client Components

```typescript
"use client";

import { useLogger } from "next-axiom";

export default function ClientComponent() {
  const log = useLogger();
  log.debug("User logged in", { userId: 42 });
  return <h1>Logged in</h1>;
}
```

##### Server Components

```typescript
import { Logger } from "next-axiom";

export default async function ServerComponent() {
  const log = new Logger();
  log.info("User logged in", { userId: 42 });
  // ...
  await log.flush();
  return <h1>Logged in</h1>;
}
```

#### Lint

`npm run lint` to lint all.

#### Format

`npm run format` to format all.

### Launch Dev Server

`npm run dev` to launch development server on `http://0.0.0.0:3000/`.

### Launch Storybook

`npm run storybook` to launch Storybook on `http://0.0.0.0:6006/`.

#### Publish to Chromatic

Automatically deployed to [Chromatic](https://www.chromatic.com/) via GitHub Actions.

`npm run chromatic` to deploy manually.

### Test

The testing policy of this templates is to use Vitest for unit & integration tests and Storybook for E2E tests.
All implementations related to logic should be unit tested, and all implementations related to look and feel should be E2E tested.

#### Unit & Integration Tests w/ Vitest

`npm run test` to execute unit & integration test via Vitest.

See [./src/lib/utils.ts](./src/lib/utils.ts) for an example test description.

Coverage reports will be exported to `coverage`.

#### E2E Tests w/ Storybook

`npm run test-storybook` to execute interaction test via Storybook.

See [./src/stories/app/page.stories.tsx](./src/stories/app/page.stories.tsx) for an example test description.

Storybook must be activated before running the test.
Coverage reports will be exported to `coverage/storybook`.

### Documentation

`npm run doc` to generate documents based on [Doc Comments](https://typedoc.org/guides/doccomments/).

### Build

`npm run build` to create optimized production build.

### Deploy

If it is linked to [Vercel](https://vercel.com/), it will be deployed automatically with each Push.

### Documenting

#### CHANGELOG

```shell
npx git-cliff --tag $(VERSION) --output CHANGELOG.md
git add CHANGELOG.md && git commit -m "docs: :notebook: update CHANGELOG.md"
git tag $(VERSION)
git push origin --tags
```

> [!NOTE]
> `$(VERSION)` must be in accordance with [semver](https://semver.org) like `vX.Y.Z`.

## Misc

### CodeRabbit

This repository integrates with CodeRabbit, an AI code review service.
The configurations can be found in `.coderabbit.yaml`.

## Notes

This repository is [Commitizen](https://commitizen.github.io/cz-cli/) friendly, following [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow).
See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### LICENSE

See [LICENSE](LICENSE).

### Contributors

- [sforzando LLC. and Inc.](https://sforzando.co.jp/)
  - [Shin'ichiro Suzuki](https://github.com/shin-sforzando)
