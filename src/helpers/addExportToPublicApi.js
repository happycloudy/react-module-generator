const path = require('path')
const fs = require('fs/promises')
const chalk = require("chalk");
const flToUpperCase = require("./flToUpperCase");

const createExportString = (componentName) => `export { ${componentName} } from './components/${componentName}'\n`

const addExportToPublicApi = async (modulePath, componentName) => {
  componentName = flToUpperCase(componentName)
  const publicApiPath = path.resolve(modulePath, 'index.ts')
  const exportString = createExportString(componentName)

  const publicApiContent = await fs.readFile(publicApiPath, {encoding: 'utf-8'})
  const importedComponents = publicApiContent.split('\n').filter(str => str.length).map(str => {
    const endOfComponents = str.indexOf('}')
    const startOfPath = str.indexOf("'")
    return {
      componentName: str.slice(9, endOfComponents).trim(),
      path: str.slice(startOfPath)
    }
  })


  const componentFolderPath = path.resolve(modulePath, 'components')
  const componentsFolders = await fs.readdir(componentFolderPath)
  const isComponentExists = !!componentsFolders.find(folderName => folderName === componentName)

  if(!isComponentExists) {
    console.log(`${chalk.green(componentName)} doesn't exist`)
    return
  }


  const isExistInPublicApi = importedComponents.find(component => component.componentName === componentName)
  if(!isExistInPublicApi) {
    await fs.appendFile(publicApiPath, exportString)
    console.log(`${chalk.green(componentName)} was added to ${chalk.blue('index file')}`)
  } else {
    console.log(`Component ${chalk.green(componentName)} already imported`)
  }
}

module.exports = addExportToPublicApi
