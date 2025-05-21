import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './layout/Nav';

import Services from './pages/Services';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/Contacts" element={<Contacts/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
