import React, { useReducer, useEffect } from "react";
import Axios from "axios";

const initialState = {
  loading: true,
  error: "",
  posts: []
};
const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        loading: false,
        error: "",
        posts: action.payload
      };
    case "error":
      return {
        loading: false,
        error: "Something went wrong",
        posts: []
      };
    default:
      return state;
  }
};
function FetchingData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(respone => {
        dispatch({
          type: "success",
          payload: respone.data
        });
      })
      .catch(err => {
        dispatch({
          type: "error"
        });
      });
  }, []);

  const { loading, error, posts } = state;
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <ul>
        {posts.map(post => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default FetchingData;
