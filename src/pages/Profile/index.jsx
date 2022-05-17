import React from 'react'
import './styles.css'
import { FiMoon as Moon, FiSun as Sun, FiChevronLeft as Back  } from 'react-icons/fi'

import BtnTheme from '../../components/BtnTheme'
import Button from '../../components/Button/Btn'

function index({ toggleTheme, theme }) {
  return (
    <section className="profile-container">
      <div className="buttons">
        <Button content={<Back/>}/>
        <BtnTheme
          toggleTheme={toggleTheme}
          theme={theme === 'dark' ? <Sun /> : <Moon />}
        />
      </div>
    </section>
  )
}

export default index
