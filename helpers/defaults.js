module.exports = function (data, opts) {
  var cwd = process.cwd()
  var folder = cwd.split('/')
  folder = folder[folder.length - 1]

  return {
    trustoss: '0.1.0',
    name: folder,
    repository: opts.helpers.getGitRepo(opts),
    status: 'discovery',
    contact: '',
    homepage: '',
    docroot: 'docs/',
    readme: 'TrustOSS v0.1',
    contributing: 'Contribute.md',
    license: 'MIT',
    changelog: 'keepachangelog',
    coc: 'Contributor Covenant',
    assets: 'Y/n',
    governance: 'Y/n',
    civic: 'y/N'
  }
}
