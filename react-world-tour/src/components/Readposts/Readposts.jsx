import { useState } from "react";
import Post from "../post/Post";
import '../post/Post.css';
const Readposts = ({readPosts}) => {

    const [allReadPost, setAllReadPost] = useState(readPosts); 

    const removeReadPost = (postId) =>{
        console.log("Hello mama, removing post with id: ");
        // console.log(postId)
        const remindingPosts = allReadPost.filter(post => post.id !== postId);
        setAllReadPost(remindingPosts);
    }

    return (
        <div>
            <h3>Read Posts : {readPosts.length} </h3>

            <div className="readpost-box">
                {
                    readPosts.map(post => <Post 
                        key={post.id}
                        post={post} 
                        flag={true}
                        removeReadPost={removeReadPost}
                        ></Post>)
                }
            </div>
        </div>
    );
};

export default Readposts;