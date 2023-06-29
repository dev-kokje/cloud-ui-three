import axios from "axios"

const API_BASE_URL = "http://localhost:8082"

export const getAllElements = () => axios.get(API_BASE_URL + "/api/element_group")