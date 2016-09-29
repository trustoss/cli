module.exports = function changelogNode (opts) {
  /*
    opts {
      version: String,
      date: String
    }
  */
  return `## ${opts.date}, Version ${opts.version}
### Notable Changes

- Enter Notable Changes Here

### Commits
- [[\`0c2a3f886f (commit-hash)\`]((link-to-commit-hash))] - **(scope, page, or file):**  (description) ((author))
- [[\`9178103673 (commit-hash)\`]((link-to-commit-hash))] - **(scope, page, or file):**  (description) ((author))
- [[\`8459f4f703 (commit-hash)\`]((link-to-commit-hash))] - **(scope, page, or file):**  (description) ((author))`
}
