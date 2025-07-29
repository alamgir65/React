import { useEffect, useState } from "react";
import Post from "../post/Post";
import Readposts from "../Readposts/Readposts";

const Posts = () => {
    const [posts,setPosts] = useState([]);
    const [allReadPost,setAllReadPost] = useState([]);

    const handleReadPost = (post) => {
        // console.log('Hollo mammah kemon achen?');
        setAllReadPost([...allReadPost, post]);
        console.log(allReadPost);
    }


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    },[])
    return (
        <>
            <h1>Posts : {posts.length} </h1>
            <Readposts readPosts={allReadPost} ></Readposts>
            <div>
                {
                    posts.map(post => <Post 
                        key={post.id} 
                        post={post}
                        handleReadPost={handleReadPost}
                        ></Post>)
                }
            </div>
        </>
    );
};

export default Posts;