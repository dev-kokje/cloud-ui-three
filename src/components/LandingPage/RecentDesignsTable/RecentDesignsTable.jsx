import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"

import awsIcon from "../../../assets/icons/aws.png"
import azureIcon from "../../../assets/icons/azure.png"
import gcpIcon from "../../../assets/icons/google-cloud.png" 
import ProviderBadge from "./ProviderBadge"
import { useDispatch } from "react-redux"
import { setDesign } from "../../../store/designSlice"
import { useNavigate } from "react-router-dom"

const MenuDropdown = ({design, deleteItem}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const editDesignHandler = () => {
        dispatch(
            setDesign({
                name: design.name,
                providers: design.providers
            })
        )
        navigate("/canvas-edit")
    }

    const { darkMode } = useContext(ThemeContext)

    return <div className="dropdown">
        <button className={darkMode ? "btn btn-dark dropdown-toggle" : "btn btn-light dropdown-toggle"} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-three-dots"></i>
        </button>
        <ul className="dropdown-menu pb-4">
            <li><button className="dropdown-item ht-40" onClick={editDesignHandler}><i className="bi bi-pencil"></i> Edit</button></li>
            <li><a className="dropdown-item ht-40" href="/home"><i className="bi bi-clipboard-plus"></i> Make Copy</a></li>
            <li><button className="dropdown-item ht-40" data-bs-toggle="modal" data-bs-target={`#${design.id}`}><i className="bi bi-trash"></i> Trash</button></li>
        </ul>

        <div className="modal fade" id={design.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row pt-2">
                            <div className="col-md-12 d-flex justify-content-center">
                                <p className="text-danger text-center rounded-circle border border-danger" 
                                    style={{fontSize: "40px", height: "65px", width: "65px", lineHeight: "65px"}}>
                                    <i className="bi bi-trash"></i>
                                </p>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center p-0">
                                <p className="text-center">
                                    Do you really want to delete "{design.name}"?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-sm btn-danger" onClick={() => deleteItem(design.id)} data-bs-dismiss="modal">Confirm Delete</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

const RecentDesignsTable = ({recentDesigns, deleteItem}) => {

    const getDaysDifference = (dateString) => {
        const dateComponents = dateString.split('T')[0].split('-')
        const timeComponents = dateString.split('T')[1].split(':')

        const isoDateString = `${dateComponents[0]}-${dateComponents[1]}-${dateComponents[2]}T${timeComponents[0]}:${timeComponents[1]}:${timeComponents[2]}`;

        const givenDate = new Date(Date.parse(isoDateString));

        const currentDate = new Date()
        const diffTime = Math.abs(currentDate - givenDate);
        const diffMinutes = Math.floor(diffTime / (1000 * 60)); 

        if(diffMinutes <= 5) {
            return "few minutes ago"
        } else if(diffMinutes <= 59) {
            return `${diffMinutes} minutes ago`
        } else if(diffMinutes <= (60 * 24)) {
            const diffHours = Math.floor(diffMinutes/60) 
            if(diffHours === 1) {
                return `${diffHours} hour ago`
            } else {
                return `${diffHours} hours ago`
            }
        } else {
            const diffDays = Math.floor(diffMinutes/(60*24))
            if(diffDays === 1) {
                return `${diffDays} day ago`
            } else {
                return `${diffDays} days ago`
            }
        }
    }

    return <table className="table">
        <thead>
            <tr>
                <th scope="col" className="text-secondary">Name</th>
                <th scope="col" className="text-secondary">Provider</th>
                <th scope="col" className="text-secondary">Created</th>
                <th scope="col" className="text-secondary">Last Opened</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
            {
                recentDesigns.map((design, index) => {

                    const providerBadges = design.providers.map((provider, index) => {
                        switch(provider) {
                            case "AWS": return <ProviderBadge key={index} image={awsIcon} />
                            case "Azure": return <ProviderBadge key={index} image={azureIcon} />
                            case "GCS": return <ProviderBadge key={index} image={gcpIcon} />
                            case "GCP": return <ProviderBadge key={index} image={gcpIcon} />
                            default: return <></>
                        }
                    })

                    return <tr key={index}>
                        <th scope="row" className="ht-60">{design.name}</th>
                        <td className="fw-normal ht-60">{providerBadges}</td>
                        <td className="fw-normal ht-60">{getDaysDifference(design.createdDt)}</td>
                        <td className="fw-normal ht-60">{getDaysDifference(design.updatedDt)}</td>
                        <td className="fw-normal ht-60">
                            <MenuDropdown design={design} deleteItem={deleteItem}/>
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
}

export default RecentDesignsTable