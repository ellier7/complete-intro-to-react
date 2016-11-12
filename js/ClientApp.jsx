const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const {Router, Route, hashHistory} = require('react-router')

// stateless component (just a function)
  // can use function express since youre only returning divs
  // use return if you want conditionals and variables
const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
