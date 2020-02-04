const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

console.log(process.argv, "argv");

describe("generator-tinymce-plugin:app", () => {
  it("generate a project", () => {
    // The object returned acts like a promise, so return it to wait until the process is done
    return helpers
      .run(path.resolve(__dirname, "../generators/app"))
      .withOptions({
        install: !process.argv.some(value => value === "'--install=false'")
      }) // Mock options passed in
      .withArguments([]) // Mock the arguments
      .withPrompts({}) // Mock the prompt answers
      .withLocalConfig({}) // Mock the local config
      .then(() => {
        assert.file([".gitignore"]);
        assert.noFileContent([["README.md", /<%=\s*[^\s]+\s*%>/g]]);
        // assert.noFile([".gitignore"]);
      });
  });
});
