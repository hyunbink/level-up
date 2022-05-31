import axios from "axios";

export const fetchAllVideos = () => (
    axios.get("/api/videos/")
);

export const fetchVideosByCategory = category => (
    axios.get(`/api/videos/category/${category}`)
);

export const fetchVideosByUser = userId => (
    axios.get(`/api/videos/user/${userId}`)
);

export const fetchVideo = videoId => (
    axios.get(`/api/videos/${videoId}`)
);