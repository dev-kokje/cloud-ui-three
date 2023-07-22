const ResourceDetailsForm = ({ formElements, initialState }) => {
    // return <form>
    //     <div class="mb-3">
    //         <label for="resourceName" class="form-label">Name</label>
    //         <input type="text" class="form-control" id="resourceName" />
    //     </div>
    //     <div class="mb-3">
    //         <label for="resourceName" class="form-label">Type</label>
    //         <input type="text" class="form-control" id="resourceName" />
    //     </div>
    // </form>

    const aws_regions = ["eu-central-1", "eu-west-1", "us-east1"]

    return <form>
        <div class="mb-3">
            <label for="resourceName" class="form-label">Name</label>
            <input type="text" class="form-control" id="resourceName" placeholder="Resource name" />
        </div>
        <div class="mb-3">
            <label for="resourceName" class="form-label">Region</label>
            <select class="form-select" id="resourceName">
            {
                aws_regions.map((region, index) => <option value={region} key={index}> {region} </option>)
            }
            </select>
        </div>
        <div class="mb-3">
            <label for="resourceName" class="form-label">
                AMI
                <small className="ms-2">(Amazon Machine Image)</small>
            </label>
            <select class="form-select" id="resourceName">
            {
                aws_regions.map((region, index) => <option value={region} key={index}> {region} </option>)
            }
            </select>
        </div>
    </form>
}

export default ResourceDetailsForm