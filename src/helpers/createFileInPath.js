const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");
const chalk = require("chalk");

const createFileInPath = async (name, modulePath) => {
  const filePath = path.resolve(modulePath, name)
  const isExists = fsSync.existsSync(filePath)

  if(isExists) {
    console.log(`File ${chalk.yellow(name)} already exists`)
    return
  }

  await fs.appendFile(filePath, '')
  console.log(`File ${chalk.green(name)} created`)
}

module.exports = createFileInPath
