import "./styles.css"


function index() {
  return (
    <section className='profile-stats'>
      <div className="data">
        <a href={`https://github.com/hirokirgaya`} className="link-profile">github.com/hirokirigaya</a>
        <h1 className='user-name'>Daniel Junio</h1>
        <p className='bio'>Estudante de desenvolvimento front end</p>
        <p className='followers'>Followers: 5</p>
        <p className='following'>Following: 3</p>
        <p className='created'> Created: Mon Jan 17 2022</p>
      </div>
      <div className="stats">
        {/* off, need apply*/}
        <img src="" alt="stats-user" />
      </div>
    </section>
  )
}

export default index