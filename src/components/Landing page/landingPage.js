import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogDetails from "../BlogDetails/BlogDetails"; 
import Sidebar from "../Sidebar/Sidebar";
import "./Landingpage.css";
import Nav from "../NavBar/Nav";
import NavBar from "../NavBar/NavBar";
import CustomCard from "../Card/Card";
import cardData from "../data";
import AddBlogOptions from "../AddBlogs/AddBlog";
import axios from "axios";


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
    // Fetch data from your API when the component mounts
    axios
      .get("http://localhost:5000/api/users/posts")
      .then((response) => {
        console.log(response.data);
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
                <div className="border-end bg-white" id="sidebar-wrapper" style={{ width: "500px" }}>
                    <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                    <div className="list-group list-group-flush"></div>
                </div>

                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <h1 className="mt-4">Simple Sidebar</h1>
                        <button onClick={openAddBlog} className="add-blog-button">
                            Add Blog
                        </button>
                        {isAddBlogOpen && <AddBlogOptions onClose={closeAddBlog} />}
                        <div className="card-list">
                            {cardData.map((card) => (
                                <div key={card._id}>
                                    <CustomCard
                                        imgSrc={card.post_image}
                                        title={card.post_heading}
                                        text={card.post_content}
                                    />
                                    <Link
                                        to={`/blog/${card._id}`} 
                                        className="read-more-link"
                                        onClick={() => handleReadMore(card._id)}
                                    >
                                        Read More
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-end bg-white" id="sidebar-wrapper" style={{ width: "500px" }}>
                    <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                    <div className="list-group list-group-flush"></div>
                </div>
            </div>
        </div>
    );
};

export default Page;