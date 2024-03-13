import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'
import { prototype } from "postcss/lib/previous-map";

const Blogs = ({handleAddToBookmark, handleMarkdsAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])


    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl ">Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmark = {handleAddToBookmark}
                    handleMarkdsAsRead={handleMarkdsAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.prototype = {
    handleAddToBookmark: PropTypes.func,
    handleMarkdsAsRead: PropTypes.func
}

export default Blogs;