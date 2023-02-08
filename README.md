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
  - [ ] Set `xxxx` for xxxx
- [ ] Integrate with Slack: `/github subscribe shin-sforzando/next-boilerplate reviews comments branches commits:*`
- [ ] **Delete this section!**

## ToDo

- [ ] Stylelint
- [ ] Mantine
- [ ] Storybook

<!-- TOC -->

- [_Use this template_](#use-this-template)
- [ToDo](#todo)
- [Prerequisites](#prerequisites)
- [How to](#how-to)
  - [Develop](#develop)
  - [Launch Dev Server](#launch-dev-server)
  - [Lint](#lint)
  - [Format](#format)
  - [Build](#build)
  - [Deploy](#deploy)
- [Misc](#misc)
- [Notes](#notes)
  - [LICENSE](#license)
  - [Contributors](#contributors)

## Prerequisites

- [Volta](https://volta.sh) as _JS Tool Manager_
  - [Node.js](https://nodejs.org/) (Version 18 LTS or higher)
    - [Next.js](https://nextjs.org) (Version 13 or higher)
    - [Rome](https://rome.tools) as _Script Linter and Formatter_
- [git-secret](https://git-secret.io/) as _Secret File Manager_
- [direnv](https://direnv.net) as _`.env` Loader_

## How to

```shell
$ npm run
Lifecycle scripts included in next-boilerplate@0.0.0:
  start
    next start

available via `npm run-script`:
  reinstall
    node -e 'fs.rmSync(`node_modules`, {recursive:true, force:true})' && npm install
  dev
    next dev
  build
    next build
  lint
    rome check --apply .
  format
    rome format --write .
```

### Develop

`npm install` to install dependencies.

### Launch Dev Server

`npm run dev` to launch development server.

### Lint

`npm run lint` to lint all scripts.

### Format

`npm run format` to format all scripts.

### Build

(T. B. D.)

### Deploy

If it is linked to [Vercel](https://vercel.com/), it will be deployed automatically with each Push.

## Misc

## Notes

This repository is [Commitizen](https://commitizen.github.io/cz-cli/) friendly, following [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow).
See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### LICENSE

See [LICENSE](LICENSE).

### Contributors

- [sforzando LLC. and Inc.](https://sforzando.co.jp/)
  - [Shin'ichiro Suzuki](https://github.com/shin-sforzando)
