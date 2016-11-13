const React = require('react')
const { Link } = require('react-router')
const { func, bool, string } = React.PropTypes
const { connector } = require('./Store')

const Header = React.createClass({
  propTypes: {
    setSearchTerm: func,
    showSearch: bool,
    searchTerm: string
  },
  // child calling parent
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value) // from store
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input type='text' className='search-input' placeholder='search' value={this.props.searchTerm} onChange={this.handleSearchTermEvent} />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>Back</Link>
        </h2>
    )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>svideo</Link>
        </h1>
        {utilSpace}
      </header>
      )
  }
})

// connect to redux store
  // injects to component
module.exports = connector(Header)
