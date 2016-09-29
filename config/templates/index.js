var requireDir = require('require-dir')

module.exports = {
  readme: requireDir('./readme'),
  changelog: requireDir('./changelog'),
  coc: requireDir('./coc'),
  contributing: requireDir('./contributing'),
  license: requireDir('./license')
}
