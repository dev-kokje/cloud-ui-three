import ElementsPanel from "../../DesignPage/elements/ElementsPanel"

const newElements = {
    1: {
        name: "Compute",
        categories: [
            {
                name: "Instances",
                alternateName: "virtual machines",
                elements: [
                    {
                        id: 1,
                        icon: "logo/EC2",
                        shortName: "EC2",
                        fullName: "Amazon Elastic Compute Cloud"
                    },
                    {
                        id: 2,
                        icon: "compute/Spot",
                        shortName: "EC2 Spot",
                        fullName: "Amazon EC2 Spot Instances"
                    },
                    {
                        id: 3,
                        icon: "compute/AutoScaling",
                        shortName: "Auto Scaling",
                        fullName: "Amazon Auto Scaling"
                    },
                    {
                        id: 4,
                        icon: "logo/Lightsail",
                        shortName: "Lightsail",
                        fullName: "Amazon Lightsail"
                    },
                    {
                        id: 5,
                        icon: "logo/Batch",
                        shortName: "Batch",
                        fullName: "AWS Batch"
                    }
                ]
            },
            {
                name: "Containers",
                alternateName: "",
                elements: [
                    {
                        id: 1,
                        icon: "logo/ECS",
                        shortName: "ECS",
                        fullName: "Amazon Elastic Container Service"
                    },
                    {
                        id: 2,
                        icon: "compute/ECR",
                        shortName: "ECR",
                        fullName: "Amazon Elastic Container Registry"
                    },
                    {
                        id: 3,
                        icon: "logo/ES",
                        shortName: "EKS",
                        fullName: "Amazon Elastic Kubernetes Service"
                    },
                    {
                        id: 4,
                        icon: "general/Server",
                        shortName: "Fargate",
                        fullName: "AWS Fargate"
                    },
                    {
                        id: 5,
                        icon: "general/Server",
                        shortName: "App Runner",
                        fullName: "AWS App Runner"
                    }
                ]
            },
            {
                name: "Serverless",
                alternateName: "",
                elements: [
                    {
                        id: 1,
                        icon: "logo/Lambda",
                        shortName: "Lambda",
                        fullName: "AWS Lambda"
                    }
                ]
            },
            {
                name: "Edge and hybrid",
                alternateName: "",
                elements: [
                    {
                        id: 1,
                        icon: "logo/SES",
                        shortName: "Outposts",
                        fullName: "AWS Outposts"
                    },
                    {
                        id: 2,
                        icon: "logo/Snowball",
                        shortName: "Snow",
                        fullName: "AWS Snow Family"
                    },
                    {
                        id: 3,
                        icon: "logo/WAF",
                        shortName: "Wavelength",
                        fullName: "AWS Wavelength"
                    },
                    {
                        id: 5,
                        icon: "logo/Lex",
                        shortName: "Local Zones",
                        fullName: "AWS Local Zones"
                    }
                ]
            }
        ]
    }
}




const ProjectSideBar = (props) => {
    return <div className="row border-end h-100 d-flex justify-content-center">
        <div className="col-md-12 h-100">
            <div className="row py-4 d-flex justify-content-center">
                <div className="col-md-11">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                            <i className="bi bi-search"></i>
                        </span>
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-11">
                    <ElementsPanel elements={newElements} />
                </div>
                <hr/>
                    {/* {
                        elements.map((element) => 
                            <div className="col-md-6" key={element.id} >
                                <ElementCard
                                    icon={element.icon}
                                    shortName={element.shortName}
                                    fullName={element.fullName}
                                    category={element.category}
                                />
                            </div>
                        )
                    } */}
            </div>
        </div>
    </div>
}

export default ProjectSideBar