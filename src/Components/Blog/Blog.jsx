import PropTypes from 'prop-types';
import { FaBeer } from 'react-icons/fa';
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
// import { FaBeer } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkdsAsRead}) => {

    const {id, title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;

    return (
        <div className=' mb-20 space-y-4'>
            <img className=' w-full mb-8' src={cover} alt={`cover picture of ${title}`} />
            <div className="flex justify-between mb-4">
                <div className='flex justify-between items-center'>
                    <img className='w-14 rounded-full ' src={author_img} alt="" />
                    <div className='ml-2'>
                        <h3 className='text-2xl '>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=' flex justify-between items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className=' ml-2 text-red-600 text-2xl'> <IoBookmark></IoBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span> )
                }
            </p>
            <button onClick={() => handleMarkdsAsRead(id, reading_time)} className=' text-purple-400 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.prototype = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkdsAsRead: PropTypes.func
}

export default Blog;