import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.profile)
    return(
        <>
            <div className="container p-0 pb-1 mt-2 border border-light rounded-2">
                <div className="row ms-3 mt-2">
                    <div className="col-1">
                        <Link to="/tuiter/home" className="text-secondary">

                        </Link>
                    </div>
                    <div className="col-11">
                        <h5 className="m-0 fw-bold">{currentUser.name}</h5>
                        <p className="m-0 text-secondary">{currentUser.numOfTuits} Tuits</p>
                    </div>
                </div>
                <div className="position-relative wd-100-percent-width wd-under-banner-margin">
                    <img className= "img-responsive mt-1 wd-banner-dim"
                         src={`/tuiter/images/${currentUser.bannerPicture}`} alt= "img"/>
                    <img className="rounded-pill wd-profile-picture-pos wd-profile-picture-dim"
                         src={`/tuiter/images/${currentUser.profilePicture}`} alt= "img"/>
                    <Link to="/tuiter/edit-profile">
                        <button className="rounded-pill btn btn-light float-end mt-3 me-3 ps-3 pe-3">
                            Edit profile
                        </button>
                    </Link>
                </div>
                <div className="ps-4">
                    <h5 className="m-0 fw-bold">{currentUser.name}</h5>
                    <p className="m-0 text-secondary">@{currentUser.handle}</p>
                    <p className="mt-2 mb-2">{currentUser.bio}</p>

                    <div className="row mb-2">
                        <div className="col-auto">

                            <div className="d-inline ms-2 text-secondary">{currentUser.location}</div>
                        </div>
                        <div className="col-auto">

                            <div className="d-inline ms-2 text-secondary">Born {currentUser.dateOfBirth}</div>
                        </div>
                        <div className="col-auto">

                            <div className="d-inline ms-2 text-secondary">Joined {currentUser.dateJoined}</div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-auto">
                            <div className="d-inline text-secondary">{currentUser.followingCount} Following</div>
                        </div>
                        <div className="col-auto">
                            <div className="d-inline text-secondary">{currentUser.followersCount} Followers</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileComponent;

