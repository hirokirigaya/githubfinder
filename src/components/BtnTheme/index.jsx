import React from 'react'

import './styles.css'

function index(props) {
  return (
    <button onClick={props.toggleTheme} className="btn-theme">{props.theme}</button>
  )
}

export default index