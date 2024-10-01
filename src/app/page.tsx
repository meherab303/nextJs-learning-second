import LatestBlogs from "@/latestBlogs/LatestBlogs";

const HomePage = async () => {
  const data=await fetch('http://localhost:5000/blogs')
  const blogs=await data.json()
  return (
    <div className="w-[90%] mx-auto my-5">
     <LatestBlogs blogs={blogs}/>
    </div>
  );
};

export default HomePage;
