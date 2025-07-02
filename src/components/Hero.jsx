import Burger from "../img/5-removebg-preview.png";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { OrderContext } from "../Context/ContextP";
import { useContext, useRef } from "react";

const Hero = () => {
  const { toggleOrder } = useContext(OrderContext);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const text = [
    "Introducing the Drip Boss — a powerhouse burger loaded with double beef patties,",
    "crispy double bacon, crunchy pickles, and drenched in our signature, mouth-watering sauces.",
    "Bold, messy, and absolutely unforgettable.",
    "This burger is made for those who crave maximum flavor and an epic eating experience.",
    "Get ready to rule the burger game with every bite!",
  ];
  const baseDelay = 0.2 + 0.2;

  return (
    <section className="mt-32 w-full h-[700]" ref={ref}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ opacity }}
      >
        <div className="p-10 ">
          <motion.h1
            className="text-white text-6xl mb-5 font-extrabold mt-10"
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Drip Boss
          </motion.h1>
          {text.map((t, i) => (
            <motion.p
              className="text-white text-justify leading-6"
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: baseDelay + i * 0.2 }}
              viewport={{ once: true }}
            >
              {t}
            </motion.p>
          ))}

          <motion.div
            className="flex justify-center gap-8 mt-6"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="text-white bg-red-500 py-2 px-10 rounded-xl "
              onClick={toggleOrder}
              whileHover={{
                scale: 1.17,
                backgroundColor: "#b91c1c",
                boxShadow: "0px 8px 16px rgba(0,0,0,0.3)",
              }}
              whileTap={{
                scale: 1,
              }}
              transition={{
                duration: 0.33,
                ease: "easeOut",
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            >
              Order Now
            </motion.button>
            <motion.button
              className="text-white bg-red-500 py-2 px-10 rounded-xl shadow-md"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#b91c1c",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
                bounce: 1,
              }}
            >
              Menu
            </motion.button>
          </motion.div>
        </div>
        <div>
          {/* Img */}
          <motion.img
            src={Burger}
            className="md:mt-14"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
