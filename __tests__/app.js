const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
describe("generator-tinymce-plugin-es:app", () => {
  beforeAll(() => {
    return helpers.run(path.resolve("../generators/app"));
  });

  it("copy files success", () => {
    assert.file([".gitignore"]);
  });

  it("copyTpl files success", () => {
    assert.noFileContent([["README.md", /<%=\s*[^\s]+\s*%>/g]]);
  });
});
