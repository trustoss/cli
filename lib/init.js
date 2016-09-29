require('colors')

var info = '[TrustOSS]'.green
var warn = '[TrustOSS | WARNING]'.yellow
var danger = '[TrustOSS | ERROR]'.red

var templates = require('../config/templates')
var dictionary = require('./template-dict')()
var fs = require('fs')
var path = require('path')
var moment = require('moment')
var mksubdir = require('mksubdir')

module.exports = function trustOSSinit (config, opts) {
  opts = opts || {}
  console.log(config)
  var cwd = opts.cwd || process.cwd()
  var docRoot = path.resolve(cwd, config.docroot)
  // console.log(templates)
  try {
    stats = fs.lstatSync(docRoot)
    if (!stats.isDirectory()) {
      throw new Error(docRoot + ' is not a directory!')
    }
  } catch (e) {
    mksubdir(docRoot)
  }
  var filesToProcess = [
    'readme',
    'contributing',
    'license',
    'changelog',
    'coc'
  ]
  console.log(templates)
  filesToProcess = filesToProcess.map(function (file) {
    console.log('*****',file,templates[file],dictionary[file],config[file])
    return {
      file: file,
      type: config[file],
      location: config[file + '_location'],
      absoluteLocation: path.resolve(docRoot, config[file + '_location']),
      template: templates[file][dictionary[file][config[file]]],
      overwrite: config.overwrite
    }
  })
  var fileProcessings = []
  fileProcessings = filesToProcess.map(function (file) {
    return processFile(file, config)
  })
  return Promise.all(fileProcessings).then(function (results) {
    console.log(info, 'Bootstrapping complete. Saving Config...')
    fs.writeFile(process.cwd() + '/docs.json', JSON.stringify(config, null, ' '), function (err, results) {
      if (err) throw new Error(err)
      console.log(info, 'Config saved. Thank you for using TrustOSS scaffolder.')
    })
  }).catch(function (err) {
    console.error(err)
    throw new Error(err)
  })
}

function processFile (file, config) {
  return new Promise(function (resolve, reject) {
    try {
      stats = fs.lstatSync(file.absoluteLocation)
      if (stats.isFile() && !file.overwrite) {
        return resolve()
      }
    } catch (e) {}
    var templateOpts = {
      name: config.name,
      changelogLocation: config.changelog_location,
      cocLocation: config.coc_location,
      licenseLocation: config.license_location,
      year: moment().format('YYYY'),
      date: moment().format('YYYY-MM-DD'),
      version: config.version,
      contact: config.contact
    }
    console.log(file)
    var thisTemplate = file.template(templateOpts)
    fs.writeFile(file.absoluteLocation, thisTemplate, function (err, results) {
      if (err) return reject(err)
      resolve()
    })
  })
}
