import React from 'react'

import './container.css'

function index(props) {
  return (
    <main className="container" data-theme={props.theme}>
      {props.children}
    </main>
  )
}

export default index
