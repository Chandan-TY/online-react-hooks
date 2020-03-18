import React, { useState, useEffect } from "react";
import Axios from "axios";

function FetchingData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    try {
      setLoading(true);
      const response = await Axios.get(url);
      setLoading(false);
      //   console.log(response.data);
      setPosts(response.data);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <ul>
        {posts.map(post => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </>
  );
}

export default FetchingData;
