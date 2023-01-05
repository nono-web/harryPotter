import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { desktop } from '../responsive';

const Container = styled.div`
  background-color: rgb(0, 13, 58, 0.856);
`;

const Title = styled.p`
  padding-top: 1rem;
  font-size: 1.5rem;
  text-align: center;
  color: white;
  font-weight: bold;
  ${desktop({ fontSize: '3rem' })}
`;

const ContainerCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0rem;
  padding: 1rem;
  ${desktop({ padding: '2rem' })}
`;

const WizardName = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem;
  font-weight: bold;
  color: white;
  ${desktop({ fontSize: '2.5rem' })}
`;

const Info = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: 500;
  color: white;
  ${desktop({ fontSize: '2rem' })}
`;

const Image = styled.img`
  width: 17rem;
  height: 17rem;
  border-radius: 2rem;
  ${desktop({ width: '30rem', height: '30rem' })}
`;

const Wizard = () => {
  const [wizards, setWizards] = useState(null);

  const fetchWizard = async () => {
    try {
      const res = await axios.get('https://hp-api.onrender.com/api/characters');
      setWizards(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWizard();
  }, []);

  return (
    <Container>
      <Title>Les 3 Sorciers Principaux</Title>
      <ContainerCart>
        {!wizards
          ? ''
          : wizards
              .filter(
                (heros) =>
                  heros.name === 'Harry Potter' ||
                  heros.name === 'Hermione Granger' ||
                  heros.name === 'Ron Weasley'
              )
              .map((hero) => (
                <Cart>
                  <WizardName>{hero.name}</WizardName>
                  <Image src={hero.image} alt={hero.name} />
                  <Info> Actor : {hero.actor}</Info>
                  <Info> House: {hero.house}</Info>
                  <Info> Patronus : {hero.patronus}</Info>
                </Cart>
              ))}
      </ContainerCart>
    </Container>
  );
};

export default Wizard;
