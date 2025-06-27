import React from "react";
import { createContext, useState, useRef } from "react";

export const OrderContext = createContext();

const ContextP = ({ children }) => {
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
    <OrderContext.Provider
      value={{
        resetData,
        order,
        setOrder,
        confirmation,
        setConfirmation,
        form,
        setForm,
        handleChange,
        resetForm,
        toggleOrder,
        handleClose,
        handleSubmit,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default ContextP;
