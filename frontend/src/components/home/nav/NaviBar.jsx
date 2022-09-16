import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import LoginButton from '../../authentication/LoginButton';
import LogoutButton from '../../authentication/LogoutButton';

import { useAuth0 } from '@auth0/auth0-react';

function NaviBar() {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Qommon Logistics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {!isAuthenticated && <Nav.Link href="/driver">Driver</Nav.Link>}
            {isAuthenticated && <Nav.Link href='/profile'>Profile</Nav.Link>}
            {isAuthenticated && <Nav.Link href='/manager'>Manager</Nav.Link>}
            <Nav.Link>
              <LoginButton />
              <LogoutButton />
            </Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NaviBar;
