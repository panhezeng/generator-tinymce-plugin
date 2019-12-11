# generator-tinymce-plugin [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 手动发布

```bash
# 发布
npm set registry https://registry.npmjs.org/ && npm set @panhezeng:registry https://registry.npmjs.org/ && npm publish --access public && npm set registry https://registry.npm.taobao.org/ && npm set @panhezeng:registry https://registry.npm.taobao.org/

# 发布patch
npm set registry https://registry.npmjs.org/ && npm set @panhezeng:registry https://registry.npmjs.org/ && npm version patch && npm publish --access public && npm set registry https://registry.npm.taobao.org/ && npm set @panhezeng:registry https://registry.npm.taobao.org/

```
