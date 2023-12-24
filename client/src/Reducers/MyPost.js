import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
  loading: false,
  error: null,
};


const myPostsSlice = createSlice({
  name: "myPosts",
  initialState,
  reducers: {
    myPostsRequest: (state) => {
      state.loading = true;
    },
    myPostsSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    myPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  myPostsRequest,
  myPostsSuccess,
  myPostsFailure,
  clearErrors
} = myPostsSlice.actions;

export default myPostsSlice.reducer;  
