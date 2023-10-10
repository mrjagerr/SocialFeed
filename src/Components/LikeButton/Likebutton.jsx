import { useEffect, useState } from "react";


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
     
   <button className={likeButton} onClick={handleClick}>LikePlaceholder</button>
     );
}
 
export default LikeButton;