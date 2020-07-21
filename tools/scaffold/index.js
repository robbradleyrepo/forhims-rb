#!/usr/bin/env node

var path = require("path");
var directory = process.cwd();
var prompt = require("prompt");
var fs = require("fs");
var mkdirp = require("mkdirp");

var init = function() {
  prompt.start();

  var schema = {
    properties: {
      name: {
        description: "What would you like to name your component?",
        type: "string",
        pattern: /^[$A-Z_][0-9A-Z_$]*$/i,
        message: "Name must start with a letter and have no spaces",
        default: "SampleComponent",
        required: true
      },
      hasComponent: {
        description: "Create component?",
        type: "string",
        default: "no",
        validator: /y[es]*|n[o]?/,
        required: true
      },
      hasContainer: {
        description: "Create container?",
        type: "string",
        default: "no",
        validator: /y[es]*|n[o]?/,
        required: true
      },
      hasStylesheet: {
        description: "Create stylesheet?",
        type: "string",
        default: "no",
        validator: /y[es]*|n[o]?/,
        required: true
      }
    }
  };

  prompt.get(schema, function(err, result) {
    if (err) {
      return onErr(err);
    }
    // create container
    if (result.hasContainer === "yes" || result.hasContainer === "y")
      writeContainer(result.name);
    // write(result.name, result.has);
    if (result.hasComponent === "yes" || result.hasComponent === "y")
      writeComponent(result.name, result.name);
    // write(result.name, result.has);
    if (result.hasStylesheet === "yes" || result.hasStylesheet === "y")
      writeStylesheet(result.name);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  function writeContainer(componentName) {
    var name = capitalize(componentName);
    var filePath = path.resolve(directory, "containers", name + "Container.js");
    // Conflict? bail!
    if (fs.existsSync(filePath)) {
      console.error("Conflict: " + filePath + " already exists, aborting!");
      return;
    }
    var template = fs.readFileSync(
      path.resolve(__dirname, "containerTemplate.js"),
      "utf8"
    );
    template = template.replace(/{{displayName}}/g, name);
    fs.writeFile(filePath, template, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Wrote " + filePath);
    });
  }

  function writeStylesheet(componentName) {
    var name = capitalize(componentName);
    var filePath = path.resolve(directory, "resources", "css", name + ".scss");
    // Conflict? bail!
    if (fs.existsSync(filePath)) {
      console.error("Conflict: " + filePath + " already exists, aborting!");
      return;
    }
    // create file
    fs.writeFile(filePath, "", function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Wrote " + filePath);
    });
    // update styles.scss
    var stylesFile = path.resolve(directory, "resources", "css", "styles.scss");
    fs.appendFile(stylesFile, '@import "' + name + '.scss";\n', function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('Successfully appended "' + stylesFile + '"');
    });
  }

  function writeComponent(componentName, folder) {
    var name = "index"; // capitalize(componentName);
    var filePath = path.resolve(
      directory,
      "components",
      folder || "",
      name + ".js"
    );

    mkdirp(path.resolve(directory, "components", folder), function() {
      // Conflict? bail!
      if (fs.existsSync(filePath)) {
        console.error("Conflict: " + filePath + " already exists, aborting!");
        return;
      }
      var template = fs.readFileSync(
        path.resolve(__dirname, "componentTemplate.js"),
        "utf8"
      );
      template = template.replace(/{{displayName}}/g, name);
      fs.writeFile(filePath, template, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Wrote " + filePath);
      });
    });
  }
};

module.exports = init();
