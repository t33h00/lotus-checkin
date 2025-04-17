import { Container, Nav, Navbar } from 'react-bootstrap';
import "./NaviBar.css";

function NaviBar() {
    return(
        <>
        <Navbar className='top' data-bs-theme="dark">
          <Container >
            <Navbar.Brand>Lotus Spa & Nails</Navbar.Brand>
            <Nav>
                <Nav.Link href="/checkin">Check-In</Nav.Link>
              <Nav.Link href="/list">List</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    )
}

export default NaviBar;