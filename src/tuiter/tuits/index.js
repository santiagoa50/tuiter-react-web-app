import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-list/tuit-item";

const Tuits = () => {
    const tuitsArray = useSelector((state) => state.tuits)

    return(
        <ul className="list-group mt-2">
            {
                tuitsArray.map(tuit =>
                    <TuitItem key={tuit._id} tuit={tuit}/>
                )
            }
        </ul>
    );
};

export default Tuits;