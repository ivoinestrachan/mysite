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

        <article className="mt-8 text-gray-800 text-[17px]">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => (
                <p className="leading-relaxed mb-6">{children}</p>
              ),
              h2: ({ children }) => (
                <h2 className="font-bold text-[24px] mt-10 mb-4">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-bold text-[20px] mt-8 mb-3">{children}</h3>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-600"
                >
                  {children}
                </a>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-600 my-6">
                  {children}
                </blockquote>
              ),
              img: ({ src, alt }) => (
                <figure className="my-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={typeof src === "string" ? src : ""}
                    alt={alt ?? ""}
                    className="w-full rounded-lg border border-gray-100"
                  />
                  {alt && (
                    <figcaption className="text-center text-sm text-gray-400 mt-2">
                      {alt}
                    </figcaption>
                  )}
                </figure>
              ),
            }}
          >
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
