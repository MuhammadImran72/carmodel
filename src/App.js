
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route ,useParams  } from 'react-router-dom';
import Home from './Pages/Home';
import TyresBrand from './Pages/TyresBrand';

import Footer from "./components/Footer";
import Menu from "./components/Menu";
import VehicleInfo from './Pages/VehicleInfo';
import TyreSearch from './Pages/TyreSearch';
import VehicleInformationFetchShow from './Pages/VehcileInforamtionFetchShow';
import AboutUs from './Pages/AboutUs';
import CheckOut from './Pages/CheckOut';
import Carts from './Pages/Carts';
import FAQAccordion from './Pages/FAQAccordion';
import { useState } from "react";

import Cart from "./components/Cart";



function App() {  
  const [cart, setCart] = useState([]);

  const VehicleInfoWrapper = () => {
    const { regNumber } = useParams();
    return <VehicleInfo regNumber={regNumber} cart={cart} setCart={setCart}  addToCart={addToCart}/>;
  };


  const addToCart = (vehicle) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.vehicleData.VehicleDetails.VRM === vehicle.VehicleDetails.VRM
    );

    if (existingItemIndex !== -1) {
      // Update quantity if item already exists
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Add new item to cart with quantity 1
      setCart([...cart, { vehicleData: vehicle, quantity: 1 }]);
    }
    alert("Vehicle added to cart! 🛒");
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const updateQuantity = (index, quantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    setCart(updatedCart);
  };

  return (
    <> 


   <Router>
    
  <Menu />
  <nav>
          
        
        </nav>

        
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path='/aboutus'  element={<AboutUs />} />
        <Route path="/tyresbrand" element={<TyresBrand />} />
        <Route path="/vehicle-info/:regNumber" element={<VehicleInfoWrapper />} />

        <Route path="/vehicle-info2"  element={<VehicleInformationFetchShow />} />
        <Route path="/tyresearch"  element={<TyreSearch />} />
        <Route path='/carts'  element={<Carts />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path="/faqs"  element={<FAQAccordion />} />

        <Route path="/cart" element={<Cart cart={cart}  removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>} />

      
     
      
      </Routes>
      <Footer />
    </Router>
   

    
    </>
      
           
         
     
  );
}

export default App;
