import { posts } from "./data";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {posts.map((post) => (
        <Link
          href={"/posts/" + post.id}
          key={post.id}
          className="border flex flex-col rounded p-4 mb-8"
        >
          <h2 className="text-2xl">{post.title}</h2>
          <span className="text-gray-300">{post.createdAt.toDateString()}</span>
        </Link>
      ))}
    </main>
  );
}
