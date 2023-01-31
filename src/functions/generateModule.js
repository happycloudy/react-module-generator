const path = require("path");
const moduleFolders = require("../consts/moduleFolders");
const createFolderInPath = require("../helpers/createFolderInPath");
const createFileInPath = require("../helpers/createFileInPath");
const chalk = require("chalk");

const generateModule = async (name, modulesPath) => {
  name = name.toLowerCase()

  const moduleFolder = path.resolve(modulesPath, name)

  await createFolderInPath(name, modulesPath)
  for (const folderName of moduleFolders) {
    await createFolderInPath(folderName, moduleFolder)
  }

  await createFileInPath('index.ts', moduleFolder)

  console.log(`\nModule ${chalk.green(name)} created\n`)
}

module.exports = generateModule
