const path = require('path')
const generateModule = require("./functions/generateModule");
const generateComponent = require("./functions/generateComponent");
const readCommand = require("./helpers/readCommand");

const app = () => {
  const command = readCommand()
  const modulesPath = path.resolve(__dirname, 'test_project/modules')

  switch (command.operation) {
    case 'module':
      generateModule(command.parameter[0], modulesPath)
      break
    case 'component':
      const [module, ...components] = command.parameter

      for (const component of components) {
        generateComponent(module, component, modulesPath)
      }
      break
    default:
      console.log('Unknown command. Try --help')
  }
}

app()

