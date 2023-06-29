import { useEffect } from "react"
import RecentDesignsTable from "./RecentDesignsTable/RecentDesignsTable"
import { useKeycloak } from "@react-keycloak/web"
import useDesignService from "../../hooks/useDesignService"

const RecentDesignsList = (props) => {

    const { designs, loading, error, fetchAllDesignsForUser, removeDesign } = useDesignService()
    const { keycloak } = useKeycloak()

    useEffect(() => {
        if(keycloak.authenticated) {
            fetchAllDesignsForUser('123')
        }
    }, [keycloak.authenticated])

    const deleteItemHandler = (itemId) => {
        removeDesign(itemId, "123")
    }

    return <div className="row d-flex justify-content-center mt-4 body-container">
        {
            loading && <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        }
        <div className="col-md-11 fw-bold fs-5">Recent Designs</div>
        {
            !error && designs.length === 0 && <div className="col-md-11 fw-bold mt-4">
                <div className="alert alert-primary" role="alert">
                    <small>You don't have any designs in your list. Create one now by clicking button on the top bar.</small>
                </div>   
            </div>
        }
        {
            error && <div className="col-md-11 fw-bold mt-4">
                <div className="alert alert-danger text-center" role="alert">
                    <small>
                        Oops ! Error occured while fetching your data. Please check if the Backend is running.
                        <i className="mx-2 bi bi-emoji-neutral"></i>
                    </small>
                </div>   
            </div>
        }
        {
            designs.length > 0 && <div className="col-md-11 fw-bold mt-4">
                <RecentDesignsTable recentDesigns={designs} deleteItem={deleteItemHandler} />
            </div>
        }
    </div>
}

export default RecentDesignsList