import React from 'react';
import Homing from '../components/Homing';
import Navbar from '../components/Navbar';
import Spells from '../components/Spells';
import Wizard from '../components/Wizard';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Homing />
      <Wizard/>
      <Spells/>
    </div>
  );
};

export default Home;
