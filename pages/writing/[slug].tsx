import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPostSlugs, getPostBySlug, Post } from "../../lib/posts";

interface WritingPageProps {
  post: Post;
}

const WritingPage: NextPage<WritingPageProps> = ({ post }) => {
  useEffect(() => {
    document.body.style.overflowX = "auto";
    document.body.style.overflowY = "auto";

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "hidden";
    };
  }, []);

  return (
    <div className="max-w-2xl mx-auto sm:px-6 px-4">
      <Head>
        <title>{post.title} — Ivoine Strachan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={post.description} />
      </Head>

      <div className="mt-[130px] mb-20">
        <Link
          href="/"
          className="font-mono text-[13px] text-gray-500 hover:text-gray-800"
        >
          ← back
        </Link>

        <h1 className="font-bold sm:text-[32px] text-[24px] mt-6">
          {post.title}
        </h1>
        {post.date && (
          <div className="text-gray-400 font-mono text-[13px] mt-2">
            {post.date}
          </div>
        )}

        <article className="prose mt-8 leading-relaxed text-gray-800 space-y-4">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPostSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<WritingPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  return {
    props: {
      post: getPostBySlug(slug),
    },
  };
};

export default WritingPage;
