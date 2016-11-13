const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { object, string } = React.PropTypes
const { connector } = require('./Store')

// can change to stateless component now
const Search = React.createClass({
  propTypes: {
    route: object,
    searchTerm: string
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {
            // dynamically search for show they are looking for
              // can search for title or description
    this.props.route.shows
    .filter((show) => {
      return `${show.title} ${show.description}`
      .toUpperCase()
      .indexOf(this.props.searchTerm.toUpperCase()) >= 0
    })
    .map((show) => (
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

module.exports = connector(Search)
