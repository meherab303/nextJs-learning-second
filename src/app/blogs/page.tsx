
'use client'

import BlogCard from "@/components/ui/BlogCard";
import { useGetAllBlogsQuery } from "@/redux/api/baseApi";
import { TBlogs } from "@/types";


const BlogsPage = () => {
    // const res=await fetch('http://localhost:5000/blogs',{
    //     cache:'no-store'
    // })
    // const blogs=await res.json()
    const {data:blogs,isError,isLoading,error}=useGetAllBlogsQuery(undefined)
    return (
        <div className="w-[90%] mx-auto">
             <h1 className="text-center text-3xl my-5">All Blogs from <span className="text-4xl text-accent">Blogiz</span></h1>
             <p className="text-center w-2/4 mx-auto text-gray-400">
             <i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i>
             </p>
             <div className="grid grid-cols-3 gap-5 my-10">
             {
    blogs?.map((blog:TBlogs)=><BlogCard key={blog.id} blog={blog}></BlogCard>)
}
             </div>
        </div>
    );
};

export default BlogsPage;