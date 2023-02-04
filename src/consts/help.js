const chalk = require("chalk");
const Table = require("cli-table");

const help = new Table({
  head: ['Command', 'Description', 'Example'],
  rows: [
    [
      `module ${chalk.blue("name")}`,
      `Generate ${chalk.blue("name")} module`,
      `module ${chalk.blue("header")}`
    ],
    [
      `component ${chalk.blue("moduleName")} ${chalk.green("componentNamesArray")}`,
      `Generate component(s) with names in ${chalk.green("componentNamesArray")}  
in ${chalk.blue('moduleName')} (create module, if it's not exist)`,
      `component ${chalk.blue("header")} ${chalk.green('headerTitle headerBody')}`
    ],
    [
      `import ${chalk.blue("moduleName")} ${chalk.green("componentNamesArray")}`,
      `Generate import strings in module's index file`,
      `import ${chalk.blue("header")} headerTitle headerBody`
    ],
  ]
})

module.exports = help
