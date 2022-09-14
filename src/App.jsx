import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
// import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddPedal from './pages/AddPedal/AddPedal'
import * as pedalService from './services/pedalService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const [pedals, setPedals] = useState([])

  const handleAddPedal = async newPedalData => {
    const newPedal = await pedalService.create(newPedalData)
    setPedals([...pedals, newPedal])
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchAllPedals = async () => {
      const pedalData = await pedalService.getAll()
      setPedals(pedalData)
    }
    fetchAllPedals()
  }, [])


  return (
    <>
      <div className="App">
        <NavBar user={user} handleLogout={handleLogout} />
        <main>
          <Routes>
            <Route
              path="/signup"
              element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
            />
            <Route
              path="/login"
              element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
            />
            <Route
              path="/profiles"
              element={user ? <Profiles /> : <Navigate to="/login" />}
            />
            <Route
              path="/changePassword"
              element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
            />
            <Route 
              path="/add"
              element={<AddPedal handleAddPedal={handleAddPedal}/>}
            />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
