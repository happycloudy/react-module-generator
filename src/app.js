const path = require('path')
const generateModule = require("./functions/generateModule");
const generateComponent = require("./functions/generateComponent");
const readCommand = require("./helpers/readCommand");
const importComponents = require("./functions/importComponents");

const app = () => {
  const command = readCommand()
  const modulesPath = path.resolve(__dirname, 'test_project/modules')
  const [module, ...components] = command.parameter

  switch (command.operation) {
    case 'module':
      generateModule(command.parameter[0], modulesPath)
      break
    case 'component':
      for (const component of components) {
        generateComponent(module, component, modulesPath)
      }
      break
    case 'import':
      for (const component of components) {
        importComponents(module, component, modulesPath)
      }
      break
    default:
      console.log('Unknown command. Try --help')
  }
}

app()

