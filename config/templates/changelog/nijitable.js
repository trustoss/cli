module.exports = function changelogNijiTable (opts) {
  /*
    opts {
      version: String,
      date: String
    }
  */
  return `## [${opts.version}] | ${opts.date}
[![niji changelog generator](https://img.shields.io/badge/niji-changelog-blue.svg)](https://github.com/niji-commit/changelog-generator)

*branch:[\`(branch-name)\`]((link-to-branch)*

Type | Scope | Link | Description | References | Author
--- | --- | --- | --- | --- | ---
(Chore, Feature, Fixed, Removed, Changed, Breaking) | (page or file) | [\`0c2a3f886f (commit-hash)\`]((link-to-commit-hash)) |  (description) | (GH issue references) | (author)
(Chore, Feature, Fixed, Removed, Changed, Breaking) | (page or file) | [\`0c2a3f886f (commit-hash)\`]((link-to-commit-hash)) |  (description) | (GH issue references) | (author)
(Chore, Feature, Fixed, Removed, Changed, Breaking) | (page or file) | [\`0c2a3f886f (commit-hash)\`]((link-to-commit-hash)) |  (description) | (GH issue references) | (author)
`
}
