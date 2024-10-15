import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <div className="md:w-1/3 bg-orange-100 ml-4">
            <h2 className="text-2xl text-center mt-2">Bookmarks Blogs :{bookmarks.length} </h2>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array
}
export default Bookmarks;