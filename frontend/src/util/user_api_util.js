import axios from "axios";
export const fetchUsers = () => (
    axios.get("/api/users/")
);

export const fetchUser = userId => (
    axios.get(`/api/users/${userId}`)
);