import BlogCard from "@/components/ui/BlogCard";
import LatestBlogCard from "@/components/ui/LatestBlogCard";
import { TBlogs } from "@/types";
import Link from "next/link";


const LatestBlogs = ({blogs}:{blogs:TBlogs[]}) => {
    return (
        <div>
             <h1 className="text-center text-3xl my-5">Latest Blogs from <span className="text-4xl text-accent">Blogiz</span></h1>
             <p className="text-center w-2/4 mx-auto text-gray-400">
             <i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i>
             </p>
             <div className="grid grid-cols-2 gap-5 my-5">
{
    blogs?.slice(0,2).map((blog)=><LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>)
}

             </div>
             <div className="grid grid-cols-3 gap-5">
             {
    blogs?.slice(2,5).map((blog)=><BlogCard key={blog.id} blog={blog}></BlogCard>)
}
             </div>
             <div className="text-center my-3">
             <Link href='/blogs' ><button className="btn btn-accent ">see all</button></Link>
            
             </div>
        </div>
    );
};

export default LatestBlogs;