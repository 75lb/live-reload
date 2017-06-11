class LiveReload {
  middleware (options) {
    const livereload = require('koa-livereload')
    return livereload()
  }
}

module.exports = LiveReload
