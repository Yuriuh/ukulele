const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ukulele/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        includePaths: [path.join(__dirname, 'styles')]
      },
    }
  },
}
