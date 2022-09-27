// import { Link } from 'react-router-dom'

// const NavBar = ({ user, handleLogout }) => {
//   return (
//     <>
//       <header className="App-header" style={{overflow: 'hidden'}}>
//         React Pedals
//         {user ?
//           <nav>
//             <Link to="/">Pedals</Link>
//             {/* <Link to="/add">Add Pedal</Link> */}
//             <Link to='/profiles'>Profiles</Link>
//             <Link to='/pedalboards'>Pedalboards</Link>
//             <Link to="" onClick={handleLogout}>Log Out</Link>
//             <Link to="/changePassword">Change Password</Link>
//           </nav>
//         :
//           <nav>
//             <Link to="/login">Log In</Link>
//             <Link to="/signup">Sign Up</Link>
//           </nav>
//         }
//       </header>
//     </>
//   )
// }

// export default NavBar


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navv = ({ user, handleLogout }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant='dark'>
        <Container>
          <Navbar.Brand>React Pedals</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {user ?
            <Nav className="me-auto">
              <Nav.Link href="/">Pedals</Nav.Link>
              <Nav.Link href="/profiles">Profiles</Nav.Link>
              <Nav.Link href="/pedalboards">Pedalboards</Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="/changePassword">Change Password</NavDropdown.Item>
                <NavDropdown.Item href="" onClick={handleLogout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            :
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
            </Nav>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navv;