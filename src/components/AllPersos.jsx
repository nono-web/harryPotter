import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import AllPerso from './AllPerso';

const Container = styled.div`
padding: 2rem;
display :flex;
flex-wrap : wrap;
justify-content : space-evenly;
`;

const AllPersos = ({ filters }) => {
  const [allPersos, setAllPersos] = useState([]);
  const [filteredPersos, setFilteredPersos] = useState([]);

  const fetchAllPersos = async () => {
    const res = await axios.get('https://hp-api.onrender.com/api/characters');
    setAllPersos(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchAllPersos();
  }, []);

  useEffect(() => {
    setFilteredPersos(
      allPersos.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [allPersos, filters]);

  return (
    <Container>
      {!filteredPersos
        ? ''
        : filteredPersos.map((item) => <AllPerso item={item} key={item.id} />)}
    </Container>
  );
};

export default AllPersos;
