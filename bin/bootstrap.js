module.exports = function bootstrapEssentialFiles (data, opts) {
  const prompt = opts.lib.prompt
  const log = opts.helpers.log
  const trustOSS = opts.lib.trustOSS

  const info = opts.helpers.info
  const warn = opts.helpers.warn
  const danger = opts.helpers.danger

  const prompts = data.prompts

  log(info, 'Bootstrapping TrustOSS essential files.')
  prompt.start()

  let promptQs = {
    properties: prompts.init
  }

  prompt.get(promptQs, function prompt1Callback (err, userResponse) {
    if (err) throw err
    userResponse.assets = userResponse.assets.toLowerCase()
    userResponse.assets = userResponse.assets === 'y/n' ? 'yes' : userResponse.assets
    userResponse.assets = userResponse.assets === 'y' ? 'yes' : userResponse.assets
    userResponse.assets = userResponse.assets === 'n' ? 'no' : userResponse.assets
    userResponse.governance = userResponse.governance.toLowerCase()
    userResponse.governance = userResponse.governance === 'y/n' ? 'yes' : userResponse.governance
    userResponse.governance = userResponse.governance === 'y' ? 'yes' : userResponse.governance
    userResponse.governance = userResponse.governance === 'n' ? 'no' : userResponse.governance
    userResponse.civic = userResponse.civic.toLowerCase()
    userResponse.civic = userResponse.civic === 'y/n' ? 'no' : userResponse.civic
    userResponse.civic = userResponse.civic === 'n' ? 'no' : userResponse.civic
    userResponse.civic = userResponse.civic === 'y' ? 'yes' : userResponse.civic
    console.log(JSON.stringify(userResponse, null, ' '))
    // build opts
    prompt.start()
    prompt.get([{properties: {
        verify: {
          description: "Here's your configuration. Does this look right?",
          type: 'string',
          default: 'Y/n',
          required: true
    }}}], function prompt2callback (err, choice) {
      if (err) throw userResponse
      choice.verify = choice.verify.toLowerCase()
      choice.verify = choice.verify === 'y/n' ? 'yes' : choice.verify
      choice.verify = choice.verify === 'y' ? 'yes' : choice.verify
      choice.verify = choice.verify === 'n' ? 'no' : choice.verify
      if (choice.verify === 'yes') {
        if (userResponse.assets === 'yes') {
          userResponse.assets = './.assets'
        } else {
          delete userResponse.assets
        }
        if (userResponse.governance === 'yes') {
          userResponse.governance = './.governance'
        } else {
          delete userResponse.governance
        }
        if (userResponse.civic === 'yes') {
          userResponse.civic = '../civic.json'
        } else {
          delete userResponse.civic
        }
        userResponse.readme_location = 'README.md'
        userResponse.contributing_location = 'CONTRIBUTING.md'
        userResponse.license_location = 'LICENSE.md'
        userResponse.changelog_location = 'CHANGELOG.md'
        userResponse.coc_location = 'CODEOFCONDUCT.md'
        userResponse.readme_location = '../README.md'
        return trustOSS.init(userResponse)
      }
    })
  // then pass in opts
  })
}
