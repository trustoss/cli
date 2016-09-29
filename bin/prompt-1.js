module.exports = function (data) {
  var defaults = data.defaults
  // console.log(defaults)
  return {
    trustoss: {
      description: 'TrustOSS Spec Version', // Prompt displayed to the user. If not supplied name will be used.
      type: 'string', // Specify the type of input to expect.
      default: defaults.trustoss, // Default value to use if no value is entered.
      required: true // If true, value entered must be non-empty.
    },
    name: {
      description: 'Project Name', // Prompt displayed to the user. If not supplied name will be used.
      type: 'string', // Specify the type of input to expect.
      default: defaults.name, // Default value to use if no value is entered.
      required: true // If true, value entered must be non-empty.
    },
    repository: {
      description: 'Project Repository', // Prompt displayed to the user. If not supplied name will be used.
      type: 'string', // Specify the type of input to expect.
      default: defaults.repository, // Default value to use if no value is entered.
      required: true // If true, value entered must be non-empty.
    },
    status: {
      description: 'Project Status',
      type: 'string',
      default: defaults.status,
      require: true
    },
    contact: {
      description: 'Main Contact (Team Lead)',
      type: 'string',
      require: true
    },
    homepage: {
      description: 'Homepage',
      type: 'string',
      require: true
    },
    docroot: {
      description: 'Root for Project Documents',
      type: 'string',
      default: defaults.docroot,
      require: true
    },
    readme: {
      description: 'Readme Type',
      type: 'string',
      default: defaults.readme,
      require: true
    },
    contributing: {
      description: 'Contributing Guide Type',
      type: 'string',
      default: defaults.contributing,
      require: true
    },
    license: {
      description: 'License Type',
      type: 'string',
      default: defaults.license,
      require: true // https://tldrlegal.com/license/mit-license
    },
    changelog: {
      description: 'Changelog Type',
      type: 'string',
      default: defaults.changelog,
      require: true
    },
    coc: {
      description: 'Code of Conduct Type',
      type: 'string',
      default: defaults.coc,
      require: true
    },
    assets: {
      description: 'Include .assets/ ?',
      type: 'string',
      default: defaults.assets,
      require: true
    },
    governance: {
      description: 'Include .governance/ ?',
      type: 'string',
      default: defaults.governance,
      require: true
    },
    civic: {
      description: 'Is this a civic project? (Include civic.json?)',
      type: 'string',
      default: defaults.civic,
      require: true
    }
  }
}
