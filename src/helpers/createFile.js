const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");
const chalk = require("chalk");

const createFile = async (file, modulePath) => {
  const filePath = path.resolve(modulePath, file)
  const isExists = fsSync.existsSync(filePath)

  if(isExists) {
    console.log(`File ${chalk.yellow(file)} already exists`)
    return
  }

  await fs.appendFile(filePath, '')
  console.log(`File ${chalk.green(file)} created`)
}

module.exports = createFile
