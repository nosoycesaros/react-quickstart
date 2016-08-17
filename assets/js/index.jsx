// Require SCSS to allow Webpack live render
import '../css/style.scss';

// Import React and React-dom
import React from 'react'
import { render } from 'react-dom'
// Import elements of React Router
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router'

// Import application Component
import App from './App';

// Define app container
const destination = document.getElementById("app");

// Start Here
render(<App />, destination);
