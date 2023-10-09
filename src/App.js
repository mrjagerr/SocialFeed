import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import Post from './Components/Post/Post';



function App() {

  const [entries,setEntries] =useState([{name: 'Sky', post: 'Hi this is a test'}])




  return (
    <div>
      <Post/>
      <DisplayPost/>
    
    </div>
  
  );
}

export default App;
