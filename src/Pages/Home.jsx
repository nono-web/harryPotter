import React from 'react';
import Footer from '../components/Footer';
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
      <Footer/>
    </div>
  );
};

export default Home;
