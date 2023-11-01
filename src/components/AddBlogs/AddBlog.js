import React, { useState, useEffect, useRef } from "react";
import "./AddBlog.css";
import cardData from "../data"; // Import your data from data.js

function AddBlogOptions({ onClose }) {
    const [newBlog, setNewBlog] = useState({
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
        setNewBlog({
            ...newBlog,
            [name]: value,
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setNewBlog({
                    ...newBlog,
                    imgSrc: event.target.result,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        if (!newBlog.imgSrc || !newBlog.title || !newBlog.text) {
            alert("Please fill in all mandatory fields");
            return;
        }

        // Create a new blog object based on the user input
        const newBlogEntry = {
            id: cardData.length + 1, // Generate a new unique ID
            imgSrc: newBlog.imgSrc,
            title: newBlog.title,
            text: newBlog.text,
            buttonText: newBlog.buttonText,
            buttonLink: newBlog.buttonLink,
        };

        // Push the new blog entry to the cardData array in data.js
        cardData.push(newBlogEntry);

        // Clear the form
        setNewBlog({
            imgSrc: "",
            title: "",
            text: "",
            buttonText: "Learn More",
            buttonLink: "",
        });

        onClose();
    };

    useEffect(() => {
        // Add the 'overlay-active' class to the body to prevent scrolling
        document.body.classList.add('overlay-active');

        return () => {
            // Remove the 'overlay-active' class from the body when the component unmounts
            document.body.classList.remove('overlay-active');
        };
    }, []);

    return (
        <div className="overlay" ref={overlayRef}>
            <div className="add-blog-content">
                <h2>Add a New Blog</h2>
                <div>
                    <label>Image Upload:</label> <br />
                    <input
                        type="file"
                        accept="image/*"
                        name="imgFile"
                        onChange={handleImageUpload}
                    />
                </div>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={newBlog.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        name="text"
                        value={newBlog.text}
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
