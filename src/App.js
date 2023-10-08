import React, { useState } from 'react';


function App() {

  const [entries,setEntries] =useState([{name: 'Sky', post: 'Hi this is a test'}])




  return (
    <div >
       <form>
        <label for='name'>Name: </label>
        <input type='text' id='name'></input><br></br>
        <label for= 'post'> Post: </label>
        <input type='text' id='post'></input>
       </form>
     

   
    

    </div>
  );
}

export default App;
