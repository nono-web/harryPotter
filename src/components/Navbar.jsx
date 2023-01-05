import React from 'react';
import styled from 'styled-components';
import logo from '../assets/emblem.png';
import { desktop } from '../responsive';

const Container = styled.div`
background-color: rgb(0, 13,58)
`;


const NavList = styled.ul`
padding : 1rem;
display: flex;
align-items: center;
justify-content : space-evenly;
list-style: none;
${desktop({padding : "1rem 0rem"})}

`;

const Link = styled.a`
&:visited,&:active, &:link {
    text-decoration : none;
    color: white;
    text-align : center;
}
`;

const ListItem = styled.li`
font-weight : bold;
cursor: pointer;
padding : 0.6rem;
font-size : 0.8rem;
border-bottom : 4px solid  rgb(0, 13,58);
&:hover{
    border-bottom : 4px solid  white;
}
${desktop({fontSize : "1.3rem"})}
`;

const Logo = styled.img`
width :50%;
cursor: pointer;
${desktop({width : "6rem"})}
`;

const Navbar = () => {
  return (
    <Container>
      <NavList>
        <Link href="/">
          <Logo src={logo} alt="Logo" />
        </Link>
        <Link href="/">
          <ListItem>Home</ListItem>
        </Link>
        <Link href="/allperso">
          <ListItem>AllPersos</ListItem>
        </Link>
        <Link href="/contact">
          <ListItem>Contact</ListItem>
        </Link>
      </NavList>
    </Container>
  );
};

export default Navbar;
