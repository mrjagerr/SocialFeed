const Post = (props) => {
    return (
        <form>
        <label for='name'>Name: </label>
        <input type='text' id='name'></input><br></br>
        <label for= 'post'> Post: </label>
        <input type='text' id='post'></input>
       </form>
      );
}
 
export default Post;