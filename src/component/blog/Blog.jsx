import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";


const Blog = ({blog,handleAddtoBookmarks,handleMarkasRead}) => {
    const {title,cover, author,reading_time,author_img,posted_date,hashtags} = blog
    // console.log(blog);
    return (
        <div className='space-y-7 mb-20'>
            <img className='w-full mb-4 rounded-lg' src={cover} alt={`Cover picture of ${title}`} />
            <div className='flex justify-between items-center mb-5'>
                <div className='flex gap-4 items-center'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='items-center flex gap-4'>
                    <span>{reading_time} min read </span>
                    <button onClick={() => handleAddtoBookmarks(blog)} className='text-xl text-red-400'>
                        <FaRegBookmark></FaRegBookmark>
                        </button>
                </div>
            </div>
            <h2 className='text-4xl mb-2'>{title}</h2>
            <p className='mb-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx}>  <a href="">#{hash} </a> </span> )
                }
            </p>
            <button onClick={() => handleMarkasRead(reading_time)} className='text-purple-600 font-bold underline'>Mark as Read</button>
        </div>
    );
};

Blog.propType = {
    blog: PropTypes.object.isRequired,
    handleAddtoBookmarks : PropTypes.func.isRequired
}
export default Blog;