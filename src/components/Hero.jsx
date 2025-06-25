import React, { useRef, useState } from "react";
import Burger from "../img/5-removebg-preview.png";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const resetData = useRef(null);
  const [order, setOrder] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    quantity: 1,
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (/^\d*$/.test(value)) {
        setForm({
          ...form,
          [name]: value,
        });
      }
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      address: "",
      phone: "",
      quantity: 1,
      notes: "",
    });
  };

  const toggleOrder = () => {
    setOrder(!order);
  };

  const handleClose = () => {
    resetForm();
    if (resetData.current) resetData.current.reset();
    setOrder(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    resetForm();
    setOrder(false);
    setConfirmation(true);
  };

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
              onClick={toggleOrder}
              className="text-white bg-red-500 py-2 px-10 rounded-xl "
              whileHover={{ scale: 1.17, backgroundColor: "#b91c1c" }}
              whileTap={{ scale: 0.75, rotate: "5.5deg" }}
              transition={{
                duration: 0.33,
                ease: "easeOut",
              }}
            >
              Order Now
            </motion.button>
            <button className="text-white bg-red-500 py-2 px-10 rounded-xl transition-all hover:bg-red-700 duration-300 ">
              Menu
            </button>
          </div>
        </div>
        <div>
          {/* Img */}
          <img src={Burger} className="md:mt-10" />
        </div>
        {/* Order Now Form*/}
        <AnimatePresence>
          {order && (
            <motion.div
              className=" flex justify-center items-center z-20 fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                duration: 0.4,
              }}
            >
              <div>
                <form
                  ref={resetData}
                  onSubmit={handleSubmit}
                  className="
            relative
            flex flex-col w-[350px] bg-[#5f5d5d]/70 p-4 gap-3 rounded-xl"
                >
                  <label className="text-white font-extrabold">
                    Name:
                    <input
                      className="text-white ml-2 outline-1 outline-white rounded-sm"
                      name="name"
                      type="text"
                      placeholder="..."
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="text-white font-extrabold  rounded-sm">
                    Address:
                    <input
                      className="text-white ml-2 outline-1 outline-white rounded-sm"
                      name="address"
                      type="text"
                      placeholder="Address..."
                      value={form.address}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="text-white font-extrabold">
                    Phone:
                    <input
                      className="text-white ml-2 outline-white outline-1 rounded-sm"
                      name="phone"
                      type="tel"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="text-white font-extrabold ">
                    Quantity:
                    <input
                      className="text-white ml-2 outline-none"
                      name="quantity"
                      type="number"
                      min="1"
                      placeholder=""
                      value={form.quantity}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <textarea
                    className="text-white w-[250px] resize-none outline-1 outline-white rounded-sm"
                    name="notes"
                    placeholder="Special Instructions..."
                    value={form.notes}
                    onChange={handleChange}
                  ></textarea>
                  <motion.button
                    type="submit"
                    className="text-white py-2 px-10 bg-red-500 rounded-xl"
                    whileHover={{ backgroundColor: "#b91c1c" }}
                    whileTap={{ scale: 0.75 }}
                    transition={{
                      duration: 0.33,
                      ease: "easeOut",
                    }}
                  >
                    Submit
                  </motion.button>
                  <motion.button
                    type="button"
                    className="absolute text-white top-1 right-3 transition-all hover:text-black duration-300 text-[20px]"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                    }}
                    onClick={handleClose}
                  >
                    X
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Confirmation Message */}
      <AnimatePresence>
        {confirmation && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
            }}
            className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center backdrop-blur-sm"
          >
            <div
              className="text-center p-4 rounded-sm
       bg-white w-[300px]"
            >
              <h2 className="text-black mb-3 font-bold">
                Your Order Was placed!
              </h2>
              <motion.button
                className="bg-gray-500 px-6 py-1 rounded-lg font-extrabold text-white"
                whileHover={{ scale: 1.15, backgroundColor: "	#374151" }}
                whileTap={{ scale: 0.75 }}
                onClick={() => setConfirmation(false)}
              >
                Ok
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
