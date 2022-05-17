import React from 'react'
import './styles.css'

import BtnTheme from '../../components/BtnTheme'
import Github from '../../components/Images/Github'

import { FiMoon as Moon, FiSun as Sun } from 'react-icons/fi'

function index({ toggleTheme, theme }) {
  return (
    <section className="home-container">
      <div className="btn-theme">
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
            <input type="text" placeholder="hirokirigaya" />
            <button>FIND</button>
          </div>
        </div>
        <div className="github-image">
        </div>
      </div>
    </section>
  )
}

export default index
