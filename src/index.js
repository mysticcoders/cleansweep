/* eslint react/jsx-filename-extension: off */
import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router'

import App from './pages/App'

import "rbx/index.css"

const history = createBrowserHistory()
const root = document.getElementById('root')

if (root instanceof Element) {
    ReactDOM.render(
        <Router history={history}>
        <App />
        </Router>,
    root,
)
}
