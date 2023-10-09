
import {PiThumbsUpBold,PiThumbsDownBold} from "react-icons/pi";




const DisplayPost = (props) => {
    return ( 
  <table> 
        
       <tbody>
       {props.parentEntries.map((entry)=>{
            return(

             <table>
                 <tr> {entry.name}</tr>
                <tr> {entry.post}</tr>
                <button className="likeButton" ><PiThumbsUpBold/></button> <button><PiThumbsDownBold/></button>
             </table>
            
            );
          })}
       </tbody>
      

        
     
        </table>
     
     );
}
 
export default DisplayPost;