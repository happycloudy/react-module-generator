const addExportToPublicApi = require("../helpers/addExportToPublicApi");
const path = require("path");

const importComponents = async (module, name, modulesPath) => {
  const modulePath = path.resolve(modulesPath, module)
  addExportToPublicApi(modulePath, name)
}

module.exports = importComponents
