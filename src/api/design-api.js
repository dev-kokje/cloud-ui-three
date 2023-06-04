import axios from "axios"

const API_BASE_URL = "http://localhost:8080"

export const saveNewDesign = (data) => axios.post(API_BASE_URL + "/api/design-details", data)

export const getAllDesignsForUser = (userId) => axios.get("http://localhost:8080/api/design-details/" + userId)

export const deleteDesign = (itemId, userId) => axios.delete("http://localhost:8080/api/design-details/" + itemId + "/" + userId)