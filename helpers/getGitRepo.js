module.exports = function getGitRepo (opts) {
  var fs = opts.lib.fs
  try {
    var gitConfigPath = [
      process.cwd(),
      '.git/config'
    ].join('/')
    var gconf = fs.readFileSync(gitConfigPath, 'utf8')
    gconf = gconf.split(/\r?\n/)
    var i = gconf.indexOf('[remote "origin"]')
    if (i !== -1) {
      var url = gconf[i + 1]
      if (!url.match(/^\s*url =/)) {
        url = gconf[i + 2]
      }
      if (!url.match(/^\s*url =/)) {
        url = null
      } else {
        url = url.replace(/^\s*url = /, '')
      }
    }
    if (url && url.match(/^git@github.com:/)) {
      url = url.replace(/^git@github.com:/, 'https://github.com/')
    }

    return url
  } catch(e) {
    return ''
  }
}
