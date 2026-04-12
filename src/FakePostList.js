import React, { useEffect, useState } from "react";
import axios from "axios";

function FakePostList({ setPage }) {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    axios.get("https://dummyjson.com/posts")
      .then(res => setPosts(res.data.posts));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <h2>Fake API Posts</h2>
      <button onClick={() => setPage("home")}>Back</button>
      <button onClick={loadPosts}>Refresh</button>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            <strong>{p.title}</strong>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FakePostList;