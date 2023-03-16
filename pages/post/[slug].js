import React from "react";
import PostDetail from "../../components/PostDetail";
import Author from "../../components/Author";
import CommentsForm from "../../components/CommentsForm";
import Comments from "../../components/Comments";
import PostWidget from "../../components/PostWidget";
import { getPostDetails, getPosts } from "../../services";

import { useRouter } from "next/router";
import Link from "next/link";

const PostDetails = ({ post }) => {
  const router = useRouter();

  const baseUrl = "http://localhost.com"; // Replace with your actual base URL

  return (
    <>
      <div className="flex">
        <div className="w-4/5 border-r sm:border-none border-gray-500 h-screen sm:w-full">
          <div className="w-full">
            <Author author={post.author} post={post} />
            <PostDetail post={post} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="sm:flex mx-5 w-4/5 justify-center lg:hidden xl:hidden md:hidden">
            <PostWidget slug={post.slug} />
          </div>
        </div>
        <div className="flex mx-5 w-1/5 justify-center sm:hidden">
          <PostWidget slug={post.slug} />
        </div>
      </div>
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
