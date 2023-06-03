import { useEffect, useState } from "react"
import RecentDesignsList from "./RecentDesignsList"
import axios from "axios"

const LandingPageMainContainer = (props) => {

    const [designsData, setDesignsData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const getData = async() => {
            try {
                const response = await axios.get("http://localhost:8080/api/design-details/" + 123)
                setDesignsData(response.data)
                setError(null)
            } catch (err) {
                setError(err.message);
                setDesignsData([]);
            }
        }
        getData()        
    }, [])

    const deleteItem = (itemId) => {
        const deleteDesign = async() => {
            try {
                const response = await axios.delete("http://localhost:8080/api/design-details/" + itemId + "/" + 123)
                return response
            } catch (err) {
                setError(err.message)
            }
        }
        deleteDesign().then((response) => {
            setDesignsData(designsData.filter(design => design.id !== itemId))
        })
    }

    return <div className="container-fluid">
        {
            designsData.length > 0 && <RecentDesignsList recentDesigns={designsData} deleteItem={deleteItem} />
        }
    </div>
}

export default LandingPageMainContainer