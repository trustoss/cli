module.exports = function triggerLint (data, opts) {
  const log = opts.helpers.log
  const trustOSS = opts.lib.trustOSS

  const info = opts.helpers.info
  const warn = opts.helpers.warn
  const danger = opts.helpers.danger

  log(info, 'Linting for TrustOSS documents.')
  // build opts
  let lintOpts = {}
  // then pass in opts
  trustOSS.lint(lintOpts)
}
