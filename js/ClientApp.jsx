var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

// stateless component (just a function)
  //can use function express since youre only returning divs
  //use return if you want conditionals and variables
var MyFirstComponent = () => (
  <div>
    <MyTitle title='Whatevs' color='mediumaquamarine' />
    <MyTitle title='LOL' color='papayawhip' />
    <MyTitle title='OMGLOLWTF' color='peru' />
  </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
