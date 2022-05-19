import './styles.css'

import {
  FiMoon as Moon,
  FiSun as Sun,
  FiChevronLeft as Back,
} from 'react-icons/fi'


import BtnTheme from '../../components/BtnTheme'
import Btn from '../../components/Button/Btn'
import BtnFinder from '../../components/Button/BtnFinder'

function index({toggleTheme,theme}) {
  return (
    <section className='container-error'>
      <div className='btn'>
        <Btn content={<Back/>}/>
        <BtnTheme
        toggleTheme={toggleTheme}
        theme={theme === 'dark' ? <Sun /> : <Moon />}
        />
      </div>
      <div className='error'>
        <h1 className='title'>Opss..</h1>
        <p className='phrase'>User doesn`t exist, back to finder</p>
        <BtnFinder content="FINDER"/>
      </div>
    </section>
  )
}

export default index