const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  // must handle your own events
    // to be more resuable, handle event in header
  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm })
  },
  render () {
    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch
      />
        <div className='shows'>
          {
            // dynamically search for show they are looking for
              // can search for title or description
    this.props.route.shows
    .filter((show) => {
      return `${show.title} ${show.description}`
      .toUpperCase()
      .indexOf(this.state.searchTerm.toUpperCase()) >= 0
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

module.exports = Search
