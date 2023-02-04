const operations = require("../consts/operations");

const readCommand = () => {
  const command = process.argv.slice(2)
  const isOperationValid = !!operations.find(validOperation => validOperation === command[0])

  if(!isOperationValid) {
    return {
      operation: '',
      parameter: []
    }
  }

  const [operation, ...parameters] = command

  return {
    operation: operation || '',
    parameter: parameters || [],
  }
}

module.exports = readCommand
