webpackJsonp([2],{

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var ShowCard = __webpack_require__(249);
	var Header = __webpack_require__(250);
	var _React$PropTypes = React.PropTypes,
	    arrayOf = _React$PropTypes.arrayOf,
	    object = _React$PropTypes.object,
	    string = _React$PropTypes.string;

	var _require = __webpack_require__(225),
	    connector = _require.connector;

	// can change to stateless component now


	var Search = React.createClass({
	  displayName: 'Search',

	  propTypes: {
	    shows: arrayOf(object),
	    searchTerm: string
	  },
	  render: function render() {
	    var _this = this;

	    return React.createElement(
	      'div',
	      { className: 'container' },
	      React.createElement(Header, { showSearch: true }),
	      React.createElement(
	        'div',
	        { className: 'shows' },

	        // dynamically search for show they are looking for
	        // can search for title or description
	        this.props.shows.filter(function (show) {
	          return (show.title + ' ' + show.description).toUpperCase().indexOf(_this.props.searchTerm.toUpperCase()) >= 0;
	        }).map(function (show) {
	          return React.createElement(ShowCard, _extends({}, show, { // instead of passing everything individually
	            key: show.imdbID
	          }));
	        })
	      )
	    );
	  }
	});

	module.exports = connector(Search);

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var _require = __webpack_require__(162),
	    Link = _require.Link;

	var ShowCard = function ShowCard(props) {
	  return React.createElement(
	    Link,
	    { to: '/details/' + props.imdbID },
	    React.createElement(
	      'div',
	      { className: 'show-card' },
	      React.createElement('img', { src: 'public/img/posters/' + props.poster, className: 'show-card-img' }),
	      React.createElement(
	        'div',
	        { className: 'show-card-text' },
	        React.createElement(
	          'h3',
	          { className: 'show-card-title' },
	          props.title
	        ),
	        React.createElement(
	          'h4',
	          { className: 'show-card-year' },
	          props.year
	        ),
	        React.createElement(
	          'p',
	          { className: 'show-card-description' },
	          props.description
	        )
	      )
	    )
	  );
	};

	var string = React.PropTypes.string;


	ShowCard.propTypes = {
	  title: string.isRequired,
	  description: string.isRequired,
	  year: string.isRequired,
	  poster: string.isRequired,
	  imdbID: string.isRequired
	};

	module.exports = ShowCard;

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var _require = __webpack_require__(162),
	    Link = _require.Link;

	var _React$PropTypes = React.PropTypes,
	    func = _React$PropTypes.func,
	    bool = _React$PropTypes.bool,
	    string = _React$PropTypes.string;

	var _require2 = __webpack_require__(225),
	    connector = _require2.connector;

	var Header = React.createClass({
	  displayName: 'Header',

	  propTypes: {
	    setSearchTerm: func,
	    showSearch: bool,
	    searchTerm: string
	  },
	  // child calling parent
	  handleSearchTermEvent: function handleSearchTermEvent(event) {
	    this.props.setSearchTerm(event.target.value); // from store
	  },
	  render: function render() {
	    var utilSpace = void 0;
	    if (this.props.showSearch) {
	      utilSpace = React.createElement('input', { type: 'text', className: 'search-input', placeholder: 'search', value: this.props.searchTerm, onChange: this.handleSearchTermEvent });
	    } else {
	      utilSpace = React.createElement(
	        'h2',
	        { className: 'header-back' },
	        React.createElement(
	          Link,
	          { to: '/search' },
	          'Back'
	        )
	      );
	    }
	    return React.createElement(
	      'header',
	      { className: 'header' },
	      React.createElement(
	        'h1',
	        { className: 'brand' },
	        React.createElement(
	          Link,
	          { to: '/', className: 'brand-link' },
	          'svideo'
	        )
	      ),
	      utilSpace
	    );
	  }
	});

	// connect to redux store
	// injects to component
	module.exports = connector(Header);

/***/ }

});