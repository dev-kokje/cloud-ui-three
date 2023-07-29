import { useEffect, useState } from "react"

const AWS_REGIONS = [
    {
        "key": "eu-central-1",
        "value": "eu-central-1" 
    },
    {
        "key": "eu-west-1",
        "value": "eu-west-1" 
    },
    {
        "key": "us-east-1",
        "value": "us-east-1" 
    }
]

const PLATFORMS = [
    {
        "key": "Amazon Linux",
        "value": "amazon-linux" 
    },
    {
        "key": "macOS",
        "value": "macOS" 
    },
    {
        "key": "Ubuntu",
        "value": "Ubuntu" 
    },
    {
        "key": "Windows",
        "value": "Windows" 
    },
    {
        "key": "Debian",
        "value": "Debian" 
    }
]

const INSTANCE_TYPES = [
    {
        "key": "t2.micro",
        "value": "t2.micro",
        "family": "t2",
        "vCPU": "1",
        "memory": "1",
        "freeTier": true 
    },
    {
        "key": "t2.small",
        "value": "t2.small",
        "family": "t2",
        "vCPU": "1",
        "memory": "2",
        "freeTier": false
    },
    {
        "key": "t2.medium",
        "value": "t2.medium",
        "family": "t2",
        "vCPU": "2",
        "memory": "4",
        "freeTier": false 
    },
    {
        "key": "t2.large",
        "value": "t2.large",
        "family": "t2",
        "vCPU": "2",
        "memory": "8",
        "freeTier": false 
    },
    {
        "key": "t2.xlarge",
        "value": "t2xlarge",
        "family": "t2",
        "vCPU": "4",
        "memory": "16",
        "freeTier": false 
    }
]

const InstanceInfoCard = ({name, family, vCPU, memory, freeTier}) => {
    return <div className="card">
        <div className="card-body">
            <h5 className="card-subtitle mb-2"> { name } </h5>
            <div className="row d-flex justify-content-between">
                <div className="col-md-4 text-muted">
                    Family: {family}
                </div>
                <div className="col-md-4 text-muted">
                    vCPU: {vCPU}
                </div>
                <div className="col-md-4 text-muted">
                    Memory: {memory} GiB
                </div>
            </div>
        </div>
        {
            freeTier && <div style={{ position: 'absolute', top: '0', right: '0' }}>
                <span style={{borderRadius: "0px 0px 5px 5px"}} className="badge text-success">
                    Free Tier Eligible
                </span>
            </div>
        }
    </div>
}

const getUniqueInstanceFamilies = () => {
    const uniqueInstanceFamiliesSet = new Set(INSTANCE_TYPES.map(element => element.family))
    return Array.from(uniqueInstanceFamiliesSet)
}

const getUniqueInstanceVCPU = () => {
    const uniqueInstanceFamiliesSet = new Set(INSTANCE_TYPES.map(element => element.vCPU))
    return Array.from(uniqueInstanceFamiliesSet)
}

const getUniqueInstanceMemory = () => {
    const uniqueInstanceFamiliesSet = new Set(INSTANCE_TYPES.map(element => element.memory))
    return Array.from(uniqueInstanceFamiliesSet)
}

