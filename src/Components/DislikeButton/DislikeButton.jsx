import { useEffect, useState } from "react";


const DislikeButton = () => {


    const [dislikeButton, setDislikeButton] = useState("inactive1");
    function handleClick() {
        if(dislikeButton ==="inactive1"){
            setDislikeButton("active1");
        }
        else {
            setDislikeButton("inactive1");
        }
    }
   

  
return(
     
   <button className={dislikeButton} onClick={handleClick}></button>
     );
}
 
export default DislikeButton;