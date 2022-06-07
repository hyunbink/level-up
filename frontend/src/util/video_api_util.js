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

export const createVideo = video => (
    axios.post(`/api/videos/upload`, video)
);

export const deleteVideo = videoId => (
    axios.delete(`/api/videos/${videoId}`)
);

export const updateVideo = video => {
    console.log(video);
    return axios.put(`/api/videos/${video._id}`, video)
};

export const searchVideoByTopic = query => (
    axios.get(`/search/${query}`)
);
