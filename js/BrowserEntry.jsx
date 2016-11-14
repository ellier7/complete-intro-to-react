// entry to our app

const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./ClientApp')
const { match } = require('react-router')

// wait for server to be same as client

match({ history: App.History, routes: App.Routes }, (error, redirectLocation, renderProps) => {
  if (error) {
    return console.log('BrowserEntry error', error)
  }
  ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
})

