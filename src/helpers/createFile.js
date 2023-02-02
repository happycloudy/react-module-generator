const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");
const chalk = require("chalk");

const createFile = async (file, folderPath, data = '') => {
  const filePath = path.resolve(folderPath, file)
  const isExists = fsSync.existsSync(filePath)

  if(isExists) {
    console.log(`File ${chalk.yellow(file)} already exists`)
    return
  }

  await fs.appendFile(filePath, data)
  console.log(`File ${chalk.green(file)} created`)
}

module.exports = createFile
