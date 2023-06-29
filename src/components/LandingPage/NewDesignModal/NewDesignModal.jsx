import { useState } from "react"
import aws from "../../../assets/icons/aws.png"
import azure from "../../../assets/icons/azure.png"
import google from "../../../assets/icons/google-cloud.png"
import { useDispatch } from "react-redux"
import { setDesign } from "../../../store/designSlice"
import { useNavigate } from "react-router-dom"
import { saveNewDesign } from "../../../api/design-api"
import { useKeycloak } from "@react-keycloak/web"

const NewDesignModal = (props) => {

    const [title, setTitle] = useState("")
    const [awsChecked, setAwsCheched] = useState(false)
    const [azsChecked, setAzsCheched] = useState(false)
    const [gcsChecked, setGcsCheched] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { keycloak } = useKeycloak()

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    } 

    const awsCheckedChangeHandler = () => {
        setAwsCheched(!awsChecked)
    }

    const azsCheckedChangeHandler = () => {
        setAzsCheched(!azsChecked)
    }

    const gcsCheckedChangeHandler = () => {
        setGcsCheched(!gcsChecked)
    }

    const showSpinnerChangeHandler = () => {
        setShowSpinner(!showSpinner)
    } 

    const hideModal = () => {
        const modal = document.getElementById("newDesignModal")
        modal.style.display = "none"
        document.body.classList.remove("modal-open");
        const backdrop = document.querySelector(".modal-backdrop");
        backdrop.parentNode.removeChild(backdrop);
    }

    const createNewDesignHandler = () => {

        showSpinnerChangeHandler()

        let designTitle = title
        if(title === "") {
            designTitle = "Untitled Design"
        }
        
        let providers = []
        if(awsChecked) providers.push("AWS")
        if(azsChecked) providers.push("Azure")
        if(gcsChecked) providers.push("GCS")

        saveNewDesign({
            userId: "123",
            name: designTitle,
            providers: providers
        }, keycloak.token)
        .then(response => {
                dispatch(
                    setDesign({
                        name: response.data.name,
                        providers: response.data.providers
                    })
                )
                showSpinnerChangeHandler()
                hideModal()
                navigate("/canvas-edit")
            }
        )
        .catch(err => console.log(err))
    }

    return <div className="modal fade" id="newDesignModal" tabIndex="-1" aria-labelledby="newDesignModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content rounded-4">
            <div className="modal-header">
            <h1 className="modal-title fs-5" id="newDesignModalLabel">New Design Details</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body py-4">
                <form className="form row g-3 justify-content-center">
                    <div className="col-md-11">
                        <label className="form-label" htmlFor="designTitle">Design Title</label>
                        <input 
                            type="text" 
                            className="form-control border-none border-bottom" 
                            id="designTitle" 
                            value={title} 
                            onChange={titleChangeHandler}
                            placeholder="Untitled design" />
                    </div>
                    <div className="col-md-11">
                        <label htmlFor="provider" className="form-label mb-3">Cloud Provider</label>
                        <div className="row">
                            <div className="col-md-12 d-flex flex-row">
                                <div className="customCheckbox me-4">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox"
                                        id="aws"
                                        checked={awsChecked}
                                        onChange={awsCheckedChangeHandler}
                                        />
                                    <label className="form-check-label ms-3" htmlFor="aws">
                                        <img src={aws} height="48" width="48" alt="AWS"></img>
                                        <p className="text-center">
                                            <small>AWS</small>
                                        </p>
                                    </label>
                                </div>
                                <div className="customCheckbox me-4">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id="azs"
                                        checked={azsChecked}
                                        onChange={azsCheckedChangeHandler}
                                        />
                                    <label className="form-check-label ms-3" htmlFor="azs">
                                        <img src={azure} height="48" width="48" alt="AZURE"></img>
                                        <p className="text-center">
                                            <small>Azure</small>
                                        </p>
                                    </label>
                                </div>
                                <div className="customCheckbox me-4">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox"
                                        id="gcs" 
                                        checked={gcsChecked}
                                        onChange={gcsCheckedChangeHandler}
                                        />
                                    <label className="form-check-label ms-3" htmlFor="gcs">
                                        <img src={google} height="48" width="48" alt="GC"></img>
                                        <p className="text-center">
                                            <small>Google</small>
                                        </p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" onClick={createNewDesignHandler} className="btn btn-primary">
                    Create New Design
                    {
                        showSpinner && <span className="ms-2 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    }
                </button>
            </div>
        </div>
        </div>
    </div>
}

export default NewDesignModal