const path = require("path");
const fsSync = require("fs");
const fs = require("fs/promises");
const chalk = require("chalk");

const createFolderInPath = async (folder, modulesPath) => {
  const fullPath = path.resolve(modulesPath, folder)
  const isExists = fsSync.existsSync(fullPath)

  if(isExists) {
    console.log(`Folder ${chalk.yellow(folder)} already exists`)
    return
  }

  fs.mkdir(fullPath, {})
  console.log(`Folder ${chalk.green(folder)} created`)
}

module.exports = createFolderInPath
