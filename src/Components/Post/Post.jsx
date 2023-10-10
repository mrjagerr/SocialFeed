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
       
        <div >
            <div >
            <label for='name'>Name: </label>
            </div>
            <div className="commentboxpostion2">
                <input type='text' value={name} onChange={(event)=>setName(event.target.value)} id='name'></input>
            </div>
            <div >
            <label for= 'post'> Post: </label>
            </div>
            <div className="commentboxpostion2">
                <textarea type='text'  className='input-box' value={post} onChange={(event)=> setPost(event.target.value)} id='post'></textarea>
            </div>
            <div className="buttonlocation">
            <   button type="submit"> Post </button>
            </div>
        </div>
       </form>
       
      );
}
 
export default Post;