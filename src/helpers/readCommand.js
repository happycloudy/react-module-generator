const operations = require("../consts/operations");

const readCommand = () => {
  const command = process.argv.slice(2)
  const isOperationValid = !!operations.find(validOperation => validOperation === command[0])

  if(!isOperationValid) {
    console.log("Operation doesn't exists")
    return {}
  }

  return {
    operation: command[0],
    parameter: command[1],
  }
}

module.exports = readCommand
