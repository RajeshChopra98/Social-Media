import { configureStore } from "@reduxjs/toolkit";

import userReducer  from "./Reducers/User";
import allUsersReducer from "./Reducers/AllUsers";
import postOfFollowingReducer from "./Reducers/PostOfFollowing";
import userProfileReducer from "./Reducers/UserProfile";
import likeReducer from "./Reducers/LikeReducer";
import myPostsReducer from "./Reducers/MyPost";
import userPostsReducer from "./Reducers/userPostSlice";


const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowingReducer,
    allUsers: allUsersReducer,
    like: likeReducer,
    myPosts: myPostsReducer,
    userProfile: userProfileReducer,
    userPosts: userPostsReducer,
  },
}); 

export default store;
