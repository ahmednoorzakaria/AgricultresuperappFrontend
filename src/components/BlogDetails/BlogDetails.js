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

    const [likeClicked, setLikeClicked] = useState(false);
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    const handleLikeComment = (commentIndex) => {
        const updatedComments = [...comments];
        updatedComments[commentIndex].likes = !updatedComments[commentIndex].likes;
        setComments(updatedComments);
    };

    const handleReplyComment = (commentIndex, newReply) => {
        const updatedComments = [...comments];
        updatedComments[commentIndex].replies.push({ text: newReply, likes: false });
        setComments(updatedComments);
    };

    const handleShowComments = () => {
        setShowComments(!showComments);
    };

    const addComment = (newComment) => {
        setComments([...comments, { text: newComment, likes: false, replies: [] }]);
    };

    return (
        <div className="blog-details-container">
            <div className="blog-card">
                <img src={blog.imgSrc} alt={blog.title} className="blog-image" />
                <div className="blog-content">
                    <h2 className="blog-title">{blog.title}</h2>
                    <p className="blog-text">{blog.text}</p>
                    <div className="blog-actions">
                        <i
                            className={`fa fa-heart blog-action-icon ${likeClicked ? "liked" : ""}`}
                            onClick={() => setLikeClicked(!likeClicked)}
                            style={{ fontSize: 40 }}
                        ></i>
                        <i
                            className={`fa fa-commenting-o blog-action-icon ${showComments ? "active" : ""}`}
                            onClick={handleShowComments}
                            style={{ fontSize: 40 }}
                        ></i>
                    </div>
                </div>
            </div>

            {showComments && (
                <div className="comments-section">
                    <div>
                        <h3>Comments</h3>
                        <ul className="comments-list">
                            {comments.map((comment, commentIndex) => (
                                <li key={commentIndex} className="comment-item">
                                    {comment.text}
                                    <span
                                        onClick={() => handleLikeComment(commentIndex)}
                                        className="comment-action-icon"
                                    >
                                        <i className={`fa fa-thumbs-up ${comment.likes ? "liked" : ""}`}></i>
                                    </span>
                                    <span
                                        onClick={() => {
                                            const newReply = window.prompt("Reply to this comment:");
                                            if (newReply !== null) {
                                                handleReplyComment(commentIndex, newReply);
                                            }
                                        }}
                                        className="comment-action-icon"
                                    >
                                        <i className={`fa fa-reply`}></i>
                                    </span>
                                    <ul className="comment-replies">
                                        {comment.replies.map((reply, replyIndex) => (
                                            <li key={replyIndex} className="comment-reply-item">
                                                {reply.text}
                                                <span
                                                    onClick={() => handleLikeComment(replyIndex)}
                                                    className="comment-action-icon"
                                                >
                                                    <i className={`fa fa-thumbs-up ${reply.likes ? "liked" : ""}`}></i>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
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
                </div>
            )}
        </div>
    );
};

export default BlogDetails;
