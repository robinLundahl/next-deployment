import { Metadata } from "next";
import { posts } from "../../data";

interface Props {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Post Heaven | Post Page",
  description: "How's your goat doing?",
};

// Hämtar alla id:n som NextJS ska bygga html filer för
export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function PostPage({ params }: Props) {
  const post = posts.find((post) => post.id === params.id);

  //   todo: visa en 404-sida
  if (!post) return null;

  return (
    <main>
      <h1 className="text-3xl">{post.title}</h1>
      <p className="text-green-200">{post.body}</p>
      <span className="text-gray-500">{post.author}</span>
      <span> | </span>
      <span className="text-gray-200">{post.createdAt.toDateString()}</span>
    </main>
  );
}
