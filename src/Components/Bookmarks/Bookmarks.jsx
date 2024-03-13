import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className=' md:w-1/3 ml-4 mt-2 pt-4'>
            <div className=' bg-[#6047EC1A] rounded-lg px-12 py-6'>
                <h3 className="text-2xl font-semibold text-[#6047EC] text-center">Spent time on read : {readingTime}</h3>
            </div>
            <div className=' mt-6 bg-[#1111110D] p-7 rounded-xl'>
            <h2 className=' text-2xl font-semibold'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;