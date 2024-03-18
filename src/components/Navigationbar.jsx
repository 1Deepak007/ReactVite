import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigationbar() {
  return (
    <>
                {/* BOOTSTRAP NAVBAR */}
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>React 18</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className='text-light'>Home</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/firstComp">Vari Compo Btns Props</NavDropdown.Item>
                <NavDropdown.Item href="/UseEfUseRfClbk">UseEffect UseRef Callback</NavDropdown.Item>
                <NavDropdown.Item href="/ApiHooks">Custom_Hooks & API</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default Navigationbar;