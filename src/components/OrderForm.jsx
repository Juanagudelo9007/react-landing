import { motion, AnimatePresence } from "framer-motion";
import { OrderContext } from "../Context/ContextP";
import { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";

const OrderForm = () => {
  const {
    order,
    resetData,
    handleSubmit,
    handleChange,
    form,
    handleClose,
    confirmation,
    setConfirmation,
  } = useContext(OrderContext);
  return (
    <section className="mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2">
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
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    }}
                  >
                    Submit
                  </motion.button>
                  <motion.button
                    type="button"
                    className="absolute text-white top-1 right-1  text-[20px]"
                    onClick={handleClose}
                    whileTap={{ scale: 0.7 }}
                    whileHover={{ color: "black" }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 22,
                    }}
                  >
                    <FaWindowClose className="rounded-xl" />
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

export default OrderForm;
