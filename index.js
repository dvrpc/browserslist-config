const browserslist = require('browserslist')
const stats = require('./stats.json')

module.exports = browserslist('> 1%', {stats: stats})
