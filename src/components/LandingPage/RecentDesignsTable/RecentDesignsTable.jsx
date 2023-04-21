import { Dropdown, Table } from "react-bootstrap"
import {  Clipboard, Pencil, ThreeDots, Trash } from "react-bootstrap-icons"

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

const MenuDropdown = (props) => {

    return <Dropdown>
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
            <ThreeDots />
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1"><Pencil /> Edit</Dropdown.Item>
            <Dropdown.Item href="#/action-2"><Clipboard /> Make Copy</Dropdown.Item>
            <Dropdown.Item href="#/action-3"><Trash /> Trash</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
}

const RecentDesignsTable = (props) => {

    return <Table hover>
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
        <tbody>
            {
                recentDesigns.map((design) => {
                    return <tr>
                        <th scope="row" className="ht-60">{design.dname}</th>
                        <td className="ht-60">{design.provider}</td>
                        <td className="ht-60">{design.people}</td>
                        <td className="ht-60">{design.created}</td>
                        <td className="ht-60">{design.lastUpdated}</td>
                        <td className="ht-60">
                            <MenuDropdown />
                        </td>
                    </tr>
                })
            }
        </tbody>
    </Table>
}

export default RecentDesignsTable