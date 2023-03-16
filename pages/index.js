import Head from "next/head";
import Image from "next/image";
import Categories from "../components/Categories";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import PostWidget from "../components/PostWidget";
import { getPosts } from "../services";

const Home = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <HeroBanner />

      {/* We'll fetch and display list of posts like product lists here */}
      <div>
        <div className="flex">
          {posts.map((post) => (
            <PostCard post={post.node} />
          ))}
          <div className="sm:hidden">
            <PostWidget />
          </div>
        </div>

        <div>
          <div className="flex flex-col lg:hidden md:hidden xl:hidden">
            <PostWidget />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

export default Home;
