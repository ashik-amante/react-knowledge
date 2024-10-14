import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title,cover, author,reading_time,author_img,posted_date,hashtags} = blog
    console.log(blog);
    return (
        <div className='space-y-7 mb-10'>
            <img className='w-[800px] mb-4' src={cover} alt={`Cover picture of ${title}`} />
            <div className='flex justify-between items-center mb-5'>
                <div className='flex gap-4 items-center'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                </div>
            </div>
            <h2 className='text-4xl mb-2'>{title}</h2>
            <p className='mb-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx}>  <a href="">#{hash} </a> </span> )
                }
            </p>
            <a className='' href="">Mark As Read update</a>
        </div>
    );
};

Blog.propType = {
    blog: PropTypes.object.isRequired
}
export default Blog;