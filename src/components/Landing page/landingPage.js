
import React from "react";
import Navbar from "../NavBar/NavBar";
import Sidebar from "../Sidebar/Sidebar";
import "./Landingpage.css"
import Nav from "../NavBar/Nav";
import CustomCard from "../Card/Card";
import cardData from "../data";

const Page = () => {
    return (
        <div className="page-container">
            <Navbar />
            <div class="d-flex" id="wrapper">
                <div class="border-end bg-white" id="sidebar-wrapper" style={{ width: "500px" }}>
                    <div class="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                    <div class="list-group list-group-flush">

                    </div>
                </div>
                <div id="page-content-wrapper">
                    <Nav />
                    <div class="container-fluid">
                        <h1 class="mt-4">Simple Sidebar</h1>
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
                <div class="border-end bg-white" id="sidebar-wrapper" style={{ width: "500px" }}>
                    <div class="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                    <div class="list-group list-group-flush">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;