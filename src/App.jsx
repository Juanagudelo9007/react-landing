import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import OrderForm from "./components/OrderForm";

const App = () => {
  return (
    <div> 
        <Navbar />
        <Hero />
        <OrderForm />
        <Menu />
    </div>
  );
};

export default App;
