# <%= githubRepositoryName %> [![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= githubRepositoryName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= githubRepositoryName %>)[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![NPM](https://nodei.co/npm/<%= packageName %>.png?compact=true)](https://nodei.co/npm/<%= packageName %>/)

> tinymce plugin

## Example

[点击预览](https://<%= githubUsername %>.github.io/<%= githubRepositoryName %>/)

## Explain

## Use

```javascript
tinymce.init({
  selector: "textarea.tinymce",
  plugins: "<%= githubRepositoryName %>",
  menu: {
    example: { title: "Example Menu", items: "example" }
  },
  menubar: "file edit example",
  toolbar: "code | example"
});
```

## Development

- [Create a plugin for TinyMCE](https://www.tiny.cloud/docs/advanced/creating-a-plugin/)
- [How to create custom toolbar buttons](https://www.tiny.cloud/docs/ui-components/toolbarbuttons/)
- [Types of toolbar buttons](https://www.tiny.cloud/docs/ui-components/typesoftoolbarbuttons/)
- [How to create custom menu items](https://www.tiny.cloud/docs/ui-components/menuitems/)
- [semantic-release-cli setup](https://semantic-release.gitbook.io/semantic-release/usage/getting-started)

### Test

example/src/index.js => import "../../src/index";
`npm run dev:example`
