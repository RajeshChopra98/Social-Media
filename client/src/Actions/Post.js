import axios from "axios";
import {
  addCommentFailure,
  addCommentRequest,
  addCommentSuccess,
  deleteCommentFailure,
  deleteCommentRequest,
  deleteCommentSuccess,
  deletePostFailure,
  deletePostRequest,
  deletePostSuccess,
  likeFailure,
  likeRequest,
  likeSuccess,
  newPostFailure,
  newPostRequest,
  newPostSuccess,
  updateCaptionFailure,
  updateCaptionRequest,
  updateCaptionSuccess,
} from "../Reducers/LikeReducer";
import { server } from "../index";

export const likePost = (id) => async (dispatch) => {
  try {
    dispatch(likeRequest());

    const { data } = await axios.get(`${server}/api/v1/post/${id}`,{
      withCredentials: true 
    });
    dispatch(likeSuccess(data.message));
  } catch (error) {
    dispatch(likeFailure(error.response.data.message));
  }
};

export const addCommentOnPost = (id, comment) => async (dispatch) => {
  try {
    dispatch(addCommentRequest());

    const { data } = await axios.put(
      `${server}/api/v1/post/comment/${id}`,
      {
        comment,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true 
      }
    );
    dispatch(addCommentSuccess(data.message));
  } catch (error) {
    dispatch(addCommentFailure(error.response.data.message));
  }
};

export const deleteCommentOnPost = (id, commentId) => async (dispatch) => {
  try {
    dispatch(deleteCommentRequest());

    const { data } = await axios.delete(`${server}/api/v1/post/comment/${id}`, {
      data: { commentId },
    },{
      withCredentials: true 
    });
    dispatch(deleteCommentSuccess(data.message));
  } catch (error) {
    dispatch(deleteCommentFailure(error.response.data.message));
  }
};

export const createNewPost = (caption, image) => async (dispatch) => {
  try {
    dispatch(newPostRequest());

    const { data } = await axios.post(
      `${server}/api/v1/post/upload`,
      {
        caption,
        image,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true 
      }
    );
    dispatch(newPostSuccess(data.message));
  } catch (error) {
    dispatch(newPostFailure(error.response.data.message));
  }
};

export const updatePost = (caption, id) => async (dispatch) => {
  try {
    dispatch(updateCaptionRequest());

    const { data } = await axios.put(
      `${server}/api/v1/post/${id}`,
      {
        caption,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      }
    );
    dispatch(updateCaptionSuccess(data.message));
  } catch (error) {
    dispatch(updateCaptionFailure(error.response.data.message));
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch(deletePostRequest());

    const { data } = await axios.delete(`${server}/api/v1/post/${id}`,{
      withCredentials: true
    });
    dispatch(deletePostSuccess(data.message));
  } catch (error) {
    dispatch(deletePostFailure(error.response.data.message));
  }
};
