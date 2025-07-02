import React from "react";
import special from "../img/special.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { OrderContext } from "../Context/ContextP";
import { useContext, useRef } from "react";

const WeeklySpecial = () => {
  const { toggleOrder } = useContext(OrderContext);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 65%"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      id="weekly-special"
      className="grid grid-cols-1 md:grid-cols-2 p-6 place-items-center text-center"
      style={{ scale, opacity }}
    >
      <div className="p-8">
        <h1 className="text-7xl mt-4 text-white font-extrabold md:text-8xl">
          Weekly Special{" "}
        </h1>
        <p className="text-white mt-4  md:text-2xl">
          Get 2 classic burgers, 2 crispy chicken tenders, a mountain of golden
          fries, and a refreshing soda — all in one unbeatable combo
        </p>
        <motion.button
          className="text-white bg-red-500 py-3 px-20 rounded-xl mt-10 "
          onClick={toggleOrder}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#b91c1c",
            boxShadow: "0px 8px 16px rgba(0,0,0,0.3)",
          }}
          whileTap={{
            scale: 0.8,
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
      </div>
      <div>
        <img src={special} alt="" />
      </div>
    </motion.div>
  );
};

export default WeeklySpecial;
