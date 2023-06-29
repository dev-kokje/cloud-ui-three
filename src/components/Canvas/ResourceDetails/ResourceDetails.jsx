import { useContext, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import ProjectDetailsWindow from "./ProjectDetailsWindow"
import ResourceDetailsWindow from "./ResourceDetailsWindow"


const ResourceDetails = ({ selectedElement }) => {

    console.log("Resource tab - ", selectedElement)

    const { darkMode } = useContext(ThemeContext)
    const [show, setShow] = useState(true)
    const [activeWindow, setActiveWindow] = useState('1')
    
    const visibleStyle = {
        position: 'absolute',
        top: '1.5rem',
        width: '20rem',
        height: '92%',
        transition: '0.5s',
        right: '-0.50rem'
    }
    
    const hiddenStyle = {
        position: 'absolute',
        top: '1.5rem',
        width: '20rem',
        height: '92%',
        transition: '0.5s',
        right: '-19.5rem'
    }

    const buttonType = darkMode ? 'btn btn-dark px-1 border' : 'btn btn-secondary px-1 border'

    return <div className="border shadow-sm rounded sidebar" style={show ? visibleStyle : hiddenStyle}>
        <button 
            className={buttonType} 
            style={{ position: 'absolute', left: '-0.9rem', top: '50%' }}
            onClick={() => setShow(!show)}
            >
                {
                    show ? <i className="bi bi-caret-right"></i> : <i className="bi bi-caret-left"></i>
                }
        </button>
        <div className="container">
            <div className="row justify-content-center">
                <div 
                    className={"col-md-6 py-2 text-center border-bottom border-end custom-nav " + (activeWindow === '1' ? "active" : "")}
                    onClick={() => setActiveWindow('1')}
                    >
                    Project Details
                </div>
                <div 
                    className={"col-md-6 py-2 text-center border-bottom custom-nav " + (activeWindow === '2' ? "active" : "") }
                    onClick={() => setActiveWindow('2')}
                    >
                    Resource Details
                </div>
            </div>
            { activeWindow === '1' && <ProjectDetailsWindow /> }
            { activeWindow === '2' && <ResourceDetailsWindow selectedElement={selectedElement} /> }
        </div>
    </div>
}

export default ResourceDetails