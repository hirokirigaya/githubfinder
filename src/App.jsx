import useLocalStorage from 'use-local-storage'
import Container from './components/Container'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <Container setTheme={setTheme} theme={theme} >
      <Router>
        <Routes>
          <Route path='/' element={<Home toggleTheme={toggleTheme} theme={theme}/>}/>
          <Route path='/profile' element={<Profile toggleTheme={toggleTheme} theme={theme}/>}/>
        </Routes>
      </Router>
    </Container>
  )
}

export default App
