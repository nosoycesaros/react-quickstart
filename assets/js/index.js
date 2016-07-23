// Require SCSS to allow Webpack live render
require('../css/style.scss');

// Import React and React-dom
import React from 'react'
import { render } from 'react-dom'
// Import elements of React Router
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router'

// Define app container
var destination = document.querySelector("#app");

// Define the main App component
var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>Hello</h1>
      </div>
    )
  }
});

// Start Here
render(
  <App />
  , destination
)
