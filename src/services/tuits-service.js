import axios from 'axios';
// const API_BASE = 'https://simple-http-node-express-server-he2q.onrender.com';
const API_BASE = process.env.REACT_APP_API_BASE;
// const API_BASE = "http://localhost:4000/api";
const TUITS_API = `${API_BASE}/tuits`;

export const findTuits  = async ()     => {
    const response = await axios.get(TUITS_API);
    return response.data;

}
export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const updateTuit = async (tuit) => {
    /*
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;

     */
}