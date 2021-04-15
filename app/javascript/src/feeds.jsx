import React from 'react'
import ReactDOM from 'react-dom'

import './feeds.scss';

const Feeds = props => (
  <React.Fragment>
    this is where feeds go
  </React.Fragment>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feeds />,
    document.getElementById('feed-root'),
  )
})