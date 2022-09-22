const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: ['http://localhost:3001', 'http://localhost', "localhost"],
      },
    }
  }

  return {
    images: {
      domains: ['http://localhost:3001', 'http://localhost', "localhost"],
    },
  }
}