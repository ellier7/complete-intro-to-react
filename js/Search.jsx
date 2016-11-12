const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

const Search = React.createClass({
  render () {
    return (
      <div className='container'>
        <div className='shows'>
          {
    data.shows.map((show) => (
      <ShowCard
        {...show} // instead of passing everything individually
        key={show.imdbID}
      />
    ))}
        </div>
      </div>
  )
  }
})

module.exports = Search
