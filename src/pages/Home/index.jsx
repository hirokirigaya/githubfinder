import './styles.css'

//icons
import { FaGithub as Github } from 'react-icons/fa'
import { FiMoon as Moon, FiSun as Sun } from 'react-icons/fi'

import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import BtnTheme from '../../components/BtnTheme'

function index({ toggleTheme, theme }) {

  const [user, setUser]  = useState('')
  const [enter, setEnter] = useState()
  const find = () => {
    if(enter === 'Enter') {
      window.location.href = `/profile/${user}`
    }
  }

  return (
    <section className="home-container" onKeyUp={find}>
      <div className="btn">
        <BtnTheme
          toggleTheme={toggleTheme}
          theme={theme === 'dark' ? <Sun /> : <Moon />}
        />
      </div>
      <div className="direction">
        <div className="container-finder">
          <div className="title">
            <h1>Github Finder</h1>
            <p>
              Enter path the user ex:
              <br />
              github.com/<span>hirokirigaya</span>
            </p>
          </div>
          <div className="finder">
            <input
              type="text"
              placeholder="hirokirigaya"
              onKeyUpCapture={e => setEnter(e.code)}
              onChange={e => {
                setUser(e.target.value)}}
            />
            <Link to={`/profile/${user}`} >
              <button>FIND</button>
            </Link>
          </div>
        </div>
        <div className="github-image">
          <Github />
        </div>
      </div>
    </section>
  )
}

export default index
