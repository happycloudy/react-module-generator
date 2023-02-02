const fs = require('fs')
const path = require('path')

const templates = () => {
  let templates = {}
  const templatesPath = path.resolve(__dirname, 'templates')
  const files = fs.readdirSync(templatesPath)

  for (const file of files) {
    const fileContent = fs.readFileSync(path.resolve(templatesPath, file), {
      encoding: 'utf-8'
    })
    templates = {
      ...templates,
      [file.split('.')[0]]: (componentName) => fileContent.replaceAll('ComponentName', componentName)
    }
  }
  return templates
}

module.exports = templates()
