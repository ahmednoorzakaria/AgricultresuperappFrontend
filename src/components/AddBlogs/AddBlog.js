import React, { useState, useEffect, useRef } from "react";
import "./AddBlog.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode without destructuring

function AddBlogOptions({ onClose }) {
  const [newBlog, setNewBlog] = useState({
    user_id: "",
    post_image: "", // Initialize post_image with an empty string
    post_heading: "",
    post_content: "",
    buttonText: "Learn More",
    buttonLink: "",
  });
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwtDecode(token);

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
          post_image: event.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!newBlog.post_image || !newBlog.post_heading || !newBlog.post_content) {
      alert("Please fill in all mandatory fields");
      return;
    }

    try {
      if (!decodedToken) {
        alert("Please sign in to create a new blog post.");
        return;
      }

      const newBlogEntry = {
        user_id: decodedToken.id,
        post_image: newBlog.post_image, // Store the image URL
        post_heading: newBlog.post_heading,
        post_content: newBlog.post_content,
        buttonText: newBlog.buttonText,
        buttonLink: newBlog.buttonLink,
      };

      const headers = {
        Authorization: token,
      };

      const response = await axios.post(
        "https://agriconnect-3erw.onrender.com/api/users/create",
        newBlogEntry,
        { headers }
      );

      console.log(response.data);
      console.log(newBlogEntry);

      setNewBlog({
        user_id: "",
        post_image: "",
        post_heading: "",
        post_content: "",
        buttonText: "Learn More",
        buttonLink: "",
      });

      onClose();
      console.log("Blog post created successfully");
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  useEffect(() => {
    document.body.classList.add("overlay-active");
    return () => {
      document.body.classList.remove("overlay-active");
    };
  }, []);

  return (
    <div className="overlay" ref={overlayRef}>
      <div className="add-blog-content">
        <h2>Add a New Blog</h2>
        <div>
          <label>Image URL:</label> <br />
          <input
            type="text"
            name="post_image"
            value={newBlog.post_image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="post_heading"
            value={newBlog.post_heading}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="post_content"
            value={newBlog.post_content}
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
