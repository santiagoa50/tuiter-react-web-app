import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
//import {createTuit} from "../reducers/tuits-reducer";
import {createTuitThunk} from "../../services/tuits-thunks";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const {currentUser} = useSelector((state) => state.profile)
    const dispatch = useDispatch();

    const templateTuit = {
        ...currentUser,
        "username": "Han Solo",
        "image": "../../images/han solo.jpg",
        "handle": "@hansolo",
        "topic": "",
        "time": "just now",
        "liked": false,
        "disliked": false,
        "replies": 0,
        "retuits": 0,
        "likes": 0,
        "disklies": 0,
    }
    const tuitClickHandler = () => {
        const newTuit = {
            ...templateTuit,
            tuit: whatsHappening
        }
        //dispatch(createTuit(newTuit));
        dispatch(createTuitThunk(newTuit));

    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="../../images/han solo.jpg" width={60} className="rounded-pill" alt="img"/>
            </div>
            <div className="col col-9 col-md-10">
               <textarea value={whatsHappening} placeholder="What's happening?"
                         className="form-control border-0"
                         onChange={(event) => setWhatsHappening(event.target.value)}>
               </textarea>
                <div className="mt-2">
                    <button className="rounded-pill btn btn-primary float-end mt-1 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-4">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;