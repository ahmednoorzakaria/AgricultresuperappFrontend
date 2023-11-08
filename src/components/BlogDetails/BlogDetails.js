import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import cardData from "../data";
import axios from "axios";

import "./BlogDetails.css";
const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [likes, setLikes] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [likeClicked, setLikeClicked] = useState(false);

  useEffect(() => {
    // Fetch the blog post from the server based on the ID
    axios
      .get(`http://localhost:5000/api/users/individualPosts/${id}`)
      .then((response) => {
        setBlog(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      });
  }, [id]);

  if (!blog) {
    return <div className="blog-details-container">Blog not found</div>;
  }
  

  const handleLike = () => {
    setLikes(likes + (likeClicked ? -1 : 1));
    setLikeClicked(!likeClicked);
  };


  const handleComment = () => {
    setShowComments(!showComments);
    setComments(blog.comments)
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleAddComment = (newComment) => {
    axios.put(`http://localhost:5000/api/users/individualPosts/${id}`,newComment)
    .then((response) => {

         // Handle the response if needed (e.g., update the UI)
         console.log("Comment added successfully");
         console.log(response.data);
        })
        .catch((error) => {
            // Handle any errors
            console.error("Error adding comment:", error);
        });

    
  }

  return (
    <div className="blog-details-container">
      <div className="blog-card">
        <img src={blog.post_image} alt={blog.title} className="blog-image" />
        <div className="blog-content">
          <h2 className="blog-title">{blog.post_heading}</h2>
          <p className="blog-text">{blog.post_content}</p>
        </div>
        <div className="blog-actions">
          <i
            className={`fa fa-heart blog-action-icon ${
              likeClicked ? "liked" : ""
            }`}
            onClick={handleLike}
            style={{ fontSize: 40 }}
          ></i>
          <i
            className={`fa fa-commenting-o blog-action-icon ${
              showComments ? "active" : ""
            }`}
            onClick={handleComment}
            style={{ fontSize: 40 }}
          ></i>
        </div>
      </div>

      <div className={`comments-section ${showComments ? "show" : ""}`}>
        {showComments && (
          <div>
            <h3>Comments</h3>
            <ul>
              {comments.map((comment, index) => (
                <div>
                <h2>User:{comment.user_id}</h2>
                <h4 key={index}>{comment.comment_content}</h4>
              

                </div>
                ))}
            </ul>
            <textarea
              placeholder="Add a comment..."
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleAddComment(newComment)
                  addComment(e.target.value);
                  e.target.value = "";
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
