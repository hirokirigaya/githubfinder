import React from 'react'
import { Link } from 'react-router-dom'

import './Btn.css'

function Button({content}) {
  return (
    <Link to="/">
      <button className="btn-back">
        {content}
      </button>
    </Link>
  )
}

export default Button
