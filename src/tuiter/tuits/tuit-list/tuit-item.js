import React from "react";
import {useDispatch} from "react-redux";
import "./index.css"
//import {deleteTuit} from "../../reducers/tuits-reducer"
import {deleteTuitThunk} from "../../../services/tuits-thunks";
import TuitStats from "../tuit-stats";

const TuitItem = ( {tuit} ) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
        //dispatch(deleteTuit(id));
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

                    <div className="fw-bold d-inline">{tuit.username} <i className="bi bi-check-circle-fill" id="checkmark"></i></div>
                    <div className="text-secondary d-inline ms-2">{tuit.handle}</div>
                    <div className="text-secondary d-inline">{' '}· {tuit.time}</div>
                    <div className="mb-2">{tuit.tuit}</div>

                    <div className="row">
                        <TuitStats tuit={tuit}/>
                    </div>

                </div>
            </div>
        </li>
    );
};
export default TuitItem;