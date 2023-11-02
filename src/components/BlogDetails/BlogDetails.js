import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cardData from "../data";
import "./BlogDetails.css";
const BlogDetails = () => {
    const { id } = useParams();
    const blog = cardData.find((item) => item.id === parseInt(id, 10));

    if (!blog) {
        return <div className="blog-details-container">Blog not found</div>;
    }

    const [likes, setLikes] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [likeClicked, setLikeClicked] = useState(false);

    const handleLike = () => {
        setLikes(likes + (likeClicked ? -1 : 1));
        setLikeClicked(!likeClicked);
    };

    const handleComment = () => {
        setShowComments(!showComments);
    };

    const addComment = (newComment) => {
        setComments([...comments, newComment]);
    };

    return (
        <div className="blog-details-container">
            <div className="blog-card">
                <img src={blog.imgSrc} alt={blog.title} className="blog-image" />
                <div className="blog-content">
                    <h2 className="blog-title">{blog.title}</h2>
                    <p className="blog-text">{blog.text}</p>
                </div>
                <div className="blog-actions">
                    <i className={`fa fa-heart blog-action-icon ${likeClicked ? "liked" : ""}`} onClick={handleLike} style={{ fontSize: 40 }}></i>
                    <i className={`fa fa-commenting-o blog-action-icon ${showComments ? "active" : ""}`} onClick={handleComment} style={{ fontSize: 40 }}></i>
                </div>

            </div>

            <div className={`comments-section ${showComments ? "show" : ""}`}>
                {showComments && (
                    <div>
                        <h3>Comments</h3>
                        <ul>
                            {comments.map((comment, index) => (
                                <li key={index}>{comment}</li>
                            ))}
                        </ul>
                        <textarea
                            placeholder="Add a comment..."
                            onKeyUp={(e) => {
                                if (e.key === "Enter") {
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
