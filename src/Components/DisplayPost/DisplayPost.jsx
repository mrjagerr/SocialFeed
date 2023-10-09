

const DisplayPost = (props) => {
    return ( 
  <table> 
        
       <tbody>
       {props.parentEntries.map((entry)=>{
            return(

             <table>
                 <tr> {entry.name}</tr>
                <tr> {entry.post}</tr>
                <button>Like</button> <button>Dislike</button>
             </table>
            
            );
          })}
       </tbody>
      

        
     
        </table>
     
     );
}
 
export default DisplayPost;