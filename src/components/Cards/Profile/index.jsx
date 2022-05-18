import './styles.css'

function index({ user }) {
  return (
    <section className="card-profile">
      {user !== undefined &&
      <div>
        <div className="avatar">
          <img src={`${user.avatar_url}`} alt="avatar-user" /> 
        </div>
        <div className="data-user">
          <h2 className="name-user">{user.login}</h2>
          <p className="location">{user.location}</p>
          <p className="repositories">{user.public_repos} repositories</p>
          <a href={`${user.html_url}`} className="profile-git" target="_blank">
            View on Github
          </a>
          <span className="author">
            Made by <a href="https://github.com/hirokirigaya">Daniel</a>
          </span>
        </div>
      </div>
      } 
    </section>
  )
}

export default index
