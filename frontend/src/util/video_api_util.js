import axios from "axios";

export const fetchAllVideos = () => (
    axios.get("/api/videos/")
);

export const fetchVideosByCategory = category => (
    axios.get(`/api/videos/category/${category}`)
);

export const fetchVideosByTopic = topic => (
    axios.get(`/api/videos/topic/${topic}`)
);

export const fetchVideosByUser = userId => (
    axios.get(`/api/videos/user/${userId}`)
);

export const fetchVideo = videoId => (
    axios.get(`/api/videos/${videoId}`)
);

export const createVideo = video => {
    // console.log("API UTIL", video);
    for (var key of video.entries()) {
        console.log("API UTIL VIDEO FORM DATA: ", key[0] + ', ' + key[1])
    }
    return axios.post(`/api/videos/upload`, video)
};

export const deleteVideo = videoId => (
    axios.delete(`/api/videos/${videoId}`)
);

export const updateVideo = video => {
    console.log(video);
    return axios.put(`/api/videos/${video._id}`, video)
};

export const searchVideoByTopic = query => {
    console.log("query", query);
    return axios.get(`/api/videos/topic/${query}`)
};
