import { useEffect, useState } from "react";
import {PiThumbsUpBold,PiThumbsDownBold} from "react-icons/pi";


const LikeButton = () => {


    const [likeButton, setLikeButton] = useState("inactive");
    function handleClick() {
        if(likeButton ==="inactive"){
            setLikeButton("active");
        }
        else {
            setLikeButton("inactive");
        }
    }
   

  
return(
     
   <button className={likeButton} onClick={handleClick}> </button>
     );
}
 
export default LikeButton;