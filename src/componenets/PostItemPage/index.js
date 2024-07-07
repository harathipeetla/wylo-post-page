import { RiDeleteBin6Fill, RiFileEditFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

import './index.css'

const PostItemPage = ({travelDetails, deletePost, setCurrentPost, handleToggleBookmark})=>{
    
    const handleDelete =()=>{
        deletePost(travelDetails.id)
    }

    const handleEdit =()=>{
        setCurrentPost(travelDetails)
    }

    return(
        <div className="post-item-container">
            <div className="image-container">
                <img src="https://res.cloudinary.com/dzvtpzf6b/image/upload/c_thumb,w_200,g_face/v1719929800/travel-concept-with-baggage_t53x3x.jpg"
                alt="travel-image"
                className="travel-image"
                />
            </div>
            <div className="icons-conatiner">
                <div className="edit-icon">
                    <RiFileEditFill className="icon" onClick={handleEdit}/>
                </div>
                <div className="delete-icon">
                    <RiDeleteBin6Fill className="icon" onClick={handleDelete}/>
                </div>
                <div>
                <span onClick={()=> handleToggleBookmark(travelDetails.id)}>{travelDetails.bookmarked ?  <FaBookmark className="icon"/> : <FaRegBookmark className="icon"/> }</span>
                </div>
            </div>
                <div className="travel-list-container">
                    <h3 className="place">{travelDetails.start} to {travelDetails.destination}</h3>
                    <p className="notes">{travelDetails.notes}</p>
                    <p className="dates">{travelDetails.availableStartDate} to {travelDetails.availableEndDate}</p>
                    <p className="type">{travelDetails.travelType}</p>
                </div>
        </div>
    )
}

export default PostItemPage


