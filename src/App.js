import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import Post from './Components/Post/Post';



function App() {

  const [entries,setEntries] =useState([{name: 'Sky', post: 'Hi this is a test'}])
  

  function addNewPost(entry){
    let tempPost =[entry,...entries];
    setEntries(tempPost);
    
  }



  return (
    <div>
      <Post/>
      <DisplayPost parentEntries={entries}/>
    
    </div>
  
  );
}

export default App;
