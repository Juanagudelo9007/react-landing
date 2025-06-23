import React, { useRef, useState } from "react";
import Burger from "../img/5-removebg-preview.png";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const resetData = useRef(null);
  const [order, setOrder] = useState(false);
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    quantity: 1,
    notes: "",
  });

  const hanldeChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
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

  return (
    <section className="mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-10  ">
          <h1 className="text-white text-4xl mb-5 font-extrabold">
            Newest Product
          </h1>
          <p className="text-white text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            laboriosam quod! Asperiores delectus, illum, deserunt expedita
            sapiente quo vitae distinctio veritatis non at iusto? Officiis culpa
            id blanditiis unde inventore.
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
                      onChange={hanldeChange}
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
                      onChange={hanldeChange}
                      required
                    />
                  </label>
                  <label className="text-white font-extrabold">
                    Phone:
                    <input
                      className="text-white ml-2 outline-white outline-1 rounded-sm"
                      name="phone"
                      type="text"
                      placeholder="..."
                      value={form.phone}
                      onChange={hanldeChange}
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
                      onChange={hanldeChange}
                      required
                    />
                  </label>
                  <textarea
                    className="text-white w-[250px] resize-none outline-1 outline-white rounded-sm"
                    name="notes"
                    placeholder="Special Instructions..."
                    value={form.notes}
                    onChange={hanldeChange}
                  ></textarea>
                  <button className="text-white py-2 px-10 bg-red-500 rounded-xl transition-all hover:bg-red-700 duration-300">
                    Submit
                  </button>
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
    </section>
  );
};

export default Hero;
