import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [likes, setLikes] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [likeClicked, setLikeClicked] = useState(false);
  const [commentInput, setCommentInput] = useState("");
 

  const fetchUserName = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/users/${userId}`);

      const userData = response.data;
      return userData
      
    } catch (error) {
      console.error("Error fetching user data:", error);
      return "User Not Found";
    }
  };
  useEffect(() => {
    // Fetch the blog post from the server based on the ID
    axios
      .get(`http://localhost:5000/api/users/individualPosts/${id}`)
      .then((response) => {
        setBlog(response.data);
        setComments(response.data.comments);
        
       
      })
      
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      });
  }, [])

  


  




  const displayComments = async () => {
    const updatedComments = await Promise.all(comments.map(async (comment) => {
      const userName = await fetchUserName(comment.user_id);
      return {
        ...comment,
        userName,
      };
    }))
    setComments(updatedComments);
  };

  

  const handleLike = () => {
    setLikes(likes + (likeClicked ? -1 : 1));
    setLikeClicked(!likeClicked);
  };

  const handleComment = () => {
    setShowComments(!showComments);
    if (showComments) {
      setComments([]);
    } else {
      displayComments();
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    const commentContent = e.target.elements.commentInput.value

    if (!commentContent) {
      return; // Prevent submitting an empty comment
    }
  
    const newComment = {
      user_id: localStorage.getItem("UserId"),
      comment_content: commentContent,
    };
  
    try {
      axios.put(`http://localhost:5000/api/users/addComment/${id}`, newComment)
        .then((response) => {
          console.log(response.data);
          
  
          
          commentInput = ""; // Clear the comment input
        })
        .catch((error) => {
          console.error("Error adding comment:", error);
          alert("Failed to add comment. Please try again later.");
        });
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment. Please try again later.");
    }
  
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
                <div key={index}>
                  <h2>User: {comment.userName}</h2>
                  <h4>{comment.comment_content}</h4>
                  
                </div>
              ))}
            </ul>
            <form onSubmit={handleAddComment}>
  <input
  
    id="commentInput"
    name="commentInput"
    placeholder="Add a comment..."
    type="text"
  />
  <button type="submit">Submit</button>
</form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;



