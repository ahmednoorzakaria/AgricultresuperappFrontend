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
  const [userData, setUserData] = useState(null);
  const [newCommentContent, setNewCommentContent] = useState("");
  const [followed, setFollowed] = useState(false); // Add this line

  useEffect(() => {
    axios
      .get(`https://agriconnect-3erw.onrender.com/api/users/individualPosts/${id}`)
      .then((response) => {
        setBlog(response.data);
        console.log(response.data);
        setComments(response.data.comments);
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      });
  }, []);

  const fetchUserName = async (user_id) => {
    try {
      const response = await axios.get(
        `https://agriconnect-3erw.onrender.com/api/users/users/${userId}`
      );
      setuserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      return "User Not Found";
    }
  };

  const displayComments = async () => {
    const updatedComments = await Promise.all(
      comments.map(async (comment) => {
        const userName = await fetchUserName(comment.user_id);
        return {
          ...comment,
          userName,
        };
      })
    );
    setComments(updatedComments);
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

    if (!newCommentContent) {
      return; // Prevent submitting an empty comment
    }

    const newComment = {
      user_id: localStorage.getItem("UserId"),
      post_id: id,
      comment_content: newCommentContent,
    };

    try {
      axios
        .put(`https://agriconnect-3erw.onrender.com/api/users/addComment/${id}`, newComment)
        .then((response) => {
          console.log(response.data);
          // Clear the comment input
          setNewCommentContent(""); // Clear the comment input using state
        })
        .catch((error) => {
          console.error("Error adding comment:", error);
          alert("Failed to add comment. Please try again later.");
        });
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment. Please try again later.");
    }
  };

  useEffect(() => {
    const blogContent = document.querySelector(".container");
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navbarHeight = navbar.offsetHeight;

      if (scrollY > navbarHeight) {
        blogContent.style.marginTop = `${navbarHeight}px`;
      } else {
        blogContent.style.marginTop = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFollow = async () => {
    try {
      // Assuming you have the user ID and post ID available
      const userId = localStorage.getItem("UserId");
      const followingUserId = blog.user_id; // or replace with the appropriate field from your data

      const response = await axios.put(
        "https://agriconnect-3erw.onrender.com/api/users/follow",
        {
          user_id: userId,
          followingUserId: followingUserId,
        }
      );

      // Check the response and update the UI as needed
      if (response.data.message === "Successfully followed user") {
        setFollowed(true);
        // You may also update other UI elements or state variables
      } else {
        console.error("Failed to follow user:", response.data.message);
      }
    } catch (error) {
      console.error("Error following user:", error);
      // Handle errors
    }
  };

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div
        className={`container pb50 ${followed ? "white-bg" : ""}`}
        style={{ marginTop: "150px" }}
      >
        {" "}
        <div className="row">
          <div className="col-md-9 mb40">
            <article>
              <img
                src={blog.post_image}
                alt=""
                className="img-fluid mb30 enlarged-image"
              />
              <div className="post-content">
                <h3>{blog.post_heading}</h3>
                <ul className="post-meta list-inline">
                  <li className="list-inline-item">
                    <i className="fa fa-user-circle-o"></i>{" "}
                    <a href="#">{userData ? userData.name : "Unknown User"}</a>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-calendar-o"></i>{" "}
                    <a href="#">
                      {new Date(blog.timestamp).toLocaleDateString()}
                    </a>
                  </li>
                  <button
                    className={`btn btn-success btn-sm ml-2 ${
                      followed ? "btn-followed" : "btn-white"
                    }`}
                    onClick={handleFollow}
                  >
                    {followed ? "Followed" : `+ Follow`}
                  </button>
                </ul>

                {blog.post_content &&
                  blog.post_content.split("\n").map((paragraph, index) => (
                    <p key={index} className="paragraph">
                      {paragraph}
                    </p>
                  ))}

                <h4 className="mb40 text-uppercase font500">Comments</h4>
                <div className="comment-section">
                  {comments.map((comment, index) => (
                    <div key={index} className="media mb40 comment-box">
                      <i className="d-flex mr-3 fa fa-user-circle-o fa-3x">
                        <h5
                          className="mt-0 font400 clearfix"
                          style={{ color: "black" }}
                        >
                          {comment.User.name}
                        </h5>
                      </i>
                      <div className="media-body">
                        {comment.comment_content}
                      </div>
                    </div>
                  ))}
                  <hr className="mb40" />
                </div>
                <div></div>
                <h4 className="mb40 text-uppercase font500">Post a comment</h4>
                <form role="form" onSubmit={handleAddComment}>
                  <div className="form-group">
                    <label>Comment</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Comment"
                      value={newCommentContent}
                      onChange={(e) => setNewCommentContent(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="clearfix float-right">
                    <button
                      type="submit"
                      className={`btn btn-success btn-lg ${
                        followed ? "btn-followed" : "btn-white"
                      }`}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </article>
          </div>
          <div className="col-md-3 mb40"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
