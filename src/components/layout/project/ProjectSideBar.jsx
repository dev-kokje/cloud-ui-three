import BasicElement from "../../DesignPage/elements/BasicElement"

const elements = [
    {
        id: 1,
        icon: "VPC",
        shortName: "VPC",
        fullName: "Virtual Private Cloud",
        category: "Compute"
    },
    {
        id: 2,
        icon: "EC2",
        shortName: "EC2",
        fullName: "Elastic Compute Cloud",
        category: "Compute"
    },
    {
        id: 3,
        icon: "S3",
        shortName: "S3",
        fullName: "Simple Storage Service",
        category: "Storage"
    },
    {
        id: 4,
        icon: "ECS",
        shortName: "ECS",
        fullName: "Elastic Container Service",
        category: "Container Orchastration"
    }
]


const ProjectSideBar = (props) => {
    return <div className="row border-end h-100 d-flex justify-content-center">
        <div className="col-md-11 h-100">
            <div className="row py-4">
                <div className="col-md-12">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                            <i className="bi bi-search"></i>
                        </span>
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                </div>
            </div>
            <div className="row g-2">
                    {
                        elements.map((element) => 
                            <div className="col-md-6" key={element.id} >
                                <BasicElement
                                    icon={element.icon}
                                    shortName={element.shortName}
                                    fullName={element.fullName}
                                    category={element.category}
                                />
                            </div>
                        )
                    }
            </div>
        </div>
    </div>
}

export default ProjectSideBar