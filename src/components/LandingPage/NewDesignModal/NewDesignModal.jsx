import { useState } from "react"
import aws from "../../../assets/icons/aws.png"
import azure from "../../../assets/icons/azure.png"
import google from "../../../assets/icons/google-cloud.png"
import { useSelector } from "react-redux"

const NewDesignModal = (props) => {

    const [title, setTitle] = useState("")
    const [awsChecked, setAwsCheched] = useState(false)
    const [azsChecked, setAzsCheched] = useState(false)
    const [gcsChecked, setGcsCheched] = useState(false)

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

    return <div className="modal fade" id="newDesignModal" tabIndex="-1" aria-labelledby="newDesignModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content rounded-1">
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
            <button type="button" className="btn btn-primary">Create New Design</button>
            </div>
        </div>
        </div>
    </div>
}

export default NewDesignModal