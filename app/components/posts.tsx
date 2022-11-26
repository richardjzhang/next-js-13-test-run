"use client";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import type { Post as PostType } from "@/components/post";
import Post from "@/components/post";
import PostsSkeleton from "@/components/skeletons/posts";
import { gridLayout } from "@/utils/styles";

interface PostsProps {
  hasMore: boolean;
  initialPosts: PostType[];
  nextPage: number;
}

function Posts(props: PostsProps) {
  const [hasMore, setHasMore] = useState(props.hasMore);
  const [posts, setPosts] = useState(props.initialPosts);
  const [nextPage, setNextPage] = useState(props.nextPage);
  const getMorePosts = async () => {
    const response = await fetch(`/api/posts?page=${nextPage}`);
    const newPosts = await response.json();
    setPosts((post) => [...post, ...newPosts.data]);
    setNextPage((page) => page + 1);
    setHasMore(
      Math.ceil(newPosts.total / newPosts.limit) - newPosts.page !== 0
    );
  };

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={getMorePosts}
      hasMore={hasMore}
      loader={<PostsSkeleton numberOfPosts={8} />}
      endMessage={<h4>Nothing more to show</h4>}
    >
      <div className={gridLayout}>
        {posts.map((post: PostType) => (
          <React.Fragment key={post.id}>
            <Post {...post} />
          </React.Fragment>
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default Posts;
