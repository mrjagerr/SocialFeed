
import {PiThumbsUpBold,PiThumbsDownBold} from "react-icons/pi";
import LikeButton from "../LikeButton/Likebutton";
import DislikeButton from "../DislikeButton/DislikeButton";




const DisplayPost = (props) => {
    return ( 
  <table> 
        
       <tbody>
       {props.parentEntries.map((entry)=>{
            return(

             <table className='container'>
               <div className="commentbox"> 
                  <tr className="namesettings"> {entry.name}</tr>
                  <tr> {entry.post}</tr>
                </div>
                <div className="buttonlocation1">
                  <LikeButton message = "thumbsup"/> <DislikeButton message ="Thumbsdown"/>
                </div>
                <hr></hr>

             </table>
            
            );
          })}
       </tbody>
      

        
     
        </table>
     
     );
}
 
export default DisplayPost;