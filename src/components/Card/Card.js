import React from 'react';
import { Link } from "react-router-dom"; 
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
} from '@coreui/react';
import './CustomCard.css';

const CustomCard = ({ imgSrc, title, text, buttonLink, onClick }) => {
  const characterLimit = 100;
  const truncatedText = text.length > characterLimit ? `${text.substring(0, characterLimit)}...` : text;

  return (
    <CCard className="custom-card">
      <CCardImage orientation="top" src={imgSrc} className="custom-card-image" />
      <CCardBody>
        <CCardTitle>{title}</CCardTitle>
        <CCardText className="custom-card-text">
          {truncatedText}
        </CCardText>
        <Link to={buttonLink} className="btn btn-primary" onClick={onClick}>
          Read More
        </Link>
      </CCardBody>
    </CCard>
  );
};

export default CustomCard;