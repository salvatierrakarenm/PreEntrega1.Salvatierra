import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import NavBarCompo from './NavBarCompo.css'
import { Link } from 'react-router-dom';


const NavBarComponent = () => {
    return (
        <div className='styleheader'>

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to='/' href="#home">TIENDA BEAUTY</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Linea Vegan" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Vegan Skincare</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Vegan Makeup</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Beauty
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">Nuevos ingresos</Nav.Link>
                            <Nav.Link href="#link">Accesorios</Nav.Link>
                            <Nav.Link href="#link">Sobre nosotros</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </div>


    )
}

export default NavBarComponent