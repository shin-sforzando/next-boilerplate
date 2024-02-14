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

- [x] Rome -> Biome
- [x] Stylelint
- [x] CSS Framework
  - [x] `globals.css`
- [ ] Storybook
  - [x] Chromatic
  - [ ] Test
    - [ ] Coverage
- [x] git-cliff
- [x] Markuplint
- [x] Secretlint
- [ ] Unit Test
- [ ] E2E Test
  - [ ] Checkly

<!-- TOC -->

- [_Use this template_](#use-this-template)
- [ToDo](#todo)
- [Prerequisites](#prerequisites)
- [How to](#how-to)
  - [Prepare for Development](#prepare-for-development)
    - [Secret Files](#secret-files)
  - [Launch Dev Server](#launch-dev-server)
  - [Launch Storybook](#launch-storybook)
  - [Lint](#lint)
  - [Format](#format)
  - [Test](#test)
  - [Build](#build)
  - [Deploy](#deploy)
  - [Documenting](#documenting)
    - [CHANGELOG](#changelog)
- [Misc](#misc)
- [Notes](#notes)
  - [LICENSE](#license)
  - [Contributors](#contributors)

## Prerequisites

- [Volta](https://volta.sh) as _JS Tool Manager_
  - [Node.js](https://nodejs.org/) (Version 20.11.0 LTS or higher)
    - [Next.js](https://nextjs.org/) (Version 14 or higher)
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
    run-p test:*

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
  test:storybook
    test-storybook
  chromatic
    npx chromatic
```

### Prepare for Development

`npm install` to install dependencies.

#### Secret Files

`npm run secret:hide` to hide all secret files.

`npm run secret:reveal` to reveal all secret files.

### Launch Dev Server

`npm run dev` to launch development server on `http://0.0.0.0:3000/`.

### Launch Storybook

`npm run storybook` to launch Storybook on `http://0.0.0.0:6006/`.

### Lint

`npm run lint` to lint all.

### Format

`npm run format` to format all.

### Test

`npm run test` to test all.

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

## Notes

This repository is [Commitizen](https://commitizen.github.io/cz-cli/) friendly, following [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow).
See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### LICENSE

See [LICENSE](LICENSE).

### Contributors

- [sforzando LLC. and Inc.](https://sforzando.co.jp/)
  - [Shin'ichiro Suzuki](https://github.com/shin-sforzando)
