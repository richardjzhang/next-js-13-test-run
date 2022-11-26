import Posts from "@/components/posts";
import Header from "@/components/header";
import { getPosts } from "@/utils/api";

async function Home() {
  const initialPosts = await getPosts();
  return (
    <>
      <Header />
      <Posts hasMore initialPosts={initialPosts.data} nextPage={1} />
    </>
  );
}

export default Home;
