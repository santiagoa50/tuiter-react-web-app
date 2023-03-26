import React from "react";
import {Link} from "react-router-dom";
import "./index.css"
const EditProfileComponent = () => {

    return(
        <>
            <div className="container p-0 pb-1 mt-2 border border-light rounded-2">
                <Link to="/tuiter/profile">
                    <button className="rounded-pill btn btn-dark float-end  ps-3 pe-3 pt-1">
                        Save
                    </button>
                </Link>
            </div>
            <div className="row ms-3 ">
                <div className="col-1">
                    <Link to="/tuiter/profile" className="text-secondary">
                        <i className="bi bi-x-lg"></i>
                    </Link>
                </div>
                <div className="col-11">
                    <h5 className="m-0 ms-2 fw-bold">Edit Profile</h5>
                </div>
            </div>
            <div className="position-relative wd-margin-edit-profile">
                <img className= "img-responsive mt-1 wd-banner"
                     src={`../../images/trio.jpeg`} alt= "img"/>
                <img className="rounded-pill wd-edit-profile-picture"
                     src={`../../images/han solo.jpg`} alt= "img"/>
            </div>
            <div className="mb-4">
                <div className="container border bg-light rounded-2">
                    <label form="name" className="small text-secondary">
                        Name
                    </label><br/>
                    <textarea className="wd-text-box bg-light border-0" value="Han Solo"/>
                </div>
            </div>
            <div className="mb-4">
                <div className="container border bg-light rounded-2">
                    <label form="bio" className="small text-secondary">
                        Bio
                    </label><br/>
                    <textarea className="wd-text-box bg-light border-0"
                              value="Charming former smuggler with a heart of gold."/>
                </div>
            </div>

            <div className="mb-4">
                <div className="container border bg-light rounded-2">
                    <label form="location" className="small text-secondary">
                        Location
                    </label><br/>
                    <textarea className="wd-text-box bg-light border-0"
                              value="Corellia"/>
                </div>
            </div>
            <div className="mb-4">
                <div className="container border bg-light rounded-2">
                    <label form="website" className="small text-secondary">
                    </label> <br/>
                    <textarea className="wd-text-box bg-light border-0 text-secondary"
                        value="Website"/>
                </div>
            </div>
            <div className="mb-4">
                <div className="container border bg-light rounded-2">
                    <label form="birthdate_input" className="small text-secondary">
                        Birth date ·<b> Edit</b>
                        <textarea className="wd-text-box bg-light border-0"
                                  value="32 BBY"/>
                    </label>
                </div>
            </div>
            <div className="mb-4">
                <Link to="#" className="text-decoration-none">
                    <h6 className="d-inline text-black">Switch to professional</h6>
                    <i className="bi bi-caret-right float-end text-black"></i>
                </Link>
            </div>
        </>
    );
};
export default EditProfileComponent;