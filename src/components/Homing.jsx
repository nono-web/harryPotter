import React from 'react';
import styled from 'styled-components';
import imgHome from '../assets/castle.jpg';
import { desktop } from '../responsive';

const Container = styled.div`
background-image : url(${imgHome});
background-size: 180% 100%;
height: 100vh;
${desktop({height: "90vh", backgroundSize: "100% 100%"})}

`;

const Title = styled.h1`
text-align : center;
color: white;
padding-top : 4rem;
${desktop({padding : "5rem", fontSize : "4rem"})}

`;

const Homing = () => {
  return (
    <Container>
      <Title>Site d'un Fan d'Harry Potter</Title>
    </Container>
  );
};

export default Homing;
