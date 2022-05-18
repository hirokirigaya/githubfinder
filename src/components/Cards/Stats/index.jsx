import './styles.css'

function index({ user }) {

  const created = new Date(user?.created_at)
  const date = created.toLocaleString()

  return (
    <section className="profile-stats">
      {user !== undefined && (
        <div className="data">
          <a href={`${user.html_url}`} className="link-profile" target="_blank">
            {`github.com/${user.login}`}
          </a>
          <h1 className="user-name">{user.name}</h1>
          <p className="bio">{user.bio}</p>
          <p className="followers">Followers: {user.followers}</p>
          <p className="following">Following: {user.following}</p>
          <p className="created"> Created: {date}</p>
        </div>
      )}
      {user !== undefined && (
        <div className="stats">
          <img src={`https://github-readme-stats.vercel.app/api?username=${user.login}&show_icons=true&theme=graywhite&include_all_commits=true&count_private=true`} alt="stats-user" />
        </div>
      )}
    </section>
  )
}

export default index
