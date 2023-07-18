const { join } = require('path')

module.exports = {
  set: {
    http() {
      return [
        {
          method: 'get',
          path: '/_styleguide/cribsheet',
          src: join(__dirname, 'src', 'routes'),
          config: {
            views: true,
          }
        },
      ]
    }
  }
}

