import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AllPersoList from './Pages/AllPersoList';
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";


const App = () => {
  return (
    <div>
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/allperso" element={<AllPersoList/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
</Router>

    </div>
  );
}

export default App;
