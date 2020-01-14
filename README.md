# generator-tinymce-plugin [![Coverage Status](https://coveralls.io/repos/github/panhezeng/generator-tinymce-plugin/badge.svg?branch=master)](https://coveralls.io/github/panhezeng/generator-tinymce-plugin?branch=master)[![Build Status](https://travis-ci.org/panhezeng/generator-tinymce-plugin.svg?branch=master)](https://travis-ci.org/panhezeng/generator-tinymce-plugin)[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![NPM](https://nodei.co/npm/@panhezeng/generator-tinymce-plugin.png?compact=true)](https://nodei.co/npm/@panhezeng/generator-tinymce-plugin/)

> tinymce plugin scaffolding

## Installation

First, install [Yeoman](https://yeoman.io) and generator-tinymce-plugin using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

### From GitHub

To install a pre-release version:

```bash
npm i -g yo
npm i -g git://github.com/panhezeng/generator-tinymce-plugin.git
```

### Official release

To install a version published to npm:

```bash
npm i -g yo
npm i -g @panhezeng/generator-tinymce-plugin
```

### From Source

Alternatively, if you have cloned this repo from GitHub. You can symlink your local clone into your global node environment. This is particularly useful during development. From inside the folder with the cloned repo:

```bash
npm install -g yo
npm i
npm link
```

## Using the Generator

Then generate your new project: Create a new project folder and navigate to it in you CLI.

```bash
mkdir myApp
cd myApp
```

Then run the generator. If you installed from source or GitHub,

```bash
yo tinymce-plugin
```

or if you installed from npm:

```
yo @panhezeng/tinymce-plugin
```

## Development

- [Creating a yeoman generator](https://yeoman.io/authoring/)
- [prompt question descriptor objects](https://github.com/SBoudrias/Inquirer.js/#question)
- [child_process_child_process_spawn_command_args_options](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)
- [shelljs cheatsheet](https://devhints.io/shelljs)
- [semantic-release-cli setup](https://semantic-release.gitbook.io/semantic-release/usage/getting-started)

### test

`npm link`比`npm run test`更好