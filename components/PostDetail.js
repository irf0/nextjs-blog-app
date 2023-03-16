import React from "react";
import { getPostDetails, getPosts } from "../services";
import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <>
      <div className="mx-52 sm:mx-10 mt-5">
        <div className="flex gap-2">
          <h2 className="font-semibold">Share on </h2>
          <TwitterShareButton
            url={`https://localhost.com/${post.slug}`}
            title={`Checkout this amazing blog about ${post.title}`}
            image={post.featuredImage.url}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton
            url={`https://localhost.com/${post.slug}`}
            title={`Checkout this amazing blog ${post.title}`}
            image={post.featuredImage.url}
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <WhatsappShareButton
            url={`https://localhost.com/${post.slug}`}
            title={`Checkout this amazing blog about ${post.title}`}
            image={post.featuredImage.url}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
        <div>
          <h1 className="mb-8 text-3xl font-semibold font-Montserrat">
            {post.title}
          </h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
