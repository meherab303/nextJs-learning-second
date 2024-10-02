import LoadingCard from '@/components/ui/LoadingCard';
import { TBlogs } from '@/types';
import React from 'react';

const BlogsLoader = async() => {
    const res=await fetch('http://localhost:5000/blogs')
    const blogs=await res.json()
    return (
        <div className='grid grid-cols-3'>
            {
blogs?.map((blog:TBlogs)=><LoadingCard key={blog.id}></LoadingCard>)
            }
        </div>
    );
};

export default BlogsLoader;