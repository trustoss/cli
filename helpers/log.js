module.exports = function log () {
  if (process.env.VERBOSE) {
    console.log.apply(console, arguments)
  }
}
