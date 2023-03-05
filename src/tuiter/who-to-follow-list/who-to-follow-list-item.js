import React from "react";
import "../PostList/index.css"
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }

    }
) => {
    return(
        <li className="list-group-item" id="main">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={40} src={`/images/${who.avatarIcon}`} alt="img"/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;