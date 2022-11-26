import React from "react";
import PostSkeleton from "@/components/skeletons/post";
import { gridLayout } from "@/utils/styles";

interface Props {
  numberOfPosts?: number;
}

export default function Posts({ numberOfPosts = 20 }: Props) {
  const posts = new Array(numberOfPosts).fill(0);
  return (
    <div className={gridLayout}>
      {posts.map((_, index) => (
        <React.Fragment key={index}>
          <PostSkeleton />
        </React.Fragment>
      ))}
    </div>
  );
}
