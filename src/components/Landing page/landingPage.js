import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Landingpage.css";
import CustomCard from "../Card/Card";
import cardData from "../data";
import AddBlogOptions from "../AddBlogs/AddBlog";
import Navbar from "../NavBar/NavBar";

const Page = () => {
    const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);

    const openAddBlog = () => {
        setIsAddBlogOpen(true);
    };

    const closeAddBlog = () => {
        setIsAddBlogOpen(false);
    };

    return (
        <div className="page-container">
            <Navbar />
            <div className="d-flex" id="wrapper">
                <div className="border-end bg-white" id="sidebar-wrapper" style={{ width: "500px" }}>
                    <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                    <div className="list-group list-group-flush"></div>
                </div>
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <button onClick={openAddBlog} className="add-blog-button">
                            Add Blog
                        </button>
                        {isAddBlogOpen && <AddBlogOptions onClose={closeAddBlog} />}
                        <div className="card-list">
                            {cardData.map((card) => (
                                <CustomCard
                                    key={card.id}
                                    imgSrc={card.imgSrc}
                                    title={card.title}
                                    text={card.text}
                                    buttonText={card.buttonText}
                                    buttonLink={card.buttonLink}
                                />
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
