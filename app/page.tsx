import Posts from "@/components/posts";

function Home() {
  return (
    <div className="p-12 bg-gray-50">
      <h1 className="mb-10 font-mono text-6xl font-semibold">Dummy Posts</h1>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}

export default Home;
