import { baseUrl } from "./baseURL"
import { commonAPI } from "./commonapi"



// api to upload books
export const uploadBookApi = async(reqBody)=>{
    return await commonAPI('POST',`${baseUrl}/books`,reqBody)
}

export const getBooksApi = async()=>{
    return await commonAPI('GET',`${baseUrl}/books`,"")
}

export const deleteBookApi = async(id)=>{
    return await commonAPI('DELETE',`${baseUrl}/books/${id}`,{})
}