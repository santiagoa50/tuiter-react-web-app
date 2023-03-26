import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {updateProfile} from "../reducers/profile-reducer";
import "./index.css";

const EditProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.profile)
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const save = () => {dispatch(updateProfile(profile))}
    useEffect(() => {setProfile(currentUser)}, [currentUser])

    return(
        <>
            <div className="container p-0 pb-1 mt-2 border border-light rounded-2">
                <Link to="/tuiter/profile">
                    <button className="rounded-pill btn btn-dark float-end mt-3 me-3 ps-3 pe-3 pt-1 pb-1"
                            onClick={save}>
                        Save
                    </button>
                </Link>
                <div className="row ms-3 mt-2 pt-2 pb-3">
                    <div className="col-1">
                        <Link to="/tuiter/profile" className="text-secondary">

                        </Link>
                    </div>
                    <div className="col-11">
                        <h5 className="m-0 ms-2 fw-bold">Edit Profile</h5>
                    </div>
                </div>
                <div className="position-relative wd-100-percent-width wd-under-banner-margin">
                    <img className= "img-responsive mt-1 wd-banner-dim"
                         src={`/tuiter/images/${currentUser.bannerPicture}`} alt= "img"/>
                    <img className="rounded-pill wd-profile-picture-pos wd-profile-picture-dim"
                         src={`/tuiter/images/${currentUser.profilePicture}`} alt= "img"/>
                </div>

                <div className="ms-3 me-3 mb-4">
                    <div className="container p-2 pt-0 border border-light bg-light rounded-2">
                        <label htmlFor="name"
                               className="small text-secondary">
                            Name
                        </label>
                        <br/>
                        <input type="text" id="name"
                               className="wd-max-width bg-light border-0"
                               value={profile.name}
                               onChange={event => {
                                   const newProfile = {
                                       ...profile,
                                       name : event.target.value
                                   }
                                   setProfile(newProfile)
                               }}/>
                    </div>
                </div>

                <div className="ms-3 me-3 mb-4">
                    <div className="container p-2 pt-0 border border-light bg-light rounded-2">
                        <label htmlFor="bio"
                               className="small text-secondary">
                            Bio
                        </label>
                        <br/>
                        <textarea id="bio"
                                  value={profile.bio}
                                  className="wd-max-width bg-light border-0"
                                  onChange={event => {
                                      const newProfile = {
                                          ...profile,
                                          bio : event.target.value
                                      }
                                      setProfile(newProfile)
                                  }}/>
                    </div>
                </div>

                <div className="ms-3 me-3 mt-3 mb-4">
                    <div className="container p-2 pt-0 border border-light bg-light rounded-2">
                        <label htmlFor="location"
                               className="small text-secondary">
                            Location
                        </label>
                        <br/>
                        <input type="text" id="location"
                               value={profile.location}
                               className="wd-max-width bg-light border-0"
                               onChange={event => {
                                   const newProfile = {
                                       ...profile,
                                       location : event.target.value
                                   }
                                   setProfile(newProfile)
                               }}/>
                    </div>
                </div>

                <div className="ms-3 me-3 mt-3 mb-4">
                    <div className="container p-2 pt-0 border border-light bg-light rounded-2">
                        <label htmlFor="website"
                               className="small text-secondary">
                            Website
                        </label>
                        <br/>
                        <input type="text" id="website"
                               value={profile.website}
                               className="wd-max-width bg-light border-0"
                               onChange={event => {
                                   const newProfile = {
                                       ...profile,
                                       website : event.target.value
                                   }
                                   setProfile(newProfile)
                               }}/>
                    </div>
                </div>

                <div className="ms-2 me-3 mt-3 mb-2">
                    <div className="container p-2 pt-0">
                        <label htmlFor="birthdate_input"
                               className="small text-secondary">
                            Birth date &nbsp;<b>·</b>&nbsp;
                        </label>
                        <button className="small bg-black border-0 text-primary"
                                onClick={() => dispatch(updateProfile({
                                    ...profile,
                                    editingDOB: !profile.editingDOB
                                }))}>
                            {profile.editingDOB ? "Done" : "Edit"}
                        </button>
                        <br/>
                        {profile.editingDOB ?
                            <input type="date" id="birthdate_input"
                                   value={profile.dateOfBirth}
                                   className="wd-max-width bg-black border-0"
                                   onChange={event => {
                                       const newProfile = {
                                           ...profile,
                                           dateOfBirth : event.target.value
                                       }
                                       setProfile(newProfile)
                                   }}
                            />
                            : profile.dateOfBirth
                        }
                    </div>
                </div>

                <div className="ms-3 me-4 mb-5">
                    <Link to="#" className="wd-no-decoration">
                        <h6 className="d-inline">Switch to professional</h6>

                    </Link>
                </div>




            </div>
        </>
    );
};
export default EditProfileComponent;