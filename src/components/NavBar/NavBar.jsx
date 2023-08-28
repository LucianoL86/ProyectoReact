import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import styles from './navbar.module.css'


const NavBar = () => {
    return (
        <div className={styles['MyNavbar']}>
            <Navbar expand="lg" className="bg-body-tertiary p-0" >
                <Container fluid className={styles['navbar-container']}>
                    <Navbar.Brand as={Link} to='/'>
                        <img src="./asset/logo.png" className={styles['icon']} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-3"
                                style={{ width: '100%', maxHeight: '100px', display: 'flex', justifyContent: 'space-around'  }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                                <Nav.Link as={Link} to='/destacados'>Destacados</Nav.Link>
                                <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                                    <NavDropdown.Item as={Link} to='/category/Historia'>Historia</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/category/Filosofia'> Filosofía</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/category/Novelas'>Novelas</NavDropdown.Item>                                 
                                </NavDropdown>
                                <Nav.Link as={Link} to='contacto'>Contacto</Nav.Link> 
                            </Nav>                                               
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Ingrese título o autor"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success" className='me-5'>Buscar</Button>
                                </Form>
                                <Link to='cart'><CartWidget/></Link> 
                    </Navbar.Collapse>                 
                </Container>
            </Navbar>
        </div>
    );
}


export default NavBar
