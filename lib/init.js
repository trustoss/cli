var templates = require('../templates')

module.exports = function trustOSSinit (config, opts){
  console.log(config)
  opts = opts || {}
  var cwd = opts.cwd || process.cwd()
  console.log(templates)

}
