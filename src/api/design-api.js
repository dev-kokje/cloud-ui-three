import axios from "axios"

const API_BASE_URL = "http://localhost:8082"

export const saveNewDesign = (data, token) => {
    console.log(token)
    axios.post(API_BASE_URL + "/api/design-details", data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const deleteDesign = (itemId, userId, token) => axios.delete(API_BASE_URL + "/api/design-details/" + itemId + "/" + userId, {
    headers: {
        'Authorization': `Bearer ${token}`
    }
})