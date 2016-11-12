const React = require('react')
const { Link } = require('react-router')
// stateless component (just a function)
  // can use function express since youre only returning divs
  // use return if you want conditionals and variables
const Landing = () => (
  <div className='home-info'>
    <h1 className='title'>svideo</h1>
    <input className='search' type='text' placeholder='Search' />
    <Link to='/search' className='browse-all'>Or Browse All</Link>
  </div>
)

module.exports = Landing
