import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div
      className={`${
        slug &&
        "rounded-md sm:flex sm:flex-col bg-gray-100 m-5 text-center sm:px-4 h-fit pb-3 my-2 text-black"
      }`}
    >
      <h2 className="px-2 text-xl font-semibold mt-7 mb-2 border-b-2 border-gray-400">
        {slug ? "Related Posts" : "Recent Posts"}
      </h2>

      {relatedPosts.map((post) => (
        <Link href={`${post.slug}`}>
          <div className="flex mx-3 cursor-pointer my-2">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="w-16 h-16 sm:w-10 sm:h-10"
            />
            <div className="flex flex-col ml-2 sm:text-sm sm:pr-5">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="flex justify-start">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;
