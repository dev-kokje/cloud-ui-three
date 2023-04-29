import { useState } from "react"
import aws from "../../../assets/icons/aws.png"
import azure from "../../../assets/icons/azure.png"
import google from "../../../assets/icons/google-cloud.png"

const NewDesignModal = (props) => {

    const [title, setTitle] = useState("")

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    } 

    return <div className="modal fade" id="newDesignModal" tabindex="-1" aria-labelledby="newDesignModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content rounded-1">
            <div className="modal-header">
            <h1 className="modal-title fs-5" id="newDesignModalLabel">New Design Details</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body py-4">
                <form className="form row g-3 justify-content-center">
                    <div className="col-md-11">
                        <label className="form-label" for="designTitle">Design Title</label>
                        <input 
                            type="text" 
                            className="form-control border-none border-bottom" 
                            id="designTitle" 
                            value={title} 
                            onChange={titleChangeHandler}
                            placeholder="Untitled design" />
                    </div>
                    <div className="col-md-11">
                        <label for="provider" className="form-label mb-3">Cloud Provider</label>
                        <div className="row">
                            <div className="col-md-12 d-flex flex-row">
                                <div className="customCheckbox me-4">
                                    <input className="form-check-input" type="checkbox" value="aws" id="aws" />
                                    <label className="form-check-label ms-3" for="aws">
                                        <img src={aws} height="48" width="48" alt="AWS"></img>
                                        <p className="text-center">
                                            <small>AWS</small>
                                        </p>
                                    </label>
                                </div>
                                <div className="customCheckbox me-4">
                                    <input className="form-check-input" type="checkbox" value="azure" id="azure" />
                                    <label className="form-check-label ms-3" for="azure">
                                        <img src={azure} height="48" width="48" alt="AZURE"></img>
                                        <p className="text-center">
                                            <small>Azure</small>
                                        </p>
                                    </label>
                                </div>
                                <div className="customCheckbox me-4">
                                    <input className="form-check-input" type="checkbox" value="gc" id="google" />
                                    <label className="form-check-label ms-3" for="google">
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
            <button type="button" className="btn btn-primary">Create New Design</button>
            </div>
        </div>
        </div>
    </div>
}

export default NewDesignModal