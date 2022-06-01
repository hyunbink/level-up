export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, videoId) => {
    return {
        type: OPEN_MODAL,
        modal,
        videoId
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};
