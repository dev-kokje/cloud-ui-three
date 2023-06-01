import { useGoogleLogin } from "@react-oauth/google"
import googleIcon from "../../assets/icons/google.png"
import { useDispatch, useSelector } from "react-redux"
import { googleLoginSetToken, googleLoginSetUser } from "../../store/authSlice"
import { useEffect } from "react"
import axios from "axios"

const LoginModal = (props) => {

    const user = useSelector((state) => state.authSlice)
    const dispatch = useDispatch()

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => dispatch(googleLoginSetToken(tokenResponse)),
        onError: () => console.log("Login Failed")
    })

    const loginClick = (e) => {
        e.preventDefault()
        login()
    }

    useEffect(
        () => {
            if (user.userToken && !user.userInfo) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.userToken}`, {
                        headers: {
                            Authorization: `Bearer ${user.userToken}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        dispatch(googleLoginSetUser(res.data));
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user, dispatch ]
    );

    return <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content rounded-4">
                <div className="modal-header border-bottom-0">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                {
                    !user.userInfo && <div className="modal-body py-4">
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
                                <button className="btn btn-outline-primary w-100" onClick={loginClick}>
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
                }
                
                {
                    user.userInfo && <div className="modal-body py-4">
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-center">
                                <p className="text-success" style={{fontSize: "80px"}}>
                                    <i className="bi bi-check-circle-fill"></i>
                                </p>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center mb-4">
                                <p className="h4">
                                    <strong>
                                        Login Successful
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                }
            
            </div>
        </div>
    </div>
}

export default LoginModal