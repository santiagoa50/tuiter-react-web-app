import React from "react";
import postsArray from './posts.json';
import PostItem from "./PostItem";
import "./index.css";

const PostList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem
                        key={post._id}
                        post={post}/>
                )
            }
        </ul>
    );
};
export default PostList;