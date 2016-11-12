const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const {Router, Route, hashHistory, IndexRoute} = require('react-router')

// stateless component (just a function)
  // can use function express since youre only returning divs
  // use return if you want conditionals and variables
const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} > {/* nested route for layout backgorund */}
      <IndexRoute component={Landing} /> {/* one index route only; landing is children to layout */}
      <Route path='/search' component={Search} /> {/* then passes search as children */}
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
