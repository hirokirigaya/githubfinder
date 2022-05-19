import { Link } from "react-router-dom"

import './BtnFinder.css'

function BtnFinder({content}) {
  return (
    <Link to="/">
    <button className="finder-btn">
      {content}
    </button>
    </Link>
  )
}

export default BtnFinder