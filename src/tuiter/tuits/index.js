import React , {useEffect}
    from "react";
import {useDispatch, useSelector}
    from "react-redux";
import TuitItem
    from "./tuit-list/tuit-item";
import {findTuitsThunk}
    from "../../services/tuits-thunks";
const Tuits = () => {

    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(findTuitsThunk())}, [dispatch])

    return (
        <ul className="list-group mt-2">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit =>
                    <TuitItem key={tuit._id} tuit={tuit}/>
                )
            }
        </ul>
    )
}


export default Tuits;