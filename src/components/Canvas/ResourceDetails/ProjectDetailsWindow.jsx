import { useState } from "react"

import aws from "../../../assets/icons/aws.png"
import azure from "../../../assets/icons/azure.png"
import google from "../../../assets/icons/google-cloud.png"
import { useSelector } from "react-redux"

const ProjectDetailsWindow = (props) => {

    const designDetails = useSelector((state) => state.designSlice)

    const [designTitle, setDesignTitle] = useState(designDetails.name)
    const [awsChecked, setAwsCheched] = useState(designDetails.providers.includes("AWS"))
    const [azsChecked, setAzsCheched] = useState(designDetails.providers.includes("Azure"))
    const [gcsChecked, setGcsCheched] = useState(designDetails.providers.includes("GCS"))

    const awsCheckedChangeHandler = () => {
        setAwsCheched(!awsChecked)
    }

    const azsCheckedChangeHandler = () => {
        setAzsCheched(!azsChecked)
    }

    const gcsCheckedChangeHandler = () => {
        setGcsCheched(!gcsChecked)
    }

    let providers = []
    if(awsChecked) providers.push("AWS")
    if(azsChecked) providers.push("Azure")
    if(gcsChecked) providers.push("GCS")

    return <div className="row justify-content-center">
        <div className="col-md-11 mt-4">
            <form>
                <div className="mb-3">
                    <label htmlFor="designTitle" className="form-label">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="designTitle" 
                        value={designTitle}
                        onChange={(e) => setDesignTitle(e.target.value)}
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="designDescription" className="form-label">Description</label>
                    <textarea className="form-control" id="designDescription" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="designDescription" className="form-label">Providers</label>
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
                                <label className="form-check-label ms-4" htmlFor="aws">
                                    <img src={aws} height="28" width="28" alt="AWS"></img>
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
                                <label className="form-check-label ms-4" htmlFor="azs">
                                    <img src={azure} height="28" width="28" alt="AZURE"></img>
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
                                <label className="form-check-label ms-4" htmlFor="gcs">
                                    <img src={google} height="28" width="28" alt="GC"></img>
                                    <p className="text-center">
                                        <small>Google</small>
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="mb-3">
                    Created: <span className="text-secondary">2 Days Ago</span>
                </div>
                <div className="mb-3">
                    Updated: <span className="text-secondary">2 Days Ago</span>
                </div>
                <hr />
            </form>
        </div>
    </div>
}

export default ProjectDetailsWindow