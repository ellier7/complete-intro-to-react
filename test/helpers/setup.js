require('babel-register')
require('babel-polyfill')

// global is 'window' of node
  // creates new browswer-like environment
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
