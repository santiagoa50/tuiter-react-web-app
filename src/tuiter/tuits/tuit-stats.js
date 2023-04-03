import React
    from "react";
import {useDispatch}
    from "react-redux";
import {Link}
    from "react-router-dom";
import {updateTuitThunk}
    from "../../services/tuits-thunks";
import './tuit-list/index.css'

const TuitStats = ( {tuit} ) => {

    const dispatch = useDispatch()

    return (
        <>
            <div className=" ps-2 pe-0">
                <div className="row">
                    <Link to="#" className="col-2" id="comment">
                        <i className="bi bi-chat-fill"></i>
                        <div className="d-inline ms-2">{tuit.replies}</div>
                    </Link>
                    <Link to="#" className="col-2" id="retweet">
                        <i className="bi bi-arrow-repeat"></i>
                        <div className="d-inline ms-2">{tuit.retuits}</div>
                    </Link>
                    <Link to="#" className="col-2">

                        <div>
                            <i onClick={() => dispatch(updateTuitThunk({
                                ...tuit,
                                likes: tuit.likes + 1
                            }))} className="bi bi-heart-fill me-2 text-danger"></i>{tuit.likes}
                        </div>

                    </Link>
                    <Link to="#" className="col-2">

                        <div>
                        <i onClick={() => dispatch(updateTuitThunk({

                            ...tuit,
                            dislikes: tuit.dislikes + 1

                        }))} className="bi bi-hand-thumbs-down-fill me-2"></i>{tuit.dislikes}
                        </div>

                    </Link>
                    <Link to="#"
                          className="col-2" id="share">
                        <i className="bi bi-share-fill"></i>

                    </Link>
                </div>
            </div>
        </>
    )

}
export default TuitStats;