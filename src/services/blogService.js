import axios from "axios"
const BASE_URL="https://6a6659c3189fe5869eb68008.mockapi.io/Blogs"

export const getBlogs=async()=>{

    const response=await axios.get(BASE_URL)

    return response.data

}