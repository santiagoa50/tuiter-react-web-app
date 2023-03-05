import React from "react";
import {Link} from "react-router-dom";
import "./index.css";

const PostListItem = ( {post} ) => {
    return (

        <li className="list-group-item  pe-2">
            <div className="row pt-1">
                <div className="col col-2 col-md-auto">
                    <img className= "rounded-pill mt-1 wd-profile-picture-size"
                         src={`/images/${post.profilePicture}`} alt="profilePicture"/>
                </div>
                <div className="col col-9 col-md-10 pe-0">
                    <div className="fw-bold d-inline">{post.userName} {' '}</div>
                    <i className="bi bi-check-circle-fill"></i>
                    <div className="text-secondary d-inline ms-2">@{post.handle}</div>
                    <div className="text-secondary d-inline">{' '}<b>·</b>  {post.time}</div>
                    <div className="mb-2">{post.tweet}</div>



                    <div className="card border-light bg-black mt-3 me-0">
                        <img className= "wd-max-width rounded-top wd-border-bottom border-light"
                             src={`/images/${post.image}` } alt="img"/>
                    </div>

                    <div className="pt-3 pb-2 ps-0 pe-0">
                        <div className="row">
                            <Link to="/tuiter/comments" className="col-3 wd-no-decoration">
                                <div className="d-inline ms-2 text-secondary">{post.comments}</div>
                            </Link>
                            <Link to="/tuiter/retweets" className="col-3 wd-no-decoration">

                                <div className="d-inline ms-2 text-secondary">{post.retuits}</div>
                            </Link>
                            <Link to="/tuiter/likes" className="col-3 wd-no-decoration">
                                <div className="d-inline ms-2 text-secondary">{post.likes}</div>
                            </Link>

                        </div>

                    </div>

                </div>
            </div>
        </li>
    );
};
export default PostListItem;