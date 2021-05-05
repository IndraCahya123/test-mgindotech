import { Link, useHistory } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function MyNavbar() {
    const history = useHistory();
    return (
        <div style={{
            width: "100%",
            position: 'fixed',
            top: 0,
            backgroundColor: "#1D4A5F"
         }}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <button type="button" onClick={() => history.push('/galleries')}>Gallery</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MyNavbar
