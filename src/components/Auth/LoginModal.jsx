import googleIcon from "../../assets/icons/google.png"

const LoginModal = (props) => {

    return <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content rounded-4">
                <div className="modal-header border-bottom-0">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body py-4">
                    <div className="row d-flex justify-content-center mb-4">
                        <div className="col-md-11 d-flex justify-content-center mb-1">
                            <p className="h4">
                                <strong>
                                    Welcome Back
                                </strong>
                            </p>
                        </div>
                        <div className="col-md-10 d-flex justify-content-center">
                            <p className="text-secondary text-center">
                                Login to continue with Cloud UI Three and access your cloud designs
                            </p>
                        </div>
                    </div>
                    <form className="form row g-3 justify-content-center">
                        <div className="col-md-11">
                            <input 
                                type="text" 
                                className="form-control border-none border-bottom rounded-sm" 
                                id="email" 
                                placeholder="Enter Email / Phone No" />
                        </div>
                        <div className="col-md-11 mb-1">
                            <input 
                                type="password" 
                                className="form-control border-none border-bottom rounded-sm" 
                                id="password" 
                                placeholder="Password" />
                        </div>
                        <div className="col-md-11 d-flex justify-content-center">
                            <a href="/login" className="text-secondary text-decoration-none">
                                <small>Having trouble logging in?</small>
                            </a>
                        </div>
                        <div className="col-md-11">
                            <button className={props.darkMode ? "btn btn-light w-100" : "btn btn-dark w-100"}>Login</button>
                        </div>
                        <div className="col-md-11 d-flex justify-content-center">
                            <small className="text-secondary">--- or ---</small>
                        </div>
                        <div className="col-md-11 mb-2">
                            <button className="btn btn-outline-primary w-100">
                                <img src={googleIcon} alt="googleIcon" width={25} height={25} className="mx-2" style={{marginTop: "-3px"}}></img>
                                <span>Login with Google</span>
                            </button>
                        </div>
                        <hr></hr>
                        <div className="my-2 col-md-11 d-flex justify-content-center">
                            <a href="/login" className="text-secondary text-decoration-none">
                                <small>Don't have an account? Register Now</small>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default LoginModal