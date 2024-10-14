import { useEffect, useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div>
            <h3 className="text-2xl">Total blogs : {blogs.length}</h3>
        </div>
    );
};

export default Blogs;