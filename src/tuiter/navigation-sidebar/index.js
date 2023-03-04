import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Routes, Route} from "react-router";
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">

            <Link to="/" className="list-group-item">
                <i className="bi bi-twitter"></i>
            </Link>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill float-start"></i>
                &nbsp;Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash float-start"></i>
                &nbsp;Explore
            </Link>
            <Link to="/tuiter/notifications" className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"></i>
                &nbsp;Notifications
            </Link>
            <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill"></i>
                &nbsp;Messages
            </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill"></i>
                &nbsp;Bookmarks
            </Link>
            <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-task"></i>
                &nbsp;Lists
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"></i>
                &nbsp;Profile
            </Link>
            <Link to="/tuiter/more" className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="bi bi-chat-dots-fill"></i>
                &nbsp;More
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-stack-overflow"></i>
                &nbsp;Labs
            </Link>

            <button type="button" className="btn btn-primary rounded-pill">
                Tweet
            </button>

        </div>

    );
};
export default NavigationSidebar;