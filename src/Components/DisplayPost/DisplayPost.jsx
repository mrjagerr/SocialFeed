

const DisplayPost = (props) => {
    return ( 
  <table> 
        
       <tbody>
       {props.parentEntries.map((entry)=>{
            return(

             <table>
                 <tr>Name {entry.name}</tr>
                <tr>Post {entry.post}</tr>
             </table>
            
            );
          })}
       </tbody>
      

        <button>Like</button><button>Dislike</button>
     
        </table>
     
     );
}
 
export default DisplayPost;