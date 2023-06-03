import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"

const MenuDropdown = ({itemId, deleteItem}) => {

    const { darkMode } = useContext(ThemeContext)

    return <div className="dropdown">
        <button className={darkMode ? "btn btn-dark dropdown-toggle" : "btn btn-light dropdown-toggle"} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-three-dots"></i>
        </button>
        <ul className="dropdown-menu pb-4">
            <li><a className="dropdown-item ht-40" href="/home"><i className="bi bi-pencil"></i> Edit</a></li>
            <li><a className="dropdown-item ht-40" href="/home"><i className="bi bi-clipboard-plus"></i> Make Copy</a></li>
            <li><button className="dropdown-item ht-40" href="/home" data-bs-toggle="modal" data-bs-target="#deleteConfirmationBox"><i className="bi bi-trash"></i> Trash</button></li>
        </ul>

        <div className="modal fade" id="deleteConfirmationBox" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            {/* <div className="col-md-12 d-flex justify-content-center">
                                <p className="text-danger text-center rounded-circle border border-danger" 
                                    style={{fontSize: "40px", height: "65px", width: "65px", lineHeight: "65px"}}>
                                    <i className="bi bi-trash"></i>
                                </p>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center">
                                <p className="text-center">
                                    Are you sure?
                                </p>
                            </div> */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <p className="text-center">
                                    Do you really want to delete this design?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" onClick={() => deleteItem(itemId)} data-bs-dismiss="modal">Confirm Delete</button>
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
                <th scope="col" className="text-secondary">People</th>
                <th scope="col" className="text-secondary">Created</th>
                <th scope="col" className="text-secondary">Last Opened</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
            {
                recentDesigns.map((design, index) => {
                    return <tr key={index}>
                        <th scope="row" className="ht-60">{design.name}</th>
                        <td className="fw-normal ht-60">{design.provider}</td>
                        <td className="fw-normal ht-60">{design.people}</td>
                        <td className="fw-normal ht-60">{getDaysDifference(design.createdDt)}</td>
                        <td className="fw-normal ht-60">{getDaysDifference(design.updatedDt)}</td>
                        <td className="fw-normal ht-60">
                            <MenuDropdown itemId={design.id} deleteItem={deleteItem}/>
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
}

export default RecentDesignsTable