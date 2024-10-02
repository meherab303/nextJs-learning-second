'use server'

import { TBlogs } from "@/types"
import { cache } from "react"
export const createBlog=async(data:TBlogs)=>{
    const res=await fetch('http://localhost:5000/blogs',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data),
        cache:'no-store'
    })
    const blogInfo=await res.json()



    return blogInfo
}