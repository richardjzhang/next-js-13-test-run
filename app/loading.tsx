import Header from "@/components/header";
import PostsSkeleton from "@/components/skeletons/posts";

export default function Loading() {
  return (
    <>
      <Header />
      <PostsSkeleton />
    </>
  );
}
