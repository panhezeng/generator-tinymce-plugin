"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const shell = require("shelljs");
module.exports = class extends Generator {
  writing() {
    this.log(JSON.stringify(shell.ls("-a")));
  }

  install() {}
};
