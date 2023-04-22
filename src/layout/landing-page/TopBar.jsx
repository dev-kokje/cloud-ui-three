import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap"
import { List } from "react-bootstrap-icons"
import styles from "./TopBar.module.css"
import UserDropdownMenu from "./UserDropdownMenu"
import { useNavigate } from "react-router-dom"

const TopBar = (props) => {

    const navigate = useNavigate()

    return <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container fluid>
            <Button variant="light" className={styles.toggleButton + " mx-2"}>
                <List />
            </Button>
            <Navbar.Brand href="#">Cloud UI Three</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    
                </Nav>
                <Nav
                    className="d-flex"
                    navbarScroll
                >
                    <Button variant="primary" className="me-3" onClick={() => navigate("/canvas-edit")}>Create New Design</Button>
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="warning" className="me-4 rounded-pill" id="dropdown-basic">
                            RK
                        </Dropdown.Toggle>
                        <UserDropdownMenu />
                    </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default TopBar