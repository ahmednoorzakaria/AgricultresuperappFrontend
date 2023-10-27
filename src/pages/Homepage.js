import React, { useState } from "react";
import './Homepage.css';
import Cultural from '../images/Cultural.png';
import { Link } from "react-router-dom";
import './Homepage.css';

function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const itemsPerPage = 3;

    const blogPosts = [
        { title: "Blog 1", author: "Author 1", description: "Agricultural blog", category: "Agriculture" },
        { title: "Blog 2", author: "Author 2", description: "Farming blog", category: "Farming" },
        { title: "Blog 3", author: "Author 3", description: "Livestock blog", category: "Livestock" },
        { title: "Blog 4", author: "Author 4", description: "Horticulture blog", category: "Horticulture" },
        { title: "Blog 5", author: "Author 5", description: "Farming blog", category: "Farming" },
        { title: "Blog 6", author: "Author 6", description: "Livestock blog", category: "Livestock" },
    ];


    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };
    const handleSearch = (event) => {
        const text = event.target.value;
        setSearchText(text);
    }

    const visibleBlogs = blogPosts
        .filter(post => selectedCategory === "All" || post.category === selectedCategory)
        .filter(post => post.title.toLowerCase().includes(searchText.toLowerCase()));

    const totalPages = Math.ceil(visibleBlogs.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const visibleBlogsOnCurrentPage = visibleBlogs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div>
            <nav className="custom-nav">
                <div className="content1">
                    <img className="custom-image" src={Cultural} alt="logo" />
                    <div className="search-section">
                        <input className="custom-input" type="text" placeholder="Search Blog" value={searchText} onChange={handleSearch} />
                        <button className="custom-search">Search</button>
                    </div>

                    <li>
                        <button className="login"><Link to="/signup">Login/Signup</Link></button>
                    </li>
                </div>
                <div className="content2">
                    <ul className="list2">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Blog/Post List</Link></li>
                        <li><Link to="/">Profile</Link></li>
                        <li><Link to="/">Create Blog/Post</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="body-section">
                <div className="flex-for-body">
                    <div className="cards-section">
                        {visibleBlogsOnCurrentPage.map((post, index) => (
                            <div className="card" key={index}>
                                <h2>{post.title}</h2>
                                <h2>{post.author}</h2>
                                <p>{post.description}</p>
                                <button>Read More</button>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        {Array.from({ length: 1 }).map((_, index) => (
                            <button key={index} className={currentPage === index + 1 ? "active" : ""}>
                                {currentPage}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>

                </div>
                <div className="filter-by">
                    <h3>Filter By:</h3>
                    <div className="radio-grid">
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="All"
                                checked={selectedCategory === "All"}
                                onChange={() => handleCategoryChange("All")}
                            />
                            All
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="Agriculture"
                                checked={selectedCategory === "Agriculture"}
                                onChange={() => handleCategoryChange("Agriculture")}
                            />
                            Agriculture
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="Farming"
                                checked={selectedCategory === "Farming"}
                                onChange={() => handleCategoryChange("Farming")}
                            />
                            Farming
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="Livestock"
                                checked={selectedCategory === "Livestock"}
                                onChange={() => handleCategoryChange("Livestock")}
                            />
                            Livestock
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="Horticulture"
                                checked={selectedCategory === "Horticulture"}
                                onChange={() => handleCategoryChange("Horticulture")}
                            />
                            Horticulture
                        </label>
                    </div>
                </div>
            </div>
            <footer>
                <p>Hello</p>
            </footer>
        </div>
    )
}

export default HomePage;

