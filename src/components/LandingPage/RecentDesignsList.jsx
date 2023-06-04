import { useEffect, useState } from "react"
import RecentDesignsTable from "./RecentDesignsTable/RecentDesignsTable"
import { deleteDesign, getAllDesignsForUser } from "../../api/design-api"

const RecentDesignsList = (props) => {

    const [designsData, setDesignsData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        getAllDesignsForUser("123")
        .then(response => setDesignsData(response.data))
        .catch(err => setError(err))
    }, [])

    const deleteItemHandler = (itemId) => {
        deleteDesign(itemId, "123")
        .then(__ => setDesignsData(designsData.filter(design => design.id !== itemId)))
        .catch(err => setError(err))
    }

    return <div className="row d-flex justify-content-center mt-4 body-container">
        <div className="col-md-11 fw-bold fs-5">Recent Designs</div>
        {
            !error && designsData.length === 0 && <div className="col-md-11 fw-bold mt-4">
                <div className="alert alert-primary" role="alert">
                    <small>You don't have any designs in your list. Create one now by clicking button on the top bar.</small>
                </div>   
            </div>
        }
        {
            error && <div className="col-md-11 fw-bold mt-4">
                <div className="alert alert-danger text-center" role="alert">
                    <small>
                        Oops ! Error occured while fetching your data. Please check if the Backend is up.
                        <i class="mx-2 bi bi-emoji-neutral"></i>
                    </small>
                </div>   
            </div>
        }
        {
            designsData.length > 0 && <div className="col-md-11 fw-bold mt-4">
                <RecentDesignsTable recentDesigns={designsData} deleteItem={deleteItemHandler} />
            </div>
        }
    </div>
}

export default RecentDesignsList