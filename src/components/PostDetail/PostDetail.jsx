import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const posts = useLoaderData();
  const { id, title, userId, body } = posts;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h3>Details about your post #{id}</h3>
      <p>
        <small>{body}</small>
        <button onClick={handleGoBack}>Go back</button>
      </p>
    </div>
  );
};

export default PostDetail;
