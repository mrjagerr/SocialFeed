import React, { useState } from 'react';


function App() {

  const [entries,setEntries] =useState([{name: 'Sky', post: 'Hi this is a test'}])




  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <th>Post</th>
        </tr>
        <button>Like</button><button>Dislike</button>
      </table>
    
    </div>
  
  );
}

export default App;
