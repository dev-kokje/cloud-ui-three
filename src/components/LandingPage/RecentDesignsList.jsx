import { Col, Row } from "react-bootstrap"
import RecentDesignsTable from "./RecentDesignsTable/RecentDesignsTable"

const RecentDesignsList = (props) => {

    return <Row className="d-flex justify-content-center mt-4">
        <Col md={11} className="fw-bold fs-5">Recent Designs</Col>
        <Col md={11} className="mt-4">
            <RecentDesignsTable />
        </Col>
    </Row>
}

export default RecentDesignsList