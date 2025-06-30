import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import OrderForm from "./components/OrderForm";
import WeeklySpecial from "./components/WeeklySpecial";

const App = () => {
  return (
    <div> 
        <Navbar />
        <Hero />
        <OrderForm />
        <Menu />
        <WeeklySpecial />
    </div>
  );
};

export default App;
