import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const DesignToolbar = ({ canvas2D, setCanvas2D, currentWindow, setCurrentWindow }) => {

    const { darkMode, } = useContext(ThemeContext)
    const pageButtonStyle = darkMode ? {
        backgroundColor: "#555",
        color: "#000"
    } : {
        backgroundColor: "#aaa",
        color: "#000"
    }

    return <nav className="navbar navbar-expand-lg bg-body-tertiary border">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li 
                        className="nav-item border"
                        style={ currentWindow === "design" ? pageButtonStyle : null }
                    >
                        <button 
                            className="btn"
                            onClick={() => setCurrentWindow("design")}
                        >
                            Design
                        </button>
                    </li>
                    <li 
                        className="nav-item border"
                        style={ currentWindow === "estimate" ? pageButtonStyle : null }
                    >
                        <button 
                            className="btn" 
                            onClick={() => setCurrentWindow("estimate")}
                        >
                            Estimate
                        </button>
                    </li>
                    <li 
                        className="nav-item border"
                        style={ currentWindow === "deploy" ? pageButtonStyle : null }
                    >
                        <button 
                            className="btn" 
                            onClick={() => setCurrentWindow("deploy")}
                        >
                            Deploy
                        </button>
                    </li>
                </ul>

                <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
                    <li className="nav-item">
                        <button className="btn btn-secondary rounded-pill" onClick={setCanvas2D}>
                            { canvas2D ? "3D" : "2D" }
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default DesignToolbar