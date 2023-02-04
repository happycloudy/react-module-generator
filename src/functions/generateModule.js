const path = require("path");
const moduleFolders = require("../consts/moduleFolders");
const createFolderInPath = require("../helpers/createFolder");
const createFileInPath = require("../helpers/createFile");
const chalk = require("chalk");
const generateComponent = require("./generateComponent");
const flToUpperCase = require("../helpers/flToUpperCase");

const generateModule = async (name, modulesPath) => {
  name = flToUpperCase(name)

  const moduleFolder = path.resolve(modulesPath, name)

  await createFolderInPath(name, modulesPath)
  for (const folderName of moduleFolders) {
    await createFolderInPath(folderName, moduleFolder)
  }

  await createFileInPath('index.ts', moduleFolder)
  await generateComponent(name, name, modulesPath)

  console.log(`\nModule ${chalk.green(name)} created\n`)
}

module.exports = generateModule
