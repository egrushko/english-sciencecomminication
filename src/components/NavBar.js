import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../img/icon.png'
import logoFFZH from '../img/logo_ffzh.png'
import '../css/NavBar.css'

export const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container className = "nav-container">
        <div
          className='logos'
        >
          <Navbar.Brand href="https://sfedu.ru/">
            <img src={icon}/>
          </Navbar.Brand>
          <Navbar.Brand 
            href="https://philology.sfedu.ru/"
          >
            <img class="sppb-img-responsive" src={logoFFZH} alt="Институт филологии, журналистики и межкультурной коммуникации ЮФУ" title=""></img>
            <span className=''>ИФЖиМКК</span>
          </Navbar.Brand>
        </div>
        <div className='site-title'><p>English for Science Communication</p></div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#/"><p>Home</p></Nav.Link>
            <Nav.Link href="#/units"><p>Units 1 - 4</p></Nav.Link>
            <Nav.Link href="#/about"><p>About</p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}