const EC2ResourceDetails = (props) => {

    const [filterFamily, setFilterFamily] = useState("")
    const [filterVCpu, setFilterVCpu] = useState("")
    const [filterMemory, setFilterMemory] = useState("")
    const [filteredInstanceTypes, setFilteredInstanceTypes] = useState(INSTANCE_TYPES)

    useEffect(() => {
        setFilteredInstanceTypes(
            INSTANCE_TYPES.filter((item) => {
                if (!filterFamily && !filterVCpu && !filterMemory) {
                    return true
                }
                if (filterFamily && item.family !== filterFamily) {
                    return false
                }
                if (filterVCpu && item.vCPU !== filterVCpu) {
                    return false
                }
                if (filterMemory && item.memory !== filterMemory) {
                    return false
                }
                return true
            })
        )
    }, [filterFamily, filterVCpu, filterMemory])

    const handleInstanceFilterChange = async (e) => {
        if(e.target.id === "instanceFamilyFilter") {
            setFilterFamily(e.target.value)
        } else if(e.target.id === "instanceVCpuFilter") {
            setFilterVCpu(e.target.value)
        } else if(e.target.id === "instanceMemoryFilter") {
            setFilterMemory(e.target.value)
        }

        
    }

    return <>
        <div className="mb-2">
            <label htmlFor="resource-name" className="form-label">
                <small> Name </small>
            </label>
            <input 
                type="text" 
                className="form-control" 
                id="resource-name" 
                placeholder="Resource Name"
            />
        </div>
        <div className="mb-2">
            <label htmlFor="aws-region" className="form-label">
                <small>Region</small>
            </label>
            <select 
                className="form-select" 
                id="aws-region"
            >
                {
                    AWS_REGIONS.map((option, index) => <option key={index} value={option.value}> { option.key } </option>)
                }
            </select>
        </div>
        <hr style={{ margin: "10px -25px" }} />
        <div className="mb-2">
            <label htmlFor="platform" className="form-label">
                <small>Platform</small>
            </label>
            <select 
                className="form-select" 
                id="platform"
            >
                {
                    PLATFORMS.map((option, index) => <option key={index} value={option.value}> { option.key } </option>)
                }
            </select>
        </div>
        <div className="mb-2">
            <label htmlFor="ami-id" className="form-label">
                <small>Amazon Machine Image</small>
            </label>
            <select className="form-select" id="ami-id">
                {
                    PLATFORMS.map((option, index) => <option key={index} value={option.value}> { option.key } </option>)
                }
            </select>
        </div>
        <hr style={{ margin: "10px -25px" }} />
        <div className="mb-2">
            <label htmlFor="instance-type" className="form-label">
                <small>Instance Type</small>
            </label>
            <select className="form-select" id="instance-type">
                {
                    INSTANCE_TYPES.map((option, index) => <option key={index} value={option.value}> { option.key } </option>)
                }
            </select>
            <div id="instance-type-help" className="form-text text-end">
                <button type="button" className="btn btn-sm" data-bs-toggle="modal" data-bs-target="#ec2InstanceTypeHelpModal">Need help?</button>
            </div>
        </div>
        <hr style={{ margin: "10px -25px" }} />

        <div className="modal fade" id="ec2InstanceTypeHelpModal" tabIndex={-1} aria-labelledby="ec2InstanceHelpModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fs-5" id="ec2InstanceHelpModalLabel"> EC2 Instance Types </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="instanceFamily" className="form-label">Family</label>
                                    <select 
                                        type="email" 
                                        className="form-select" 
                                        id="instanceFamilyFilter"
                                        value={filterFamily}
                                        onChange={handleInstanceFilterChange}
                                    >
                                        <option value=""></option>
                                        {
                                            getUniqueInstanceFamilies().map((family, index) => <option key={index} value={family}> { family } </option>)
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="instanceFamily" className="form-label">vCPU</label>
                                    <select 
                                        type="email" 
                                        className="form-select" 
                                        id="instanceVCpuFilter"
                                        value={filterVCpu}
                                        onChange={handleInstanceFilterChange}
                                    >
                                        <option value=""></option>
                                        {
                                            getUniqueInstanceVCPU().map((vCPU, index) => <option key={index} value={vCPU}> { vCPU } </option>)
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="instanceFamily" className="form-label">Memory (GiB)</label>
                                    <select 
                                        type="email" 
                                        className="form-select" 
                                        id="instanceMemoryFilter"
                                        value={filterMemory}
                                        onChange={handleInstanceFilterChange}
                                    >
                                        <option value=""></option>
                                        {
                                            getUniqueInstanceMemory().map((memory, index) => <option key={index} value={memory}> { memory } </option>)
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            {
                                filteredInstanceTypes.map((element, index) => <div key={index} className="col-md-12 my-1">
                                    <InstanceInfoCard
                                        key={index}
                                        name={element.key}
                                        family={element.family}
                                        vCPU={element.vCPU}
                                        memory={element.memory}
                                        freeTier={element.freeTier}
                                    />
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default EC2ResourceDetails