import * as videoAPIUtil from "../util/video_api_util";

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const CLEAR_VIDEOS = 'CLEAR_VIDEOS';

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
});

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
});

const removeVideo = videoId => ({
    type: REMOVE_VIDEO,
    videoId
});

export const clearVideos = () => ({
    type: CLEAR_VIDEOS
})

export const fetchVideo = videoId => dispatch => (
    videoAPIUtil.fetchVideo(videoId)
        .then(video => dispatch(receiveVideo(video)))
);

export const fetchAllVideos = () => dispatch => (
    videoAPIUtil.fetchAllVideos()
        .then(videos => dispatch(receiveVideos(videos)))
);

export const fetchVideosByCategory = category => dispatch => (
    videoAPIUtil.fetchVideosByCategory(category)
        .then(videos => dispatch(receiveVideos(videos)))
);

export const fetchVideosByTopic = topic => dispatch => (
    videoAPIUtil.fetchVideosByTopic(topic)
        .then(videos => dispatch(receiveVideos(videos)))
);

export const fetchVideosByUser = userId => dispatch => (
    videoAPIUtil.fetchVideosByUser(userId)
        .then(videos => dispatch(receiveVideos(videos)))
);

export const createVideo = video => dispatch => {
    // console.log("VIDEO ACTIONS", video);
    return videoAPIUtil.createVideo(video)
        .then(video => dispatch(receiveVideo(video)))
};

export const updateVideo = video => dispatch => (
    videoAPIUtil.updateVideo(video)
        .then(video => dispatch(receiveVideo(video)))
);

export const deleteVideo = videoId => dispatch => (
    videoAPIUtil.deleteVideo(videoId)
        .then(videoId => dispatch(removeVideo(videoId)))
);

export const searchVideoByTopic = query => dispatch => (
    videoAPIUtil.searchVideoByTopic(query)
        .then(videos => dispatch(receiveVideos(videos)))
);

