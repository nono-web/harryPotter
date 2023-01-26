import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { desktop } from '../responsive';
import wand from '../assets/wand.jpg'

const Container = styled.div`
 background-image : url(${wand});
 background-size : 190% 100%;
 height : 150vh;
 ${desktop({height: "90vh", backgroundSize: "100% 100%"})}

`;
const Title = styled.p`
  padding-top: 2rem;
  font-size: 2rem;
  text-align: center;
  color: black;
  font-weight: bold;
  ${desktop({ fontSize: '3rem' })}
`;

const ContainerCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color : #ffffffb9;
  margin : 2rem;
  border-radius : 2rem;
  ${desktop({margin :"8rem 10rem"})}
`;

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  padding: 0rem 3rem;
  ${desktop({ padding: '1.5rem' })}
`;

const SpellsName = styled.p`
  font-size: 2.5rem;
  margin: 1rem;
  font-weight: bold;
  text-align : center;

`;

const Info = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  font-weight: 500;
text-align: center;
`;

const Spells = () => {

    const [spells, setSpells] = useState(null);

    const fetchSpells = async () => {
      try {
        const res = await axios.get('https://hp-api.onrender.com/api/spells');
        setSpells(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      fetchSpells();
    }, []);

  return (
    <Container>
      <Title>Les sortilèges Impardonnables</Title>
      <ContainerCart>
        {!spells
          ? ''
          : spells
              .filter(
                (forbiddenSpell) =>
                forbiddenSpell.name === 'Avada Kedavra' ||
                forbiddenSpell.name === 'Imperio' ||
                forbiddenSpell.name === 'Crucio'
              )
              .map((spell) => (
                <Cart>
                  <SpellsName>{spell.name}</SpellsName>
                  <Info> {spell.description}</Info>
             
                </Cart>
              ))}
      </ContainerCart>
    </Container>
  )
}

export default Spells
