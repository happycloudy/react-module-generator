const path = require('path')
const generateModule = require("./functions/generateModule");
const readCommand = require("./helpers/readCommand");

const app = () => {
  const command = readCommand()
  const modulesPath = path.resolve(__dirname, 'test_project/modules')

  switch (command.operation) {
    case 'module':
      generateModule(command.parameter, modulesPath)
      break
    default:
      console.log('Unknown command. Try --help')
  }
}

app()

