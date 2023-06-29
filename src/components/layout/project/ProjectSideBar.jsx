import { useEffect, useState } from "react"
import ElementsPanel from "../../DesignPage/elements/ElementsPanel"
import { getAllElements } from "../../../api/elements-api"

const ProjectSideBar = () => {

    const[elements, setElements] = useState([])

    useEffect(() => {
        console.log("Loading elements")
        setElements(getAllElements())
    }, [])

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
                    {/* <ElementsPanel elements={elements} /> */}
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