'use strict'

var fs = require('fs')
var path = require('path')
var bold = require('ansi-bold')
var glob = require('matched')

var fixtures = __dirname + '/fixtures'
var code = __dirname + '/code'

glob.sync('*.js', {cwd: code}.forEach(function (fp) {
  var fn = require(path.resolve(code, fp))
  var name = path.basename(fp, path.extname(fp))

  glob.sync('*.js', {cwd: fixtures}).forEach(function (fixture) {
    fixture = path.resolve(fixtures, fixture)
    var base = path.basename(fixtures, fixture)
    console.log(bold(name + ' [' + base + ']') + ':', fn.apply(fn, require(fixture)))
  })
}))