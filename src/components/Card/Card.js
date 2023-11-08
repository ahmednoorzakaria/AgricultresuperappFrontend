import React from 'react';
import { Link } from "react-router-dom"; 
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/react';
// import './CustomCard.css'; // Import your custom CSS file

const CustomCard = ({ imgSrc, title, text, buttonText, buttonLink }) => {
  return (
    <CCard className="custom-card">
      <CCardImage orientation="top" src={imgSrc} />
      <CCardBody>
        <CCardTitle>{title}</CCardTitle>
        <CCardText className="custom-card-text">{text}</CCardText>
        <CButton href={buttonLink}>Read More</CButton>
      </CCardBody>
    </CCard>
  );
};

export default CustomCard;
