import axios from 'axios';
//const TUITS_API = 'http://localhost:4000/api/tuits';
//const TUITS_API = 'https://simple-http-node-express-server-he2q.onrender.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;
// const TUITS_API = 'mongodb+srv://santiagoan:hellomeow12@cluster0.fba779y.mongodb.net/?retryWrites=true&w=majority'
// edit variables
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    return response.data;
}

export const deleteTuit = async (tid) => {
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    return await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
}

