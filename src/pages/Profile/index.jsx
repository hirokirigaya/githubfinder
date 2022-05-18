import React, { useEffect, useState } from 'react'
import './styles.css'
import {
  FiMoon as Moon,
  FiSun as Sun,
  FiChevronLeft as Back,
} from 'react-icons/fi'

import BtnTheme from '../../components/BtnTheme'
import Loading from '../../components/Loading'
import Button from '../../components/Button/Btn'
import Profile from '../../components/Cards/Profile'
import Stats from '../../components/Cards/Stats'
import Repositories from '../../components/Cards/Repositories'

import Api from '../../providers/Api'
import { useParams } from 'react-router-dom'

function index({ toggleTheme, theme }) {
  const params = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Api.get(`/${params.user}`)
      .then(({ data }) => {
        setUser(data)
      })
      .then(() => {
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  const [user, setUser] = useState()

  console.log(loading)

  return (
    <>
      <section className="profile-container">
        <div className="buttons">
          <Button content={<Back />} />
          <BtnTheme
            toggleTheme={toggleTheme}
            theme={theme === 'dark' ? <Sun /> : <Moon />}
          />
        </div>
        {loading === false ? (
          <div className="data-container">
            <Profile user={user} />
            <div>
              <Stats user={user} />
              <Repositories user={user} />
            </div>
          </div>
        ) : (
          <Loading/>
   )}
      </section>
    </>
  )
}

export default index
