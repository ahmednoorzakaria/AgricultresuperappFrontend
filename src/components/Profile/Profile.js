import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomCard from "../Card/Card";
import { Link } from "react-router-dom";

export default function Profile({ match }) {
  const token = localStorage.getItem("UserId");
  const [data, setdata] = useState(""); // Define loggedInUser state
  const [cardData, setcardData] = useState([]);

  console.log(token);

  useEffect(() => {
    // Fetch data from your API when the component mounts
    axios
      .get(`http://localhost:5000/api/users/user/${token}`) // Use template literals
      .then((response) => {
        setdata(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  }, [token]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/posts/${token}`
        );
        setcardData(response.data);
        console.log(response.data);
        // Add further logic here to handle the data
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchData(); // Call the async function
  }, []);

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#93faa5" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#c3ff68", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                  <MDBBtn
                    outline
                    color="#c3ff68"
                    style={{ height: "36px", overflow: "visible" }}
                  >
                    Edit profile
                  </MDBBtn>
                </div>
                <div
                  className="ms-3"
                  style={{ marginTop: "130px", color: "black" }}
                >
                  <MDBTypography tag="h5"> {data.name}</MDBTypography>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div></div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Followers
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: "#c3ff68" }}>
                    <MDBCardText className="font-italic mb-1">
                      {data.bio}
                    </MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">
                    Recent Posts
                  </MDBCardText>
                </div>
                <div className="row">
                  {cardData.map((card) => (
                    <div key={card._id} className="col-md-6 mb-4">
                      {/* Set the column size for medium screens and add spacing */}
                      <CustomCard
                        imgSrc={card.post_image}
                        title={card.post_heading}
                        text={card.post_content}
                      />
                      <Link
                        to={`/blog/${card._id}`}
                        className="read-more-link"
                        onClick={() => handleReadMore(card.id)}
                      >
                        Read More
                      </Link>
                    </div>
                  ))}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
