import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Navv from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddPedal from './pages/AddPedal/AddPedal'
import * as pedalService from './services/pedalService'
import PedalList from './pages/PedalList/PedalList'
import EditPedal from './pages/EditPedal/EditPedal'
import './App.css'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import * as profileService from './services/profileService'
import ScrollingBackground from './components/ScrollingBackground/ScrollingBackground'
import PedalBoardList from './pages/PedalboardList/PedalboardList'
import * as pedalboardService from './services/pedalboardService'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profiles, setProfiles] = useState([])
  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  const navigate = useNavigate()

  const [pedals, setPedals] = useState([])

  const handleAddPedal = async (newPedalData, photo) => {
    const newPedal = await pedalService.create(newPedalData)
    if (photo) {
      newPedal.photo = await pedalPhotoHelper(photo, newPedal._id)
    }
    setPedals([...pedals, newPedal])
    navigate('/')
  }

  // const handleAddPedalboard = async (newPedalboardData) => {
  //   const newPedalboard = await pedalboardService.create(newPedalboardData)
  //   setPedalboards([...pedalboards, newPedalboard])
  //   navigate('/')
  // }
  
  const pedalPhotoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await pedalService.addPhoto(photoData, id)
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleDeletePedal = async id => {
    const deletedPedal = await pedalService.deleteOne(id)
    setPedals(pedals.filter(pedal => pedal._id !== deletedPedal._id))
  }


  const handleUpdatePedal = async (updatedPedalData, photo) => {
    const updatedPedal = await pedalService.update(updatedPedalData)
    if (photo) {
      updatedPedal.photo = await pedalPhotoHelper(photo, updatedPedal._id)
    }
    const newPedalsArray = pedals.map(pedal => 
      pedal._id === updatedPedal._id ? updatedPedal : pedal 
    )
    setPedals(newPedalsArray)
    navigate('/')
  }

  useEffect(() => {
    const fetchAllPedals = async () => {
      const pedalData = await pedalService.getAll()
      setPedals(pedalData)
    }
    fetchAllPedals()
  }, [])

  const [pedalboards, setPedalboards] = useState([])

  useEffect(() => {
    const fetchAllPedalboards = async () => {
      const pedalboardData = await pedalboardService.getAll()
      setPedalboards(pedalboardData)
      console.log(pedalboardData)
    }
    fetchAllPedalboards()
  }, [])


  return (
    <>
      <div className="App">
        <Navv user={user} handleLogout={handleLogout} />
        <ScrollingBackground />
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
              element={user ? <AddPedal handleAddPedal={handleAddPedal}/> : <Navigate to="/login" />}
            />
            <Route
              path="/"
              element={
                <PedalList 
                  pedals={pedals} 
                  handleDeletePedal={handleDeletePedal}
                  user={user}
                />
              }
            />
            <Route
              path="/edit"
              element={
                <EditPedal 
                  handleUpdatePedal={handleUpdatePedal}
                />
              }
            />
            <Route 
              path='/:profileId' 
              element={
                <ProfilePage 
                  profiles={profiles} 
                  pedals={pedals} 
                  user={user}
                />
              } 
            />
            <Route
              path='/pedalboards'
              element={
                <PedalBoardList
                  pedalboards={pedalboards}
                  pedals={pedals}
                  user={user}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
