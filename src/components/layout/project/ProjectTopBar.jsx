import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { useSelector } from "react-redux"

const ProjectTopBar = (props) => {

  const { darkMode, toggleColorMode } = useContext(ThemeContext)
  const initialDesignTitle = useSelector((state) => state.designSlice.name)
  const [designTitle, setDesignTitle] = useState(initialDesignTitle)
  const titleFieldRef = useRef(null)

  useEffect(() => {
    const input = titleFieldRef.current
    input.setAttribute("size", designTitle.length)
  })

  const designTitleChangeHandler = (e) => {
      setDesignTitle(e.target.value)
  }

  return <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 border-bottom shadow-sm">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">Cloud UI Three</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/home">File</a>
            </li>
          </ul>
          <ul className="navbar-nav d-flex">
              <li className="nav-item">
                <i className="nav-link bi bi-cloud-download"></i>
              </li>
              <li className="nav-item">
                <input 
                  className="custom-form-control form-control fs-6"
                  value={designTitle}
                  onChange={designTitleChangeHandler}
                  ref={titleFieldRef}
                  />
              </li>
              <li className="vr mx-3"></li>
              <li className="nav-item d-flex align-items-center me-3">
                  <button onClick={toggleColorMode} className="btn rounded-circle">
                      {
                          darkMode ? <i className="bi bi-sun-fill text-warning"></i> : <i className="bi bi-moon-stars-fill"></i>
                      }
                  </button>
              </li>
              <li className="nav-item d-flex align-items-center me-3">
                  <button type="button" className="btn btn-warning">
                    <span className="me-2"><i className="bi bi-share"></i></span>
                    Share
                  </button>
              </li>
          </ul>
        </div>
    </div>
  </nav>
}

export default ProjectTopBar