import 'split-pane-react/esm/themes/default.css'
import { useState } from "react";
import ProjectTopBar from '../components/layout/project/ProjectTopBar';
import ProjectSideBar from '../components/layout/project/ProjectSideBar';
import SplitPane from 'split-pane-react/esm/SplitPane';
import { Pane } from 'split-pane-react';
import MainCanvas from '../components/Canvas/MainCanvas';

const ProjectEditPage = (props) => {

    const [sizes, setSizes] = useState(
        ['80%', '20%'] 
    )
    
    return <div>
        <ProjectTopBar />
        <div className='container-fluid'>
            <div className='row vh-100 g-0'>
                <div className='col-md-2'>
                    <ProjectSideBar />
                </div>
                <div className='col-md-10 px-3'>
                    <SplitPane
                        split='horizontal'
                        sizes={sizes}
                        onChange={setSizes}
                    >
                        <Pane minSize={50} maxSize='80%'>
                            <div className="row h-100 border-bottom">
                                <div className='col-md-12'>
                                    <MainCanvas />
                                </div>
                            </div>
                        </Pane>
                        <div>
                            <div className='col-md-12'>
                            </div>
                        </div>
                    </SplitPane>
                </div>
            </div>
        </div>
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