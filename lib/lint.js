const opts = {
  lib: {
    colors: require('colors'),
    commander: require('commander'),
    prompt: require('prompt'),
    fs: require('fs'),
    path: require('path'),
    breeze: require('breeze')
  },
  pkg: require('../package.json'),
  helpers: {
    log: require('../helpers/log'),
    getGitRepo: require('../helpers/getGitRepo'),
    defaults: require('../helpers/defaults'),
    info: '[TrustOSS]'.green,
    warn: '[TrustOSS]'.yellow,
    danger: '[TrustOSS]'.red
  }
}
const lib = opts.lib
const helpers = opts.helpers

module.exports = function trustOSSlint (lintOpts) {
  const log = opts.helpers.log

  const info = opts.helpers.info
  const warn = opts.helpers.warn
  const danger = opts.helpers.danger

  log(info, 'Linting Repo')

  let flow = opts.lib.breeze()

  flow.then(next => next(checkDotFile(lintOpts, opts)))

  flow.when(results => results, (next, results) => next(dotfilePresent(results, opts)))

  flow.when(results => !results, (next, results) => next(dotfileAbsent(results, opts)))

  flow.then((next, results) => next(checkFiles(results, opts)))
}

function checkDotFile (data, opts) {
  const fs = opts.lib.fs
  const path = opts.lib.path

  const log = opts.helpers.log

  const info = opts.helpers.info
  const warn = opts.helpers.warn
  const danger = opts.helpers.danger
  return new Promise((resolve, reject) => {
    log(info, 'Checking Dotfile in', process.cwd())
    let docRoot = path.resolve(process.cwd(), './.trustoss')
    log(info, docRoot)
    try {
      stats = fs.lstatSync(docRoot)
      if (!stats.isFile()) {
        throw new Error(docRoot + ' is not a file!')
      }
      fs.readFile(docRoot, 'utf8', (err, data) => {
        if (err) throw err
        log(info, data)
        let dotfile = JSON.parse(data)
        resolve(dotfile)
      })
    } catch (e) {
      log(warn, e)
      reject(false)
    }
  })
}
function dotfilePresent (data, opts) {
  const log = opts.helpers.log

  const info = opts.helpers.info
  const warn = opts.helpers.warn
  const danger = opts.helpers.danger
  return new Promise((resolve, reject) => {
    log(warn, 'Dotfile Present')
    resolve(data)
  })
}
function dotfileAbsent (data, opts) {
  const log = opts.helpers.log

  const info = opts.helpers.info
  const warn = opts.helpers.warn
  const danger = opts.helpers.danger
  return new Promise((resolve, reject) => {
    log(danger, 'Dotfile absent')
    var dotfile = helpers.defaults({}, opts)
    if (dotfile.assets === 'yes') {
      dotfile.assets = './.assets'
    } else {
      delete dotfile.assets
    }
    if (dotfile.governance === 'yes') {
      dotfile.governance = './.governance'
    } else {
      delete dotfile.governance
    }
    if (dotfile.civic === 'yes') {
      dotfile.civic = '../civic.json'
    } else {
      delete dotfile.civic
    }
    dotfile.readme_location = 'README.md'
    dotfile.contributing_location = 'CONTRIBUTING.md'
    dotfile.license_location = 'LICENSE.md'
    dotfile.changelog_location = 'CHANGELOG.md'
    dotfile.coc_location = 'CODEOFCONDUCT.md'
    dotfile.readme_location = '../README.md'
    resolve(dotfile)
  })
}
function checkFiles (data, opts) {
  const log = opts.helpers.log

  const info = opts.helpers.info
  const warn = opts.helpers.warn
  const danger = opts.helpers.danger
  return new Promise((resolve, reject) => {
    log(info, 'Checking files', data)

    log(helpers.info, 'Scanning tags')
    log(helpers.info, 'comparing tag timestamp to last updated changelog')
    log(helpers.info, 'checking the rest of the files present')
  })
}
