import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import sun from './assets/light-btn.svg'

function App() {
  const defaultEmptyMessage = 'Search GitHub username..'
  const [ darkMode, setDarkMode ] = useState(true);
  const [ userName, setUserName ] = useState('');
  const [ userData, setUserData ] = useState<any>();

  const handleClick = async () => {
    if(userName.length > 0){
      const response = await(await fetch(`https://api.github.com/users/${userName}`)).json();
      const user = response;
      const validDate = new Date(user.created_at)
      const constructedDate = `${validDate.getDay()} ${validDate.toLocaleString('default', { month: 'short' })} ${validDate.getFullYear()}`;
      const newObject = { ...response, created_at: constructedDate };
      setUserData(newObject);
    }
  }
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#141c2f' : '#fafafa'
  },[darkMode])
  return (
    <main className='container'>
      <div className='header'>
        <p className='header-text' style={{ color: darkMode ? 'white' : 'black' }}>devfinder</p>
        <div onClick={() => setDarkMode(!darkMode)} className='theme-switcher' style={{ color: darkMode ? 'white' : 'black' }}>
          {
            darkMode ? 
              <>
                <p>Light</p>
                <img src={sun} alt='' width={20} height={20}/>
              </>
              :
              <>
                <p>Dark</p>
                <i className="fa-solid fa-moon"></i>
              </>
          }
        </div>
      </div>
      <div style={{ backgroundColor: darkMode ? '#1f2a48' : '#eeebeb' }}
          className='search-container'>
          <div className='input-search'>
            <i className="fa-solid fa-magnifying-glass"
              style={{color: '#0173f2', fontSize: 25}}></i>
            <input
              placeholder={defaultEmptyMessage}
              onChange={(e) => setUserName(e.target.value)}  />
          </div>
          <button className='search-btn' onClick={async () => await handleClick()}>Search</button>
      </div>
      <div style={{ backgroundColor: darkMode ? '#1f2a48' : '#eeebeb' }}
        className='user-data-container'>
          {userData ? 
            <>
              <img src={userData ? userData.avatar_url : reactLogo } className='user-logo' alt=''/>
              <div className='header-details'>
                <div className='user-data'>
                  <div>
                    <div>
                      <p style={{ fontWeight: 'bold', color: '#fefefe', fontSize: 20, margin: 0}}>{userData.login}</p>
                      <p style={{ color: '#0965cd' }}>{userData.company}</p>
                    </div>
                    <p style={{ color: '#7f8598' }}>{userData.bio || 'This profile has no bio'}</p>
                  </div>
                  <p style={{ textAlign: 'center', color: '#b6bac4' }}>Joined {userData.created_at}</p>
                </div>
                <div className='stats-container'>
                  <div>
                    <p className='column-name'>Repos</p>
                    <p className='stats-value-text'>{userData.public_repos}</p>
                  </div>
                  <div>
                    <p className='column-name'>Followers</p>
                    <p className='stats-value-text'>{userData.followers}</p>
                  </div>
                  <div>
                    <p className='column-name'>Following</p>
                    <p className='stats-value-text'>{userData.following}</p>
                  </div>
                </div>
                <div className='other-data'>
                  <div>                
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{userData.location || 'Not available'}</p>
                  </div>
                  <div>
                    <i className="fa-brands fa-twitter"></i>
                    <p>{userData.twitter_username || 'Not available'}</p>
                  </div>
                  <div>
                    <i className="fa-solid fa-link"></i>
                    <p>{userData.blog || 'Not available'}</p>
                  </div>
                  <div>
                    <i className="fa-solid fa-building"></i>
                    <a style={{ color: 'white', textDecoration: 'none' }}
                      href={userData.html_url}
                      target='_blank'>@github</a>
                  </div>
                </div>
              </div>        
            </>
          : <>
          <p>No data found!</p>
          </>}
      </div>
    </main>
  )
}

export default App
