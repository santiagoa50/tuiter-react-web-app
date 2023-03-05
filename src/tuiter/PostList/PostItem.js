import React from "react";
import "./index.css";

const PostListItem = ( {post} ) => {
    return (

        <li className="list-group-item" id="main">
            <div className="row">
                <div className="col col-2 col-md-auto">
                    <img className= "rounded-pill mt-1 wd-profile-picture"
                         src={`/images/${post.profilePicture}`} alt="profilePicture"/>
                </div>
                <div className="col col-9 col-md-10 pe-0">
                    <div className="fw-bold d-inline">{post.userName} {' '}</div>
                    <i className="bi bi-check-circle-fill"></i>
                    <div className="text-secondary d-inline ms-2">@{post.handle}</div>
                    <div className="text-secondary d-inline">{' '}<b>·</b>  {post.time}</div>
                    <div>{post.tweet}</div>
                    <div className="d-inline" id="link"><b>{post.link}</b></div>


                    <div className="card border-light">
                        <img className= "wd-max-width" src={`/images/${post.image}` } alt="img"/>
                    </div>

                    <div></div>

                    <div className="pt-3 pe-0">
                        <div className="row">
                            <a href="#" className="col-3">
                                <i className="bi bi-chat-fill" id="comment"></i>
                                <div className="d-inline ms-2 text-secondary">{post.comments}</div>
                            </a>
                            <a href="#" className="col-3 text-decoration-none">
                                <i className="bi bi-share-fill text-decoration-none" id="retweet"></i>
                                <div className="d-inline ms-2 text-secondary text-decoration-none">{post.retweets}</div>
                            </a>

                            <a href="#" className="col-3">
                                <i className="bi bi-heart-fill" id="heart"></i>
                                <div className="d-inline ms-2 text-secondary">{post.likes}</div>
                            </a>

                        </div>

                    </div>

                </div>
            </div>
        </li>
    );
};
export default PostListItem;