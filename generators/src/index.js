const shell = require("shelljs");
shell.config.globOptions = { dot: true };

const path = require("path");

const toPath = path.resolve(__dirname, "../app/templates");
const fromPath = path.resolve(__dirname, "templates");

shell.rm("-rf", `${toPath}/**/*`);
shell.ls("-RA", fromPath).forEach(file => {
  const templatePath = fromPath + "/" + file;
  const destinationPath = toPath + "/" + file;
  if (![".DS_Store", "node_modules"].some(value => file.includes(value))) {
    if (shell.test("-d", templatePath)) {
      shell.mkdir("-p", destinationPath);
    } else {
      const array = destinationPath.split("/");
      const end = array.pop();
      shell.cp(templatePath, array.join("/") + "/_" + end);
    }
  }
});
