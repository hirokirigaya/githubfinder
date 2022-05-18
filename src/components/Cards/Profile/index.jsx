import './styles.css'

function index() {
  return (
    <section className='card-profile'>
      <div>
        <div className='avatar'>
          <img src={`https://avatars.githubusercontent.com/u/97910848?s=400&u=38ae2778ae80bbfcea7a554f0d049b445e9c07c8&v=4`} alt="avatar-user" />
        </div>
        <div className='data-user'>
          <h2 className='name-user'>hirokirigaya</h2>
          <p className='location'>Brasil, Brasilia, Distrito Federal</p>
          <p className='repositories'>24 repositories</p>
          <a href={`https://github.com/hirokirigaya`} className="profile-git">View on Github</a>
          <span className='author'>Made by  <a href="https://github.com/hirokirigaya">Daniel</a></span>
        </div>
      </div>
    </section>
  )
}

export default index