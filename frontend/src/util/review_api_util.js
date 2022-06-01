import axios from "axios";

export const createReview = review => (
    axios.post("/api/reviews/post", review)
);

export const updateReview = review => (
    axios.post(`/api/reviews/${review._id}`, review)
);

export const fetchReviews = userId => (
    axios.get(`/api/reviews/${userId}`)
);

export const deleteReview = reviewId => (
    axios.delete(`/api/reviews/${reviewId}`)
)