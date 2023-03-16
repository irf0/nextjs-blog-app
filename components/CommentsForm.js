import React, { useEffect, useRef, useState } from "react";
import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  //Save the user data
  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
    };
    setFormData(initalFormData);
  }, []);

  const handleComment = () => {
    if (!name || !email || !comment) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("email", email);

    submitComment(commentObj).then((res) => {
      setShowSuccessMsg(true);
      setTimeout(() => {
        setShowSuccessMsg(false);
      }, 3000);
      setName("");
      setEmail("");
      setComment("");
    });
  };

  return (
    <div className="justify-center flex">
      <div className="w-4/5 sm:mx-2 bg-gray-100 text-black mx-52 p-8 pb-12 shadow-lg rounded-md">
        <h1 className="text-lg font-semibold mb-4">Leave a reply</h1>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            placeholder="Name"
            className="p-2 rounded-md w-full bg-gray-200 outline-none"
          />
        </div>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Email"
            className="p-2 rounded-md w-full my-2 bg-gray-200 outline-none"
          />
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          name="comment"
          required
          placeholder="Comment"
          className="p-4 outline-none w-full rounded-lg bg-gray-200"
        />
        <button
          type="submit"
          className="bg-yellow-300 rounded-lg p-2"
          onClick={handleComment}
        >
          Comment
        </button>

        <div
          className={`${
            error
              ? "bg-red-400 transition-all ease-in-out animate-bounce rounded-md mt-3 flex justify-center w-1/2 sm:w-full justify-self-center"
              : "bg-green-500 transition-all ease-in-out animate-bounce rounded-md mt-3 flex justify-center w-1/2 sm:w-full justify-self-center"
          }`}
        >
          {error && <p className="text-white">All Fields are required!</p>}
          {showSuccessMsg && (
            <p className="text-white mx-5">
              Thank You 🙏 <br /> Your comment is submitted for review.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsForm;
