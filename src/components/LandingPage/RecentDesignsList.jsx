import RecentDesignsTable from "./RecentDesignsTable/RecentDesignsTable"

const RecentDesignsList = (props) => {

    return <div className="row d-flex justify-content-center mt-4 body-container">
        <div className="col-md-11 fw-bold fs-5">Recent Designs</div>
        <div className="col-md-11 fw-bold mt-4">
            <RecentDesignsTable {...props} />
        </div>
    </div>
}

export default RecentDesignsList