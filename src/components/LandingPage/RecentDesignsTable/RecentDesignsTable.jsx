import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"

const recentDesigns = [
    {
        dname: "Demo design 1",
        provider: "AWS",
        people: "me",
        created: "Yesterday",
        lastUpdated: "3 hours ago" 
    },
    {
        dname: "Demo design 2",
        provider: "Azure",
        people: "me",
        created: "Yesterday",
        lastUpdated: "6 hours ago" 
    }
]

const MenuDropdown = () => {

    const { darkMode } = useContext(ThemeContext)

    return <div className="dropdown">
        <button className={darkMode ? "btn btn-dark dropdown-toggle" : "btn btn-light dropdown-toggle"} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-three-dots"></i>
        </button>
        <ul className="dropdown-menu pb-4">
            <li><a className="dropdown-item ht-40" href="/home"><i className="bi bi-pencil"></i> Edit</a></li>
            <li><a className="dropdown-item ht-40" href="/home"><i className="bi bi-clipboard-plus"></i> Make Copy</a></li>
            <li><a className="dropdown-item ht-40" href="/home"><i className="bi bi-trash"></i> Trash</a></li>
        </ul>
    </div>
}

const RecentDesignsTable = (props) => {

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
                        <th scope="row" className="ht-60">{design.dname}</th>
                        <td className="fw-normal ht-60">{design.provider}</td>
                        <td className="fw-normal ht-60">{design.people}</td>
                        <td className="fw-normal ht-60">{design.created}</td>
                        <td className="fw-normal ht-60">{design.lastUpdated}</td>
                        <td className="fw-normal ht-60">
                            <MenuDropdown />
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
}

export default RecentDesignsTable