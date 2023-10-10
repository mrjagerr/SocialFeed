
import {PiThumbsUpBold,PiThumbsDownBold} from "react-icons/pi";
import LikeButton from "../LikeButton/Likebutton";
import DislikeButton from "../DislikeButton/DislikeButton";




const DisplayPost = (props) => {
    return ( 
  <table> 
        
       <tbody>
       {props.parentEntries.map((entry)=>{
            return(

             <table className='container-fluid'>
               <div className="commentbox"> 
                  <tr> {entry.name}</tr>
                  <tr> {entry.post}</tr>
                </div>
                <div>
                  <LikeButton message = "thumbsup"/> <DislikeButton message ="Thumbsdown"/>
                </div>
                
                
            
             </table>
            
            );
          })}
       </tbody>
      

        
     
        </table>
     
     );
}
 
export default DisplayPost;