import 'split-pane-react/esm/themes/default.css'
import { useState } from "react";
import ProjectTopBar from '../components/layout/project/ProjectTopBar';
import ProjectSideBar from '../components/layout/project/ProjectSideBar';
import SplitPane from 'split-pane-react/esm/SplitPane';
import { Pane } from 'split-pane-react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DesignToolbar from '../components/DesignPage/DesignToolbar';
import MainCanvas from '../components/Canvas/MainCanvas';
import Canvas2D from '../components/Canvas/Canvas2D/Canvas2D'

const ProjectEditPage = (props) => {

    const [sizes, setSizes] = useState(
        ['80%', '20%'] 
    )
    const [canvas2D, setCanvas2D] =  useState(false)
    
    return <div>
        <ProjectTopBar />
        <DndProvider backend={HTML5Backend}>
            <div className='container-fluid'>
                <div className='row vh-100 g-0'>
                    <div className='col-md-2'>
                        <ProjectSideBar />
                    </div>
                    <div className='col-md-10 px-3'>
                        <DesignToolbar canvas2D={canvas2D} setCanvas2D={() => setCanvas2D(!canvas2D)} />
                        <SplitPane
                            split='horizontal'
                            sizes={sizes}
                            onChange={setSizes}
                            className='border-end'
                        >
                            <Pane className='d-flex' minSize={50} maxSize='90%'>
                                <div className='container-fluid d-flex'>
                                    {
                                        canvas2D ? <Canvas2D /> : <MainCanvas />
                                    }
                                </div>
                            </Pane>
                            <Pane>
                                <div className="row border-top">
                                    <div className='col-md-12'>
                                    </div>
                                </div>
                            </Pane>
                        </SplitPane>
                    </div>
                </div>
            </div>
        </DndProvider>
    </div>
}

export default ProjectEditPage