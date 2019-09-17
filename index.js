const EventEmitter = require('events')

class LiveReload extends EventEmitter {
  description () {
    return 'Adds live-reload support.'
  }
  optionDefinitions () {
    return [
      {
        name: 'live-reload.port',
        type: Number,
        description: 'Port for live-reload server to listen on.'
      },
      {
        name: 'live-reload.excludes',
        multiple: true,
        description: 'One or more paths to be excluded from injection (e.g. Angular partials/views)'
      }
    ]
  }
  middleware (options) {
    const mwOptions = {}
    if (options.liveReloadPort) mwOptions.port = options.liveReloadPort
    if (options.liveReloadExcludes) mwOptions.excludes = options.liveReloadExcludes
    this.emit('verbose', 'middleware.live-reload.config', mwOptions)
    const livereload = require('koa-livereload')
    return livereload(mwOptions)
  }
}

module.exports = LiveReload
