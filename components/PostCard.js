import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <>
      <div className="container shadow-xl w-80 h-fit sm:w-80 sm:h-fit mt-3 flex flex-col flex-wrap mx-auto rounded-md whitespace-normal">
        <div className="relative overflow-hidden rounded-md m-1">
          {/* Post Image */}
          <img src={post.featuredImage.url} alt="post" className="w-full" />

          {/* User & Date */}
          <div className="flex justify-between text-center px-1">
            <div className="flex">
              <img
                src={post?.author?.photo?.url}
                alt={post?.author?.name}
                className="w-10 h-10"
              />
              <p className="flex items-center font-carter-one text-gray-600 cursor-pointer">
                {post?.author?.name}
              </p>
            </div>

            <div className="font-medium text-gray-700 flex items-center sm:text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline text-blue-300 sm:-mr-4 sm:ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>

          <h1 className="text-lg font-semibold ml-5 whitespace-normal max-w-full">
            {post.title}
          </h1>
          <p className="font-Montserrat mx-5 max-w-prose">{post.excerpt}</p>
          <Link href={`post/${post?.slug}`}>
            <button className="p-1 bg-yellow-300 mb-3 w-4/5 mx-5 rounded-sm">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostCard;
