import axios from 'axios'
import { useEffect, useState } from 'react'
import './styles.css'

function index({ user }) {
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user?.login}/repos`)
      .then(({ data }) => {
        setRepository(data)
      })
      .catch((err) => console.log(err))
  }, [user])

  const [repository, setRepository] = useState([])

  return (
    <section className="repositories-container">
      <h2 className="title">Repositories</h2>
      {repository !== undefined &&
        repository.map((repository) => {
          return (
            <div className="repository" key={repository.id}>
              <p>{repository.name}</p>
              <a href={`https://github.com/${repository.full_name}`} target="_blank">View on Github</a>
            </div>
          )
        })}
    </section>
  )
}

export default index
