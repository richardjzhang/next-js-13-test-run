import type { NextApiRequest } from "next";

const FIRST_PAGE = 0;

async function getPosts(page?: NextApiRequest["query"]["page"]) {
  const key = process.env.NEXT_PUBLIC_DUMMY_API_KEY;
  if (!key) throw new Error("Failed to fetch data");

  const res = await fetch(
    `https://dummyapi.io/data/v1/post?page=${page || FIRST_PAGE}`,
    {
      // cache: "no-store", -> this is for fetching fresh data every time (SSR)
      // next: { revalidate: 10 }, -> this is for revalidating after a timed interval (ISR)
      cache: "force-cache", // -> this is static data fetching (SSG)
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "app-id": key,
      },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export { getPosts };
