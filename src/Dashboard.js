import React from "react";

function Dashboard({ setPage }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => setPage("local")}>Local Users</button>
      <button onClick={() => setPage("users")}>Users API</button>
      <button onClick={() => setPage("posts")}>Fake API Posts</button>
    </div>
  );
}

export default Dashboard;