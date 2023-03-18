import React from "react";
import PostDetail from "../../components/PostDetail";
import Author from "../../components/Author";
import CommentsForm from "../../components/CommentsForm";
import Comments from "../../components/Comments";
import PostWidget from "../../components/PostWidget";
import Loader from "../../components/Loader";
import { getPostDetails, getPosts } from "../../services";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex">
        <div className="w-4/5 border-r sm:border-none border-gray-500 h-screen sm:w-full">
          <div className="w-full">
            <Author post={post} />
            <PostDetail post={post} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>

          <div className="sm:flex mx-3 w-11/12 justify-center lg:hidden xl:hidden md:hidden">
            <PostWidget slug={post.slug} />
          </div>
          <footer>
            <Footer />
          </footer>
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
    fallback: true,
  };
}
