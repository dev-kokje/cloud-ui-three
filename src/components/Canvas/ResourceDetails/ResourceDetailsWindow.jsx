import { elements } from "../../icons/aws/elements"
import ResourceDetailsForm from "./ResourceDetailsForm"

const ResourceDetailsWindow = ({ selectedElement }) => {

    console.log("Selected Element - ", selectedElement)

    return <>
        {
            selectedElement === null && <div className="text-center alert alert-danger m-4">
                <small>Select Element to Display Details</small>
            </div>
        }
        {
            selectedElement !== null && <div className='row d-flex justify-content-center'>
                <div className='col-md-11 p-4'>
                    <div className='row'>
                        <div className='col-md-3'>
                            { elements[selectedElement.resource.name][selectedElement.resource.type] }
                        </div>
                        <div className="col-md-9 p-1">
                            <p className='fs-6 p-0 m-0'>{selectedElement.resource.shortName}</p>
                            <p className='text-secondary p-0 m-0' style={{ fontSize: "11px" }}>
                                {selectedElement.resource.fullName}
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='col-md-11'>
                    <ResourceDetailsForm />
                </div>
            </div>
        }
    </>
}

export default ResourceDetailsWindow