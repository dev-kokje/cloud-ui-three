import { Dropdown, Table } from "react-bootstrap"
import { ThreeDots } from "react-bootstrap-icons"

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
            <tr>
                <th scope="row" className="ht-80">Demo Design</th>
                <td className="ht-80">AWS</td>
                <td className="ht-80">Me</td>
                <td className="ht-80">Yesterday</td>
                <td className="ht-80">Today</td>
                <td className="ht-80">
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                            <ThreeDots />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
        </tbody>
    </Table>
}

export default RecentDesignsTable