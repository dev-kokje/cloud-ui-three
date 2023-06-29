import axios from "axios"

const API_BASE_URL = "http://localhost:8080"

const tokenRequest = (username, password) => {

    const url = API_BASE_URL + "/realms/cloud-ui-three/protocol/openid-connect/token"
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    const data = new URLSearchParams()
    data.append('client_id', 'frontend')
    data.append('grant_type', 'password')
    data.append('username', username)
    data.append('password', password)

    axios.post(url, data, { headers })
    .then(response => {
        console.log('Response:', response.data);
        return response.data
    })
    .catch(error => {
        console.error('Error:', error);
    })
}