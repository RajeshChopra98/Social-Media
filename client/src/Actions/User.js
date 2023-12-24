import axios from "axios";
import {
  RegisterRequest,
  RegisterSuccess,
  RegisterFailure,
  LogoutUserRequest,
  LogoutUserSuccess,
  LogoutUserFailure,
  LoginRequest,
  LoginSuccess,
  LoginFailure,
  LoadUserRequest,
  LoadUserSuccess,
  LoadUserFailure
} from "../Reducers/User";

import { postOfFollowingRequest, postOfFollowingSuccess, postOfFollowingFailure } from "../Reducers/PostOfFollowing";

import { myPostsRequest, myPostsSuccess, myPostsFailure } from "../Reducers/MyPost";

import { allUsersRequest, allUsersSuccess, allUsersFailure } from "../Reducers/AllUsers";

import { server } from "../index";
import { deleteProfileFailure, deleteProfileRequest, deleteProfileSuccess, followUserFailure, followUserRequest, followUserSuccess, forgotPasswordFailure, forgotPasswordRequest, forgotPasswordSuccess, resetPasswordFailure, resetPasswordRequest, resetPasswordSuccess, updatePasswordFailure, updatePasswordRequest, updatePasswordSuccess, updateProfileFailure, updateProfileRequest, updateProfileSuccess } from "../Reducers/LikeReducer";
import { userPostsFailure, userPostsRequest, userPostsSuccess } from "../Reducers/userPostSlice";
import { userProfileFailure, userProfileRequest, userProfileSuccess } from "../Reducers/UserProfile";


export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(LoginRequest());

    const { data } = await axios.post(
      `${server}/api/v1/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true 
      }
    );

    dispatch(LoginSuccess(data.user));
  } catch (error) {
    dispatch(LoginFailure(error.response.data.message));
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(LoadUserRequest());

    const { data } = await axios.get(`${server}/api/v1/me`,{
      withCredentials: true 
    });

    dispatch(LoadUserSuccess(data.user));

  } catch (error) {
    dispatch(LoadUserFailure(error.response.data.message));
  }
};

export const getFollowingPosts = () => async (dispatch) => {
  try {
    dispatch(postOfFollowingRequest());

    const { data } = await axios.get(`${server}/api/v1/posts`,{
      withCredentials: true 
    });
    dispatch(postOfFollowingSuccess(data.posts));

  } catch (error) {
    dispatch(postOfFollowingFailure(error.response.data.message));
  }
};

export const getMyPosts = () => async (dispatch) => {
  try {
    dispatch(myPostsRequest());

    const { data } = await axios.get(`${server}/api/v1/my/posts`,{
      withCredentials: true 
    });
    dispatch(myPostsSuccess(data.posts));

  } catch (error) {
    dispatch(myPostsFailure(error.response.data.message));
  }
};

export const getAllUsers = (name = "") => async (dispatch) => {
    try {
      dispatch(allUsersRequest());

      const { data } = await axios.get(`${server}/api/v1/users?name=${name}`,{
        withCredentials: true 
      });
      dispatch(allUsersSuccess(data.users));

    } catch (error) {
      dispatch(allUsersFailure(error.response.data.message));
    }
  };

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(LogoutUserRequest());

    await axios.get(`${server}/api/v1/logout`,{
      withCredentials: true 
    });

    dispatch(LogoutUserSuccess());
  } catch (error) {
    dispatch(LogoutUserFailure(error.response.data.message));
  }
};

export const registerUser = (name, email, password, avatar) => async (dispatch) => {
    // console.log(name,email,password,avatar);
    try {
      dispatch(RegisterRequest());

      const { data } = await axios.post(
        `${server}/api/v1/register`,
        { name, email, password, avatar },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true 
        }
      );
      dispatch(RegisterSuccess(data.user));
    } catch (error) {
      dispatch(RegisterFailure(error.response.data.message));
    }
  };

export const updateProfile = (name, email, avatar) => async (dispatch) => {
  try {
    dispatch(updateProfileRequest());
 
    const { data } = await axios.put(
      `${server}/api/v1/update/profile`,
      { name, email, avatar },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true 
      }
    );

    dispatch(updateProfileSuccess(data.message));
  } catch (error) {
    dispatch(updateProfileFailure(error.response.data.message));
  }
};

export const updatePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch(updatePasswordRequest());

      const { data } = await axios.put(
        `${server}/api/v1/update/password`,
        { oldPassword, newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true 
        }
      );

      dispatch(updatePasswordSuccess(data.message));
    } catch (error) {
      dispatch(updatePasswordFailure(error.response.data.message));
    }
  };

export const deleteMyProfile = () => async (dispatch) => {
  try {
    dispatch(deleteProfileRequest());

    const { data } = await axios.delete(`${server}/api/v1/delete/me`,{
      withCredentials: true 
    });

    dispatch(deleteProfileSuccess(data.message));
  } catch (error) {
    dispatch(deleteProfileFailure(error.response.data.message));
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch(forgotPasswordRequest());

    const { data } = await axios.post(
      `${server}/api/v1/forgot/password`,
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true 
      }
    );

    dispatch(forgotPasswordSuccess(data.message));
  } catch (error) {
    dispatch(forgotPasswordFailure(error.response.data.message));
  }
};

export const resetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch(resetPasswordRequest());

    const { data } = await axios.put(
      `${server}/api/v1/password/reset/${token}`,
      {
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true 
      }
    );

    dispatch(resetPasswordSuccess(data.message));
  } catch (error) {
    dispatch(resetPasswordFailure(error.response.data.message));
  }
};

export const getUserPosts = (id) => async (dispatch) => {
  try {
    dispatch(userPostsRequest());

    const { data } = await axios.get(`${server}/api/v1/userposts/${id}`,{
      withCredentials: true 
    });
    dispatch(userPostsSuccess(data.posts));
  } catch (error) {
    dispatch(userPostsFailure(error.response.data.message));
  }
};

export const getUserProfile = (id) => async (dispatch) => {
  try {
    dispatch(userProfileRequest());

    const { data } = await axios.get(`${server}/api/v1/user/${id}`,{
      withCredentials : true
    });
    dispatch(userProfileSuccess(data.user));
  } catch (error) {
    dispatch(userProfileFailure(error.response.data.message));
  }
};

export const followAndUnfollowUser = (id) => async (dispatch) => {
  try {
    dispatch(followUserRequest());

    const { data } = await axios.get(`${server}/api/v1/follow/${id}`,{
      withCredentials: true 
    });
    dispatch(followUserSuccess(data.message));
  } catch (error) {
    dispatch(followUserFailure(error.response.data.message));
  }
};
