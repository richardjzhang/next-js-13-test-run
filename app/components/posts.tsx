import type { Post as PostType } from "@/components/post";
import Post from "@/components/post";
import React from "react";

async function getData() {
  const key = process.env.DUMMY_API_KEY;
  if (!key) throw new Error("Failed to fetch data");

  const res = await fetch("https://dummyapi.io/data/v1/post", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "app-id": key,
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Posts() {
  const { data } = await getData();

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((post: PostType) => (
        <React.Fragment key={post.id}>
          <Post {...post} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Posts;
