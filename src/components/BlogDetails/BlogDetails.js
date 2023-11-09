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
  const [newCommentContent, setNewCommentContent] = useState(""); // Add this line

  const fetchUserName = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/users/${userId}`
      );
      const userData = response.data;
      return userData;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return "User Not Found";
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/individualPosts/${id}`)
      .then((response) => {
        setBlog(response.data);
        console.log(response.data);
        setComments(response.data.comments);
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      });
  }, []);

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
        .put(`http://localhost:5000/api/users/addComment/${id}`, newComment)
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
    const blogContent = document.querySelector(".container"); // Change this to the desired class
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

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container pb50" style={{ marginTop: "150px" }}>
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
                    <a href="#">John Doe</a>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-calendar-o"></i>{" "}
                    <a href="#">{blog.timestamp}</a>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-tags"></i> <a href="#">Bootstrap4</a>
                  </li>
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
                    <button type="submit" className="btn btn-primary btn-lg">
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
