const browserslist = require('browserslist')
const stats = require('./stats.json')

module.exports = browserslist('> .1%, ie 10', {stats: stats})
