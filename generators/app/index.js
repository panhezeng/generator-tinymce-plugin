"use strict";
const Generator = require("yeoman-generator");
const validate = require("validate.js");
const _ = require("lodash");
const shell = require("shelljs");
shell.config.globOptions = { dot: true };

function toLowerKebabCase(value) {
  if (
    /^\[object String\]$/.test(Object.prototype.toString.call(value)) &&
    value.trim()
  ) {
    value = value.trim();
    if (/[A-Z]/.test(value)) {
      value = value.toLowerCase();
    }
    if (/\s/g.test(value)) {
      value = _.kebabCase(value);
    }
  } else {
    value = "";
  }
  return value;
}

module.exports = class extends Generator {
  async prompting() {
    this.log("Welcome to the tinymce plugin generator!");
    const destinationRoot = this.destinationRoot();
    const currentFolderName = destinationRoot.substring(
      destinationRoot.lastIndexOf("/") + 1
    );
    const githubRepositoryNameDefault = toLowerKebabCase(currentFolderName);

    const githubUsernameDefault = toLowerKebabCase(
      (await this.user.github.username()) || this.user.git.name()
    );

    const emailDefault = toLowerKebabCase(this.user.git.email());

    this.answers = await this.prompt([
      {
        type: "input",
        name: "githubRepositoryName",
        message: "Your github repository name",
        default: githubRepositoryNameDefault,
        filter(value) {
          return toLowerKebabCase(value);
        },
        validate(value) {
          const message = validate.single(value, {
            presence: { allowEmpty: false }
          });
          if (message) {
            return message.join();
          } else {
            return true;
          }
        }
      },
      {
        type: "input",
        name: "githubUsername",
        message: "Your github username",
        default: githubUsernameDefault,
        filter(value) {
          return toLowerKebabCase(value);
        },
        validate(value) {
          const message = validate.single(value, {
            presence: { allowEmpty: false }
          });
          if (message) {
            return message.join();
          } else {
            return true;
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Your email",
        default: emailDefault,
        filter(value) {
          return toLowerKebabCase(value);
        },
        validate(value) {
          const message = validate.single(value, {
            presence: { allowEmpty: false }
          });
          if (message) {
            return message.join();
          } else {
            return true;
          }
        }
      },
      {
        type: "input",
        name: "packageName",
        message: "Your package.json name",
        default(answers) {
          return `@${answers.githubUsername}/${answers.githubRepositoryName}`;
        },
        filter(value) {
          return toLowerKebabCase(value);
        },
        validate(value) {
          const message = validate.single(value, {
            presence: { allowEmpty: false }
          });
          if (message) {
            return message.join();
          } else {
            return true;
          }
        }
      },
      {
        type: "input",
        name: "pluginID",
        message: "Your tinymce.PluginManager.add id",
        default(answers) {
          return answers.githubRepositoryName
            .replace(/^tinymce-plugin-/, "")
            .replace(/-/g, "");
        },
        filter(value) {
          return toLowerKebabCase(value);
        },
        validate(value) {
          const message = validate.single(value, {
            presence: { allowEmpty: false }
          });
          if (message) {
            return message.join();
          } else {
            return true;
          }
        }
      }
    ]);
  }
  writing() {
    shell.rm("-rf", `${this.destinationRoot()}/**/*`);
    shell.ls("-RA", this.sourceRoot()).forEach(file => {
      const templatePath = this.templatePath(file);
      const destinationPath = this.destinationPath(file);
      if (![".DS_Store", "node_modules"].some(value => file.includes(value))) {
        if (shell.test("-d", templatePath)) {
          shell.mkdir("-p", destinationPath);
        } else {
          let pipe = shell.cat(templatePath);
          const answers = this.answers;
          for (const key in answers) {
            if (Object.prototype.hasOwnProperty.call(answers, key)) {
              const value = answers[key];
              if (
                /^\[object String\]$/.test(
                  Object.prototype.toString.call(value)
                )
              ) {
                pipe = pipe.sed(new RegExp(`<%=\\s*${key}\\s*%>`, "g"), value);
              }
            }
          }
          pipe.to(destinationPath);
        }
      }
    });
  }
  install() {
    this.spawnCommandSync("git", ["init"]);
    this.spawnCommandSync("git", ["add", "."]);
    this.spawnCommandSync("git", ["commit", "-m", "'init'"]);
    this.spawnCommandSync("git", [
      "remote",
      "add",
      "origin",
      `git@github.com:${this.answers.githubUsername}/${this.answers.githubRepositoryName}.git`
    ]);
    this.spawnCommandSync("git", ["remote", "-v"]);
    // this.spawnCommandSync("git", ["push", "-u", "origin", "master"]);
    this.spawnCommandSync("npm", ["install"]);
    const exampleOpt = {
      cwd: `${this.destinationRoot()}/example`
    };
    this.log(exampleOpt.cwd);
    this.spawnCommandSync("npm", ["install"], exampleOpt);
    this.spawnCommandSync("npm", ["run", "dev"], exampleOpt);
  }
};
