import React, { useState, useEffect, useRef } from "react";
import "./Homepage.css";

function AddBlogOptions({ onClose, onAddBlog }) {
    const [blogData, setBlogData] = useState({
        title: "",
        author: "",
        description: "",
        category: "Agriculture", // Default category
    });

    const overlayRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                // Close the form when clicking outside the overlay
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
        // You can send the blogData to a dummy API here
        fetch("https://dummy-api-url", {
            method: "POST",
            body: JSON.stringify(blogData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // Data has been sent successfully
                console.log("Data sent to the API:", data);

                // Close the form
                onClose();
            })
            .catch((error) => {
                console.error("Error sending data to the API:", error);
            });
    };

    return (
        <div className="overlay" ref={overlayRef}>
            <div className="add-blog-content">
                <h2>Add a New Blog</h2>
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
                    <label>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={blogData.author}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={blogData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <select
                        name="category"
                        value={blogData.category}
                        onChange={handleInputChange}
                    >
                        <option value="Agriculture">Agriculture</option>
                        <option value="Farming">Farming</option>
                        <option value="Livestock">Livestock</option>
                        <option value="Horticulture">Horticulture</option>
                    </select>
                </div>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default AddBlogOptions;
