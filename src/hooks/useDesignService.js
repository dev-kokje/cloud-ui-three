import { useKeycloak } from "@react-keycloak/web"
import axios from "axios"
import { useState } from "react"

const API_BASE_URL = 'http://localhost:8082'

const useDesignService = () => {
    const { keycloak } = useKeycloak()
    const [designs, setDesigns] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchAllDesignsForUser = async (userId) => {
        setLoading(true)
        try{
            let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `${API_BASE_URL}/api/design-details/${userId}`,
                    headers: { 
                    'Authorization': `Bearer ${keycloak.token}`
                    }
                };
            const response = await axios.request(config)
            setDesigns(response.data)
            setError(null)
        } catch (error) {
            console.log("Error while fetching data - ", error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return { designs, loading, error, fetchAllDesignsForUser }
}

export default useDesignService