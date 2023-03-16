import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="w-4/5 sm:ml-8 ml-32 mt-5 bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-black">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4 text-black">
                <span className="font-semibold text-black">{comment.name}</span>
                on {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-black w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
