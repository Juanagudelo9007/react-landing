import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 70%"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="bg-white flex px-5 py-14 min-h-screen">
      <motion.div id="about" style={{ scale, opacity }}>
        <h1 className="text-8xl font-extrabold mb-10 mt-20">About Us</h1>
        <p className="text-2xl leading-10">
          We don’t just make burgers — we create experiences. At Drip Burgers,
          flavor comes first. Every burger is built to be bold, loaded, and
          unforgettable. From double beef stacks to crispy chicken towers, we
          push every layer to the max. We believe food should be loud. Messy.
          Real. No shortcuts, no compromises — just big, unapologetic taste in
          every bite. If you’re hungry for something that hits different, you’re
          in the right place. This is not fast food. This is Drip Burgers.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
