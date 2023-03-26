import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import "./index.css"
import {deleteTuit} from "../reducers/tuits-reducer";
const TuitItem = ( {tuit} ) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(

        <li className="list-group-item pe-3">
            <div className="row pt-1">
                <div className="col col-2 col-md-auto">
                    <img className= "rounded-pill mt-1 wd-picture"
                         src={`../../images/${tuit.image}`}
                         alt= "img"/>
                </div>
                <div className="col col-9 col-md-10 pe-0">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>

                    <div className="fw-bold d-inline">{tuit.userName} <i className="bi bi-check-circle-fill" id="checkmark"></i></div>
                    <div className="text-secondary d-inline ms-2">@{tuit.handle}</div>
                    <div className="text-secondary d-inline">{' '}<b>·</b> {tuit.time}</div>
                    <div className="mb-2">{tuit.tuit}</div>

                    <div className="pt-2 ps-0 pe-0">
                        <div className="row">
                            <Link to="#" className="col-3">
                                <i className="bi bi-chat" id="reply"></i>
                                <div className="d-inline ms-2" id="reply-text">{tuit.replies}</div>
                            </Link>
                            <Link to="#" className="col-3">
                                <i className="bi bi-arrow-repeat" id="retweet"></i>
                                <div className="d-inline ms-2" id="retweet-text">{tuit.retuits}</div>
                            </Link>
                            <Link to="#" className="col-3">
                                <i className="bi bi-heart" id="like"></i>
                                <div className="d-inline ms-2" id="like-text">{tuit.likes}</div>
                            </Link>
                            <Link to="#" className="col-3">
                                <i className="bi bi-share" id="share"></i>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </li>
    );
};
export default TuitItem;