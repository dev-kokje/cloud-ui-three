const DesignToolbar = ({ canvas2D, setCanvas2D }) => {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary border">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex collapse navbar-collapse" id="navbarSupportedContent">
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