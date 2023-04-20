import { Button, Col, Dropdown, Row } from "react-bootstrap"

const UserDropdownMenu = (props) => {

    return <Dropdown.Menu className="me-4">
        <Row className="p-2">
            <Col md={3} className="d-flex justify-content-end">
                <Button variant="warning" className="w-95 h-80">RK</Button>
            </Col>
            <Col md={9}>
                <Row>
                    <Col md={12} className="fs-5">Rahul Kokje</Col>
                </Row>
                <Row>
                    <Col md={12} className="text-muted fs-6">rahulkokje1097@gmail.com</Col>
                </Row>
            </Col>
        </Row>
        <hr />
        <Dropdown.Item href="#/action-2">App Demo</Dropdown.Item>
        <Dropdown.Item href="#/action-3">App Settings</Dropdown.Item>
        <hr />
        <Dropdown.Item href="#/action-3">Signout</Dropdown.Item>
    </Dropdown.Menu>
}

export default UserDropdownMenu