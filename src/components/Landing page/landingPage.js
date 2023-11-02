import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Landingpage.css";
import Nav from "../NavBar/Nav";
import NavBar from "../NavBar/NavBar"; 
import CustomCard from "../Card/Card";
import cardData from "../data";
import AddBlogOptions from "../AddBlogs/AddBlog";

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
            <Nav />
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
