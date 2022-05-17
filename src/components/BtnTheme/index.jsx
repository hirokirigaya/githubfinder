import React from 'react'


function index(props) {
  return (
    <button onClick={props.toggleTheme}>{props.theme}</button>
  )
}

export default index