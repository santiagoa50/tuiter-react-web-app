import React from "react";
import "../PostList/index.css"
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item" id="main">
            <div className="row">
                <div className="col-10">
                    <div>{post.userName}</div>
                    <div className="fw-bolder">{post.topic} <i className="bi bi-check-circle-fill"></i> • {post.time}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} alt="img"/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;