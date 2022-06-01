import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import VideoForm from '../video/video_form/video_form_container';
import VideoShow from '../video/video_show/video_show_page';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }

    let component;
    switch(modal) {
        case "video-show":
            component = <VideoShow />
        case "video-form":
            component = <VideoForm />
        default:
            component = null;
    }

    return(
        <div className="modal-bg" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mSTP = ( state, ownProps ) => ({
    modal: state.ui.modal,
});

const mDTP = ( dispatch, ownProps ) => ({
    closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(Modal);