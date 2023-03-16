import moment from "moment";
import Link from "next/link";
import React from "react";

const Author = ({ post }) => {
  return (
    <div>
      <div className="flex mx-52 sm:mx-10 mt-20 text-center px-1">
        <Link href="https://dev-irfan.vercel.app" target="_blank">
          <div className="flex">
            <img
              src={post?.author?.photo?.url}
              alt={post?.author?.name}
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <p className="flex items-center font-carter-one cursor-pointer">
                {post?.author?.name}
              </p>
              <span className="align-middle flex items-center -mt-2">
                {moment(post?.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Author;
