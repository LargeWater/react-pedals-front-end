import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './NavBar.module.css'

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
              <Link to="/">Pedals</Link>
              <Link to='/search'>Search</Link>
              <Link to="/profiles">Profiles</Link>
              <Link to="/pedalboards">Pedalboards</Link>
              <NavDropdown title="Account" id="basic-nav-dropdown" variant='info' className={styles.dropdown}>
                <NavDropdown.Item href="/changePassword">Change Password</NavDropdown.Item>
                <NavDropdown.Item to="" onClick={handleLogout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            :
            <Nav className="me-auto">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </Nav>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navv;