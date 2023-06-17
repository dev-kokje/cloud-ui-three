import { ec2 } from '../../icons/aws/ec2/ec2'

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
                <div className='col-md-11'>
                    { ec2[selectedElement.resource.type] }
                </div>
            </div>
        }
    </>
}

export default ResourceDetailsWindow