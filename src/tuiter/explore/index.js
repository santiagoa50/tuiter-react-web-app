import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import {NavLink} from "react-router-dom";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <NavLink to="#" className="nav-link active">For You</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">Trending</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">News</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">Sports</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">Entertainment</NavLink>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="/images/ship.jpg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;