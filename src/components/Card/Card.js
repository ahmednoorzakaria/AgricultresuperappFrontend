import React from 'react';
import { Link } from "react-router-dom"; 
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
} from '@coreui/react';
import './CustomCard.css'; // Import your custom CSS file

const CustomCard = ({ imgSrc, title, text, buttonLink, onClick }) => {
  // Get the first line of text
  const firstLine = text.split('\n')[0];

  return (
    <CCard className="custom-card">
      <CCardImage orientation="top" src={imgSrc} className="custom-card-image" />
      <CCardBody>
        <CCardTitle>{title}</CCardTitle>
        <CCardText className="custom-card-text">
          {firstLine}
        </CCardText>
        <Link to={buttonLink} className="btn btn-primary" onClick={onClick}>
          Read More
        </Link>
      </CCardBody>
    </CCard>
  );
};

export default CustomCard;
