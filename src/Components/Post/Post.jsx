import React,{useState} from "react";




const Post = (props) => {

    const[name, setName] =useState ('');
    const[post,setPost] =useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newEntry ={
            name:name,
            post:post
        };
        
        console.log(newEntry);
        props.addNewPostFeed(newEntry);
    }

    return (
        <form onSubmit={handleSubmit}>
        <label for='name'>Name: </label><br />
        <input type='text' value={name} onChange={(event)=>setName(event.target.value)} id='name'></input>
        <div></div>
        <label for= 'post'> Post: </label>
        <div></div>
        <input type='text'  className='input-box' value={post} onChange={(event)=> setPost(event.target.value)} id='post'></input>
        <button type="submit"> Post </button>
       </form>

      );
}
 
export default Post;