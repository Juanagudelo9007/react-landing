import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import OrderForm from "./components/OrderForm";
import WeeklySpecial from "./components/WeeklySpecial";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div> 
        <Navbar />
        <Hero />
        <OrderForm />
        <Menu />
        <WeeklySpecial />
        <About />
        <Footer />
    </div>
  );
};

export default App;
