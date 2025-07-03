import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import OrderForm from "./components/OrderForm";
import WeeklySpecial from "./components/WeeklySpecial";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  {
    /*Lenis just a sccroll test */
  }

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,
      smooth: true,
      smoothTouch: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
