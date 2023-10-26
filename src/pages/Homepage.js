import React, { useState } from "react";
import './Homepage.css';
import Cultural from '../images/Cultural.png';
import { Link } from "react-router-dom";

function HomePage() {
    const [flipped, setFlipped] = useState(false);

    const handleCardFlip = () => {
        setFlipped(!flipped);
    }

    return (
        <div>
            <nav className="custom-nav">
                <div className="content1">
                    <img className="custom-image" src={Cultural} alt="logo" />
                    <input className="custom-input" type="text" placeholder="Search" />
                    <button className="custom-search">Search</button>
                    <li>
                        <button className="login"><Link to="/signup">Login/Signup</Link></button>
                    </li>
                </div>
                <div className="content2">
                    <ul className="list2"> {/* Changed li to ul */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Blog/Post List</Link></li>
                        <li><Link to="/">Profile</Link></li>
                        <li><Link to="/">Create Blog/Post</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="cards-section">
                <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
                    <div className="card-front">
                        <h2>Title</h2>
                        <h2>Author</h2>
                        <button>Read More</button>
                    </div>
                    <div className="card-back">
                        <p>Description</p>
                        <button>Close</button>
                    </div>
                </div>
                <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
                    <div className="card-front">
                        <h2>Title</h2>
                        <h2>Author</h2>
                        <button>Read More</button>
                    </div>
                    <div className="card-back">
                        <p>Description</p>
                        <button>Close</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage;
