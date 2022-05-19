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

import UserDontExist from '../UserDontExist'

import Api from '../../providers/Api'
import { useParams } from 'react-router-dom'

function index({ toggleTheme, theme }) {
  const params = useParams()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Api.get(`/${params.user}`)
      .then(({ data }) => {
        setUser(data)
        setError(false)
      })
      .then(() => {
        setLoading(false)
      })
      .catch((err) => setError(true))
  }, [])

  const [user, setUser] = useState()

  return (
    <>
      {error === false ? (
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
              <div className="stats-repo">
                <Stats user={user} />
                <Repositories user={user} />
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </section>
      ) : (
        <div className='profile-container'>
          <div className="buttons">
            <Button content={<Back />} />
            <BtnTheme
              toggleTheme={toggleTheme}
              theme={theme === 'dark' ? <Sun /> : <Moon />}
            />
          </div>
          <UserDontExist />
        </div>
      )}
    </>
  )
}

export default index
