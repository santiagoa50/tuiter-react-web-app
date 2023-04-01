import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {updateTuitThunk} from "../../services/tuits-thunks";
import './tuit-list/index.css'

const TuitStats = ( {tuit} ) => {

    const dispatch = useDispatch()

    return (
        <>
            <div className=" ps-2 pe-0">
                <div className="row">
                    <Link to="#" className="col-2" id="comment">
                        <i className="bi bi-chat"></i>
                        <div className="d-inline ms-2">{tuit.replies}</div>
                    </Link>
                    <Link to="#" className="col-2" id="retweet">
                        <i className="bi bi-arrow-repeat"></i>
                        <div className="d-inline ms-2">{tuit.retuits}</div>
                    </Link>
                    <Link to="#" className="col-2" id="like">

                        <i onClick={() => dispatch(updateTuitThunk({

                            ...tuit,
                            likes: tuit.likes + 1

                        }))} className="bi bi-heart-fill me-2 text-danger">{tuit.likes}</i>

                    </Link>
                    <Link to="#" className="col-2" id="dislike">
                        <i className="bi bi-hand-thumbs-down"></i>
                        <div className="d-inline ms-2">{tuit.dislikes}</div>
                    </Link>
                    <Link to="#"
                          className="col-2" id="share">
                        <i className="bi bi-share"></i>

                    </Link>
                </div>
            </div>
        </>
    )

}
export default TuitStats;