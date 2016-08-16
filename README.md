# trustoss-cli

#### Todo

##### Scaffolder

- [ ] Implement civic.json template + type
- [ ] Implement version
- [ ] Implement Git JS to scan tags + grab last
- [ ] Test cases

##### Linter

Types:

- [ ] Local file system lint
- [ ] Remote Github repo lint (via API)
  - Look into Gitlab API integration

Steps:

- [ ] if no .trustoss, look for common files
- [ ] if .trustoss, look for doc locations
- [ ] scan tags, look for last tag + compare with last edit to changelog
- [ ] check all doc files for additional alterations

##### Maintainer

- [ ] bump version in .trustoss, package.json, civic.json, git tag
