import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import './index.css'

const CreatePostPage = ({addPost, editPost, currentPost, setCurrentPost})=>{

    const initialPost = {
        id:null,
        start:"",
        destination:"",
        availableStartDate:"",
        availableEndDate:"",
        travelType:'plane',
        notes:''
    }
    const [postData, setPostData] = useState(initialPost)
    const [sucessPopUp , setSucessPopup] = useState(false)

    useEffect(()=>{
        if(currentPost){
            setPostData(currentPost)
        }
    }, [currentPost])
    
    const handleChangePost = (e)=>{
        const{name, value}= e.target
        setPostData((prevState) => ({...prevState, [name]: value}))
    }

    const onSubmitaddPost = (e)=>{
        e.preventDefault()
        if(postData.id){
            editPost(postData)
        }else{
            addPost(postData)
        }


        setSucessPopup(true);

        setTimeout(()=>{
            setSucessPopup(false)
        }, 2000)

        setPostData(initialPost)
        setCurrentPost(null)
    }

    return(
        <div className="trip-form-container">
            <form className="trip-planner-form" onSubmit={onSubmitaddPost}>
                <h3>Enter your Trip Details</h3>
                <div><input required type="text" name="start" onChange={handleChangePost} value={postData.start}/></div>
                <div><input  required type="text" name="destination" onChange={handleChangePost} value={postData.destination}/></div>
                <div><input required type="date" name="availableStartDate" onChange={handleChangePost} value={postData.availableStartDate}/></div>
                <div><input required type="date" name="availableEndDate" onChange={handleChangePost} value={postData.availableEndDate}/></div>
                <div className="travel-type-container">
                    <select name="travelType" onChange={handleChangePost} value={postData.travelType} >
                        <option value="plane">Plane</option>
                        <option value="road">Road</option>
                        <option value="cruship">Cruship</option>
                    </select>
                </div>
                <div>
                    <textarea name="notes" cols={55} rows={10} onChange={handleChangePost} value={postData.notes}></textarea><br/>
                    <button type="submit" className="btn-add-save">{postData.id ? 'Save Trip' : 'Add Trip'}</button>
                </div>
            </form>
            <Popup
            open={sucessPopUp}
            closeOnDocumentClick
            onClose ={()=> setSucessPopup(false)}
            overlayStyle = {{background: 'rgba(0, 0, 0, 0.5)'}}
            >
                <div className="popup-content">Post Saved Successfully </div>
            </Popup>

        </div>
    )
}

export default CreatePostPage