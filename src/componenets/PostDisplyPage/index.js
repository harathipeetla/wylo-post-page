import { Component } from "react";

import {v4 as uuid} from 'uuid'

import Cookie from 'js-cookie'

import CreatePostPage from "../CreatePostPage";
import PostItemPage from "../PostItemPage";
import HeaderPage from "../HeaderPage";

import './index.css'

const initialList =[
    {
        id:1,
        start:'Bengaluru',
        destination:'Bali',
        availableStartDate:'20/10/2024',
        availableEndDate:'10/11/2020',
        travelType:'Plane',
        notes:'Bali is a province and island Indonesia, located in the lesser Sunda Islands, east of Java and west of Lombok',
        bookmarked:false

    },

    {
        id:2,
        start:'Bengaluru',
        destination:'Bali',
        availableStartDate:'20/10/2024',
        availableEndDate:'10/11/2020',
        travelType:'Plane',
        notes:'Bali is a province and island Indonesia, located in the lesser Sunda Islands, east of Java and west of Lombok',
        bookmarked:false

    },

    {
        id:3,
        start:'Bengaluru',
        destination:'Bali',
        availableStartDate:'20/10/2024',
        availableEndDate:'10/11/2020',
        travelType:'Plane',
        notes:'Bali is a province and island Indonesia, located in the lesser Sunda Islands, east of Java and west of Lombok',
        bookmarked:false

    }



]

class DisplayPostPage extends Component{

    state ={
        postList :[],
        currentPost : null,
        searchQuery :''
    }

    componentDidMount(){
        const savedPots = Cookie.get('postList')
        this.setState({
            postList: savedPots ? JSON.parse(savedPots) : initialList
        })
    }

    componentDidUpdate(prevState){
        if(prevState.postList !== this.state.postList){
            Cookie.set('postList', JSON.stringify(this.state.postList))
        }
    }


    addPost = (newPost) =>{
        newPost.id = uuid()
        this.setState((prevState) =>({
            postList:[...prevState.postList, newPost]
        }))
    }


    deletePost =(postId) =>{
        const updatedPostList = this.state.postList.filter((post) => post.id !== postId)
        this.setState({postList: updatedPostList})
    }

    editPost = (updatedPost) =>{
        const updatedPostList = this.state.postList.map(post => post.id === updatedPost.id ? updatedPost : post)
        this.setState({postList: updatedPostList, currentPost: null})
    }


    setCurrentPost = (post) =>{
        this.setState({currentPost:post})
    }


    handleSearchQuery = (e)=>{
        this.setState({searchQuery:e.target.value})
    }


    handleToggleBookmark = (postId) =>{
        const updatedPostList = this.state.postList.map((post)=>
            post.id === postId ? {...post, bookmarked: !post.bookmarked} : post
        )

        this.setState({postList: updatedPostList})
    }



    render(){
        const {postList, searchQuery} = this.state
        const filteredPostList = postList.filter((post)=>
            post.start.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.travelType.toLowerCase().includes(searchQuery.toLowerCase())
        )
        return(
            <div className="display-post-container">
                <div className="header">
                    <HeaderPage/>
                </div>
                <div className="trip-form-section" id="create-post-section">
                    <CreatePostPage
                    addPost = {this.addPost}
                    editPost = {this.editPost}
                    currentPost = {this.state.currentPost}
                    setCurrentPost= {this.setCurrentPost}
                    />
                </div>
                <div className="header-section">
                    <h1>Your Travel Posts</h1>
                    <div>
                        <input type="search" placeholder="search your posts here..." onChange={this.handleSearchQuery}/>
                    </div>
                </div>
                    <div className="travel-items-container">
                        {filteredPostList.map(eachItem =>(
                            <PostItemPage
                            key={eachItem.id}
                            travelDetails = {eachItem}
                            deletePost={this.deletePost}
                            setCurrentPost = {this.setCurrentPost}
                            handleToggleBookmark = {this.handleToggleBookmark}
                            />

                        ))}
                        
                    </div>

                
<div className="create-post-section">
    <a href="#create-post-section">
        <button className="create-post-button">Create Travel Post</button>
    </a>
</div>
            </div>
        )
    }
    
}

export default DisplayPostPage