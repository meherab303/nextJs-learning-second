import BlogDetails from '@/components/ui/BlogDetails';
import React from 'react';
 type TBlogId={
    params:{
        blogId:string
    }
 }
const BlogDetailsPage =async ({params}:TBlogId) => {
    const res=await fetch(`http://localhost:5000/blogs/${params.blogId}`,{
        cache:'no-store'
    })
    const blog=await res.json()
    return (
        <div className='my-16'>
            <BlogDetails blog={blog}></BlogDetails>
        </div>
    );
};

export default BlogDetailsPage;