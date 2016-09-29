const requireDir = require('require-dir')

const README = {
  id: 'readme',
  filenames: [
    'README',
    'README.md',
    'README.txt',
    'ReadMe',
    'ReadMe.md',
    'ReadMe.txt',
    'readme',
    'readme.md',
    'readme.txt'
  ],
  purpose: '"Landing page" of the repository, the first place new developers will look for information about the project, installation guide (or link to them), usage, troubleshooting, etc.',
  versioncheck: 'minor',
  templates: requireDir('../../templates/readme'),
  defaults: {
    type: 'TrustOSS v0.1',
    location: '../'
  },
  prompts: {
    init: {
      description: 'Readme Type',
      type: 'string',
      require: true
    }
  }
}

module.exports = README
