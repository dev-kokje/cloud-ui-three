import avatar from "../../../assets/img/avatar.png"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import NewDesignModal from "../../LandingPage/NewDesignModal/NewDesignModal"
import LoginModal from "../../Auth/LoginModal"
import { useDispatch, useSelector } from "react-redux"
import { logoutGoogle } from "../../../store/authSlice"

const TopBar = (props) => {

    const { darkMode, toggleColorMode } = useContext(ThemeContext)
    const user = useSelector((state) => state.authSlice.userInfo)
    const dispatch = useDispatch()

    const googleLogout = (e) => {
        dispatch(logoutGoogle())
    }

    return <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
        <div className="container-fluid">
            <a className="navbar-brand ms-3" href="/home">Cloud UI Three</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
            </ul>
            <ul className="navbar-nav d-flex">
                <li className="nav-item d-flex align-items-center me-3">
                    <button onClick={toggleColorMode} className="btn rounded-circle">
                        {
                            darkMode ? <i className="bi bi-sun-fill text-warning"></i> : <i className="bi bi-moon-stars-fill"></i>
                        }
                    </button>
                </li>
                <li className="nav-item d-flex align-items-center me-3">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newDesignModal">Create New Design</button>
                </li>
                <NewDesignModal />
                {
                    user && <li className="nav-item dropdown me-3">
                        <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={avatar} alt="mdo" width="40" height="40" className="rounded-circle"></img>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end py-3 px-1">
                            <li className="dropdown-item">
                                <p className="fs-5 m-0">{ user.given_name + " " + user.family_name }</p>
                                <p className="fw-lighter m-0"><small>{ user.email }</small></p>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="/">User Profile</a></li>
                            <li><a className="dropdown-item" href="/">App Demo</a></li>
                            <li><a className="dropdown-item" href="/">App Settings</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item" onClick={googleLogout}>Signout</button></li>
                        </ul>
                    </li>
                }
                {
                    !user && <li className="nav-item d-flex align-items-center me-3">
                        <button className={darkMode ? "btn btn-outline-light" : "btn btn-outline-dark"} data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                    </li>
                }
                <LoginModal darkMode={darkMode} />
            </ul>
            </div>
        </div>
    </nav>
}

export default TopBar