import { Container, Nav, Navbar } from 'react-bootstrap';
import "./NaviBar.css";

function NaviBar() {
    return(
        <>
        <Navbar className='top' data-bs-theme="dark">
          <Container >
            <Navbar.Brand>Lotus Spa & Nails</Navbar.Brand>
          </Container>
        </Navbar>
      </>
    )
}

export default NaviBar;