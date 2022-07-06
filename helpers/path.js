const path = require('path');

module.exports.pathToAppRootDir = path.dirname(process.mainModule.filename);
// module.exports = path.dirname(require.main.filename);