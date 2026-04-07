import React, { useState } from "react";
import Dashboard from "./Dashboard";
import LocalUserList from "./LocalUserList";
import UserList from "./UserList";
import FakePostList from "./FakePostList";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="container">
      {page === "home" && <Dashboard setPage={setPage} />}
      {page === "local" && <LocalUserList setPage={setPage} />}
      {page === "users" && <UserList setPage={setPage} />}
      {page === "posts" && <FakePostList setPage={setPage} />}
    </div>
  );
}

export default App;