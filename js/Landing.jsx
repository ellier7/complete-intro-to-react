const React = require('react')

// stateless component (just a function)
  // can use function express since youre only returning divs
  // use return if you want conditionals and variables
const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input className='search' type='text' placeholder='Search' />
      <button className='browse-all'>Or Browse All</button>
    </div>
  </div>
)

module.exports = Landing
