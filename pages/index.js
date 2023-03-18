import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import PostCard from "../components/PostCard";
import { getPosts } from "../services";

const Home = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <HeroBanner />

      {/* We'll fetch and display list of posts like product lists here */}
      <div>
        <div className="flex sm:flex-col flex-wrap mx-2">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>

        <footer>
          <Footer />
        </footer>
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
