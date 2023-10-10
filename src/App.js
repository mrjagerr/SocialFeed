import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import Post from './Components/Post/Post';
import'./App.css';




function App() {

  const [entries,setEntries] =useState([{name: 'Sky', post: 'Hi this is a test'}])
  

  function addNewPost(entry){
    let tempPost =[entry,...entries];
    setEntries(tempPost);

  }



  return (

   <body className='body'>
    <div className='container-fluid'>
      <div>
        <h3>SocialFeed</h3>
      </div>
      <div className='row'>
        <div className='col-md-6 offset-md-3 '>
          <div className='borderbox1'>
          <Post addNewPostFeed={addNewPost}/>
        </div>
          <div className='borderbox'>
          <DisplayPost parentEntries={entries}/>
        </div>

        </div>
      </div>
    </div>
    </body>
  );
}

export default App;
