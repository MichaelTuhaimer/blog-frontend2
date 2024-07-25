import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function PostsPage() {
  const [posts, setPosts] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);

  return (
    <div>
      <PostsNew onCreate={handleCreate} />
      <PostsIndex posts={posts} />
    </div>
  );
}
