import React from 'react'
import ReactDOM from 'react-dom'

import HelloComponent from './components/hello_component'

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<HelloComponent name="Leslie" />, document.querySelector('#the-app'))
})
