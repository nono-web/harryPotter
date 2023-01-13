import React from 'react';
import styled from 'styled-components';
import logo from '../assets/emblem.png';
import { desktop } from '../responsive';
import facebook from '../assets/Facebook_icon.svg';
import instagram from '../assets/Instagram_icon.svg';

const Container = styled.div`
  background-color: rgb(0, 13, 58);
  display : flex;
`;

const Left = styled.div`
  flex: 1;
  margin-left : 1rem;
`;

const Logo = styled.img`
width : 3.5rem;
margin: 0.5rem;
${desktop({width : "6rem"})}
`;

const Center = styled.div`
  flex: 3;
  display: flex;
  flex-direction : column;
  justify-content : center;
`;

const Copyright = styled.p`
text-align  :center;
font-size : 0.7rem;
color :white;
${desktop({fontSize : "2rem"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content : space-evenly;
  align-items : center;
`;

const Icon = styled.img`
width : 1.5rem;
cursor: pointer;
${desktop({width : "4rem"})}
`;

const Link = styled.a``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src={logo} alot="logo" />
      </Left>
      <Center>
        <Copyright>Fan d'Harry Potter</Copyright>
      </Center>
      <Right>
        <Link href="https://www.facebook.com" target="_blank">
          <Icon src={facebook} alt="facebook" />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <Icon src={instagram} alt="instagram" />
        </Link>
      </Right>
    </Container>
  );
};

export default Footer;
