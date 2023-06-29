import { useKeycloak } from "@react-keycloak/web"
import axios from "axios"
import { useState } from "react"

const API_BASE_URL = "http://localhost:8082"

const useElementsProvider = () => {

    const [elements, setElements] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { keycloak } = useKeycloak()

    const loadElements = async () => {
        try {
            setLoading(true)
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${API_BASE_URL}/api/element_group`,
                headers: { 
                    'Authorization': `Bearer ${keycloak.token}`
                }
            }
            const response = await axios.request(config)
            setElements(response.data)
            setError(null)
        } catch (err) {
            setElements([])
            setError(err)
            console.log("ERROR: Cannot fetch elements - ", err)
        } finally {
            setLoading(false)
        }
    } 

    return { elements, loading, error, loadElements }

}

export default useElementsProvider