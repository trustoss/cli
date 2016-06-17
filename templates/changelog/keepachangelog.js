module.exports = function changelogKeepAChangelog (opts) {
  /*
    opts {
      version: String,
      date: String
    }
  */
  return `# Change Log
[![keepachangelog](https://img.shields.io/badge/keep%20a-changelog-orange.svg)](http://keepachangelog.com/)
[![semver](https://img.shields.io/badge/semver-versioning-red.svg)](http://semver.org/)

All notable changes to this project will be documented in this file. 

---

## [Unreleased]
### Added
### Fixed
### Removed
### Changed

## [${opts.version}] - ${opts.date}
### Added
- TrustOSS base files`
}
