import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <header className="App-header" style={{overflow: 'hidden'}}>
        React Pedals
        {user ?
          <nav>
            <Link to="/">Pedals</Link>
            <Link to="/add">Add Pedal</Link>
            <Link to='/profiles'>Profiles</Link>
            <Link to='/pedalboards'>Pedalboards</Link>
            <Link to="" onClick={handleLogout}>Log Out</Link>
            <Link to="/changePassword">Change Password</Link>
          </nav>
        :
          <nav>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
        }
      </header>
    </>
  )
}

export default NavBar
