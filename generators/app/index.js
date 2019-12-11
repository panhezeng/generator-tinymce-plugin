"use strict";
const Generator = require("yeoman-generator");
const shell = require("shelljs");
shell.config.globOptions = { dot: true };
module.exports = class extends Generator {
  writing() {
    // this.log(JSON.stringify(shell.ls("-A", this.sourceRoot())));
    // this.log(
    //   JSON.stringify(
    //     shell.cp("-Rf", this.sourceRoot() + "/*", this.destinationRoot())
    //   )
    // );
    shell.ls("-RA", this.sourceRoot()).forEach(file => {
      const templatePath = this.templatePath(file);
      const destinationPath = this.destinationPath(file);
      if (shell.test("-d", templatePath)) {
        shell.mkdir("-p", destinationPath);
      } else {
        let pipe = shell.cat(templatePath);
        const answers = { pluginName: "test" };
        for (const key in answers) {
          if (Object.prototype.hasOwnProperty.call(answers, key)) {
            pipe = pipe.sed(
              "-i",
              new RegExp(`<%=\\s*${key}\\s*%>`, "g"),
              answers[key]
            );
          }
        }
        pipe.to(destinationPath);
      }
    });
  }

  install() {}
};
