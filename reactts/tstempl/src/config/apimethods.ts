import axios from "axios";

export const apiHandle = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{
        Authorization : `Bearer ${token}`
    }
})

export const Get = (endpoint:string,id?:string|number)=>{
    return apiHandle.get(`${endpoint}/${id?id:''}`)
}
export const Post = ()=>{}
export const Put = ()=>{}
export const Delete = ()=>{}