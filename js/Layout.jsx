const React = require('react')

// layout for all pages
const Layout = (props) => (
  <div className='app-container'>
    {props.children} {/* children is custom to react props */}
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
