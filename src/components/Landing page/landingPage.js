import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogDetails from "../BlogDetails/BlogDetails";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../NavBar/Nav";
import NavBar from "../NavBar/NavBar";
import CustomCard from "../Card/Card";
import AddBlogOptions from "../AddBlogs/AddBlog";
import axios from "axios";
import Air from "../weather/Air";
import Weather from "../weather/weather";
import ChatBot from "../Chat/Chat";
// ... (your existing imports)

import "./Landingpage.css";

const Page = ({ loggedInUser }) => {
  const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [cardData, setCardData] = useState([]);

  const openAddBlog = () => {
    setIsAddBlogOpen(true);
  };

  const closeAddBlog = () => {
    setIsAddBlogOpen(false);
  };

  const handleReadMore = (blogId) => {
    setSelectedBlogId(blogId);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/posts")
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  }, []);

  return (
    <div className="page-container">
      <NavBar />
      <div className="d-flex" id="wrapper">
        <div className="border-end bg-white sidebar" id="sidebar-left">
          <Air />
          <Weather />
          <div className="list-group list-group-flush"></div>
        </div>
        <div id="page-content-wrapper">
          <h1 className="mt-4">Simple Sidebar</h1>
          <button onClick={openAddBlog} className="add-blog-button">
            Add Blog
          </button>
          {isAddBlogOpen && <AddBlogOptions onClose={closeAddBlog} />}
          <div className="card-list">
            {cardData.map((card) => (
              <div key={card._id} className="card-wrapper">
                <CustomCard
                  imgSrc={card.post_image}
                  title={card.post_heading}
                  text={card.post_content}
                  buttonLink={`/blog/${card._id}`} // Pass the string directly
                  onClick={() => handleReadMore(card.id)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="border-end bg-white sidebar" id="sidebar-right">
          <ChatBot />
          <div className="list-group list-group-flush"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
