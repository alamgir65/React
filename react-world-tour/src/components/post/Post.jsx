import { useState } from 'react';
import './Post.css'
import Readposts from '../Readposts/Readposts';
const Post = ({ post, handleReadPost,removeReadPost, flag = false }) => {

    const [isRead, setIsRead] = useState(false);

    function handleRead() {
        setIsRead(!isRead);
    }

    return (
        <div className={`post-box ${isRead && 'visited'}`}>
            <h3>Title : {post.title} </h3>
            <p>{post.body}</p>
            <button style={{ margin: '10px' }} onClick={handleRead} >{isRead ? 'Completed' : 'Read'}</button> <br />
            <button name='post' onClick={() => handleReadPost(post)}>Add to read</button>
            {flag && (
                <button style={{margin: '10px'}} onClick={() => removeReadPost(post.id)}>Remove from Readlist</button>
            )}
            {isRead ? 'I have done..' : 'Want to read...'}

            {/* Hello mama */}
        </div>
    );
};

export default Post;