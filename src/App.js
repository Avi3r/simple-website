import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Route, Routes, BrowserRouter,Navigate} from "react-router-dom";
import Home from './component/Home';
import Contact from './component/Contact';
import Services from './component/Services';
import About from './component/About';
import Navbar from './component/Navbar';
import Footer from './component/Footer';


const App = () => {
  return (
    <>
    <BrowserRouter>

    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    </Routes>

    <Footer/>
    
    
    </BrowserRouter>
    </>
  )
}

export default App;
