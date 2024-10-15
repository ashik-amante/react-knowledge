import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddtoBookmarks}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h3 className="text-4xl">Blogs :{blogs.length}</h3>
            <div className="mb-20">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddtoBookmarks = {handleAddtoBookmarks}></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleAddtoBookmarks : PropTypes.func.isRequired
}
export default Blogs;