const path = require("path");
const fs = require("fs/promises");
const fsSync = require("fs");
const generateModule = require("./generateModule");
const templates = require("../consts/templates");
const chalk = require("chalk");
const flToUpperCase = require("../helpers/flToUpperCase");

const generateComponent = async (module, name, modulesPath) => {
  const modulePath = path.resolve(modulesPath, module)
  const isExists = fsSync.existsSync(modulePath)

  if(!isExists) {
    console.log(`Module ${chalk.red(module)} does not exists, creating...`)
    await generateModule(module, modulesPath)
  }

  const componentName = flToUpperCase(name)
  const componentFolderPath = path.resolve(modulePath, 'components', `${componentName}`)
  const componentPath = path.resolve(modulePath, 'components', componentName,`${componentName}.js`)

  await fs.mkdir(componentFolderPath)
  await fs.writeFile(componentPath, templates.component(componentName))
}

module.exports = generateComponent
