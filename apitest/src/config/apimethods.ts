import axios from "axios"

let baseUrl = `${process.env.REACT_APP_APIURL}`

let apiInstance = axios.create({
    baseURL:baseUrl,
    headers:{
        Authorization:`Bearer ${localStorage.getItem('authToken')}`
    }
})

export let Get = (endPoint:string,queryParams?:any)=> apiInstance.get(`/${endPoint}`,{
    params:{...queryParams}
})

