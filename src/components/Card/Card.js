import React from 'react';
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/react';

const CustomCard = ({ imgSrc, title, text, buttonText, buttonLink }) => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CCardImage orientation="top" src={imgSrc} />
      <CCardBody>
        <CCardTitle>{title}</CCardTitle>
        <CCardText>{text}</CCardText>
        <CButton href={buttonLink}>{buttonText}</CButton>
      </CCardBody>
    </CCard>
  );
};

export default CustomCard;
