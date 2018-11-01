import React from 'react';
import styled from 'styled-components';

const PictureWrapper = styled.div`
  width: calc(100vh - 32px);
  max-width: 600px;
  height: calc(100vh - 32px);
  max-height: 600px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 2px 16px -2px rgba(15,15,15,0.32);
  background: #9f9f9f;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  margin-right: 80px;

  @media all and (max-width: 860px) {
    width: calc(100vw - 32px);
    height: calc(100vw - 32px);
    margin-right: 0;
    margin-bottom: 24px;
    margin-top: 24px;
  }
`;

const Picture = ({image}) => (
  <PictureWrapper className="pictureWrapper" image={image}/>
);

export default Picture;
