import axios from "axios";
export const fetchUsers = () => (
    axios.get("/api/users/")
);

export const fetchUser = userId => (
    axios.get(`/api/users/${userId}`)
);

export const updateUser = user => {
    console.log("user in util", user);
    return axios.put(`/api/users/prof/${user._id}`, user);

};