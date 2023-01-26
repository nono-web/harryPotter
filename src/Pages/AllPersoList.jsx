import React, { useState } from 'react';
import styled from 'styled-components';
import AllPersos from '../components/AllPersos';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { desktop } from '../responsive';

const Container = styled.div`
display: flex;
flex-direction : column;
`;

const Title = styled.h1`
text-align : center;
margin: 1rem 0rem;
font-size : 3rem;
`;

const FilterContainer = styled.div`
display : flex;
flex-direction : column;
align-items :center;
${desktop({ flexDirection: 'row', justifyContent: 'space-evenly' })}
`;

const Filter = styled.div`
margin :1rem 1.25rem;
padding : 1rem;
display : flex;
flex-direction : column;
align-items :center;
justify-content :center;


`;

const FilterText = styled.span`
font-size : 1.25rem;
font-weight : 600;
text-align : center;
margin-bottom : 0.5rem;
`;

const Select = styled.select`
padding : 0.8rem;
margin :  0.7rem 0rem;
border-radius : 2rem;
text-align : center;
`;

const Option = styled.option``;

const AllPersoList = () => {
  const [filters, setFilters] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Title> All Persos</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter by gender</FilterText>
          <Select name="gender" onChange={handleFilters}>
            <Option selected disabled> Gender : </Option>
            <Option>male</Option>
            <Option>female</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filter by House</FilterText>
          <Select name="house" onChange={handleFilters}>
            <Option selected  disabled> House : </Option>
            <Option>Gryffindor</Option>
            <Option>Slytherin</Option>
            <Option>Hufflepuff</Option>
            <Option>Ravenclaw</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filter by ancestry</FilterText>
          <Select name="ancestry" onChange={handleFilters}>
            <Option selected  disabled> Ancestry : </Option>
            <Option>half-blood</Option>
            <Option>pure-blood</Option>
            <Option>muggleborn</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <AllPersos filters={filters}/>
      <Footer/>
    </Container>
  );
};

export default AllPersoList;
