import ProjectTopBar from "../layout/project/ProjectTopBar"
import ProjectSideBar from "../layout/project/ProjectSideBar"
import MainCanvas from "../components/Canvas/MainCanvas"
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css'
import { useState } from "react";

const ProjectEditPage = (props) => {
    
    const [sizes, setSizes] = useState([
        '70%',
        '30%'
    ]);

    return <div>
        {/* <ProjectTopBar fileName="Demo File for dev" />
        <Container fluid className="p-0">
            <Row>
                <Col md={2} className="p-0">
                    <ProjectSideBar />
                </Col>
                <Col md={10} className="p-0">
                    <SplitPane
                        split='horizontal'
                        sizes={sizes}
                        onChange={setSizes}
                    >
                        <Pane minSize={50} maxSize='80%'>
                            <Row className="h-100 border-bottom">
                                <Col md={12}>
                                    <MainCanvas />
                                </Col>
                            </Row>
                        </Pane>
                        <Row>
                            <Col md={12}>
                            </Col>
                        </Row>
                    </SplitPane>
                    
                    <Row>
                        <Col md={12}>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container> */}
    </div>
}

export default ProjectEditPage