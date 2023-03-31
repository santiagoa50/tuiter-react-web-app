import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ( {tuit} ) => {

    const dispatch = useDispatch()

    return (
        <>
            <div className=" ">
                <div className="row">
                    <Link to="#"
                          className="col-2 wd-no-decoration">
                        <i className="bi bi-chat"></i>
                        <div className="d-inline ms-2 text-secondary">{tuit.replies}</div>
                    </Link>
                    <Link to="#"
                          className="col-2 wd-no-decoration">
                        <i className="bi bi-arrow-repeat" id="retweet"></i>
                        <div className="d-inline ms-2 text-secondary">{tuit.retuits}</div>
                    </Link>
                    <Link to="#"
                          className="col-2 wd-no-decoration">
                        <i className="bi bi-heart"></i>
                        <i className={`${tuit.liked ? 'text-danger' : 'text-secondary'}`}
                           onClick={() => {
                                             if (tuit.liked) {
                                                 dispatch(updateTuitThunk({
                                                     ...tuit,
                                                     likes: tuit.likes - 1,
                                                 }))
                                             } else {
                                                 dispatch(updateTuitThunk({
                                                     ...tuit,
                                                     likes: tuit.likes + 1,
                                                 }))
                                             }
                                         }}>
                        </i>
                        <div className="d-inline ms-2 text-secondary">{tuit.likes}</div>
                    </Link>
                    <Link to="#"
                                 className="col-2 wd-no-decoration">
                    <i className="bi bi-hand-thumbs-down"></i>

                    <div className="d-inline  text-secondary">{tuit.dislikes}</div>
                    </Link>

                    <Link to="#"
                          className="col-3 wd-no-decoration">
                        <i className="bi bi-share" id="share"></i>
                    </Link>

                </div>
            </div>
        </>
    )

}
export default TuitStats;