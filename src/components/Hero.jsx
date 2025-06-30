import Burger from "../img/5-removebg-preview.png";
import { motion, AnimatePresence } from "framer-motion";
import { OrderContext } from "../Context/ContextP";
import { useContext } from "react";

const Hero = () => {
  const { toggleOrder } = useContext(OrderContext);

  return (
    <section className="mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-10  ">
          <h1 className="text-white text-6xl mb-5 font-extrabold">Drip Boss</h1>
          <p className="text-white text-justify">
            Introducing the Drip Boss — a powerhouse burger loaded with double
            beef patties, crispy double bacon, crunchy pickles, and drenched in
            our signature, mouth-watering sauces. Bold, messy, and absolutely
            unforgettable, this burger is made for those who crave maximum
            flavor and an epic eating experience. Get ready to rule the burger
            game with every bite!
          </p>
          <div className="flex justify-center gap-8 mt-6">
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
          </div>
        </div>
        <div>
          {/* Img */}
          <img src={Burger} className="md:mt-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
