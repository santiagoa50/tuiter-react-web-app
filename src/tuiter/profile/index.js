import React from "react";
import {Link} from "react-router-dom";
import "./index.css"

const ProfileComponent = ( {currentUser}) => {

    return(
        <>
            <li className="list-group-item pe-3 wd-border">
                <div className="pt-2 ps-0 pe-0">
                    <div className="row pt-1">
                        <div className="col-1">
                            <Link to="/tuiter/home" className="text-secondary">
                                <i className="bi bi-arrow-left"></i>
                            </Link>
                        </div>
                        <div className="col-10">
                            <h5 className="m-0 fw-bold">Han Solo</h5>
                            <p className="m-0 text-secondary">6,114 Tuits</p>
                        </div>

                        <div className="position-relative wd-margin">
                            <img className= "img-responsive mt-1 wd-banner"
                                 src={`../../images/trio.jpeg`} alt= "img"/>
                            <img className="rounded-pill wd-profile-picture"
                                 src={`../../images/han solo.jpg`} alt= "img"/>
                            <Link to="/tuiter/edit-profile">
                                <button className="rounded-pill btn btn-light float-end mt-3 me-3 ps-3 pe-3">
                                    Edit profile
                                </button>
                            </Link>
                        </div>


                        <div className="ps-3">
                            <h5 className="m-0 fw-bold">Han Solo</h5>
                            <p className="m-0 text-secondary">@hansolo</p>
                            <p className="mt-3 mb-3">Charming former smuggler with a heart of gold.</p>

                            <div className="row mb-2">
                                <div className="col-auto">
                                    <i className="bi bi-geo-alt" id="location"></i>
                                    <div className="d-inline ms-2 text-secondary">Corellia</div>
                                </div>
                                <div className="col-auto">
                                    <i className="bi bi-balloon"></i>
                                    <div className="d-inline ms-2 text-secondary">Born 32 BBY</div>
                                </div>
                                <div className="col-auto">
                                    <i className="bi bi-calendar3"></i>
                                    <div className="d-inline ms-2 text-secondary">Joined 31 BBY</div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-auto">
                                    <div className="d-inline text-secondary">340 Following</div>
                                </div>
                                <div className="col-auto">
                                    <div className="d-inline text-secondary">223 Followers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default ProfileComponent;

