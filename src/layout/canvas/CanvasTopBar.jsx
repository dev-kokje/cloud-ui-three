import { Button, Container, Form, Nav, Navbar } from "react-bootstrap"
import { CloudCheckFill, Download } from "react-bootstrap-icons"
import styles from "./CanvasTopBar.module.css"
import { useState } from "react"


const CanvasTopBar = (props) => {

  const [fileName, setFileName] = useState(props.fileName)

  function handleFileNameChange(e) {
      setFileName(e.target.value)
  }

    return <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Cloud UI Three</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/home">Options</Nav.Link>
            <div className="vr mx-2" style={{backgroundColor: "#fff"}}></div>
            <Button variant="outline-light" className="mx-3 rounded-pill">
              <CloudCheckFill />
            </Button>
            <Form className="d-flex">
              <Form.Control
                className={styles.fileNameInput}
                value={fileName}
                onChange={handleFileNameChange}
              />
            </Form>
          </Nav>
          <Nav
                    className="d-flex"
                    navbarScroll
                >
                  <Button variant="warning" className="mx-3 rounded-circle">
                    RK
                  </Button>
                  <Button variant="light" className="me-3">
                    <Download /> Export Draft
                  </Button>
                </Nav>
        </Container>
    </Navbar>
}

export default CanvasTopBar