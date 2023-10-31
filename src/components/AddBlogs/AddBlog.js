import React, { useState, useEffect, useRef } from "react";
import "./AddBlog.css";

function AddBlogOptions({ onClose }) {
    const [blogData, setBlogData] = useState({
        id: null,
        imgSrc: "",
        title: "",
        text: "",
        buttonText: "Learn More",
        buttonLink: "",
    });

    const overlayRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlogData({
            ...blogData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        if (!blogData.imgSrc || !blogData.title || !blogData.text || !blogData.buttonLink) {
            alert("Please fill in all mandatory fields");
            return;
        }

        onClose();
    };

    useEffect(() => {
        // Add the 'overlay-active' class to the body to prevent scrolling
        document.body.classList.add('overlay-active');

        return () => {
            document.body.classList.remove('overlay-active');
        };
    }, []);

    return (
        <div className="overlay" ref={overlayRef}>
            <div className="add-blog-content">
                <h2>Add a New Blog</h2>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="imgSrc"
                        value={blogData.imgSrc}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={blogData.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        name="text"
                        value={blogData.text}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Button Link:</label>
                    <input
                        type="text"
                        name="buttonLink"
                        value={blogData.buttonLink}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="submission-buttons">
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default AddBlogOptions;
