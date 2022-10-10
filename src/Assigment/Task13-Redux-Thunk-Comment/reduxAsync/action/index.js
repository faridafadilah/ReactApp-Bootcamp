import _ from "lodash";
import PlaceHolder from "../../Component/axios/PlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};
export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await PlaceHolder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = (id) => {
  return async (dispatch, getState) => {
    const response = await PlaceHolder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};
