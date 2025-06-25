import React, { useState } from "react";
import img1 from "../img/burger1.png";
import img2 from "../img/burger2.png";
import img3 from "../img/burger3.png";
import img4 from "../img/burger4.png";
import img5 from "../img/burger5.png";
import img6 from "../img/5-removebg-preview.png";
import { GrNext, GrPrevious } from "react-icons/gr";

const cards = [
  {
    id: 1,
    img: img1,
    title: "Crispy Bite",
    description:
      "A single crispy chicken fillet, perfectly fried and tucked in a soft bun. Crunchy, juicy, and simply classic.",
    price: "$7.99",
  },
  {
    id: 2,
    img: img2,
    title: "Crunch Tower",
    description:
      "Three layers of crispy fried chicken stacked tall with creamy sauce and fresh toppings. Built to satisfy your biggest cravings.",
    price: "$11.99",
  },
  {
    id: 3,
    img: img3,
    title: "The Double Beast",
    description:
      "A fierce combo of beef and crispy chicken, layered with melty cheese and bold sauce. Two meats. One legend.",
    price: "$12.99",
  },
  {
    id: 4,
    img: img4,
    title: "The Meat Overload",
    description:
      "Double juicy beef patties and double crispy bacon, loaded with smoky flavor and grilled to perfection.",
    price: "$13.49",
  },
  {
    id: 5,
    img: img5,
    title: "Cheese Overkill",
    description:
      "Double beef, double cheese, and a rich cheese sauce dripping from every layer. It’s dangerously cheesy.",
    price: "$13.99",
  },
  {
    id: 6,
    img: img6,
    title: "Drip Boss",
    description:
      "Thick double beef, double bacon, crunchy pickles and a flood of signature sauces. Messy, bold, and boss-level satisfying.",
    price: "$14.99",
  },
];

const Menu = () => {
  const [index, setIndex] = useState(0);
  const cardsCount = 2;

  const visibleCards = [];

  for (let i = 0; i < cardsCount; i++) {
    visibleCards.push(cards[(index + i) % cards.length]);
  }

  const next = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Big Screen */}
      <div className="hidden md:flex items-center space-x-4 p-14 h-screen">
        <button onClick={prev}>
          <GrPrevious className="text-[45px]" />
        </button>
        {visibleCards.map((card) => (
          <div
            className="relative group md:flex md:flex-col items-center gap-6 shadow-2xl p-6 rounded-lg text-center md:text-justify grid grid-cols-1 md:w-[500px] h-[550px]"
            key={card.id}
          >
            <h1 className="font-extrabold text-[20px] md:text-[35px] ">
              {card.title}
            </h1>
            <img
              className="w-full md:h-[250px] object-contain my-4"
              src={card.img}
            />
            <p className="md:text-[17px] flex-grow">{card.description}</p>
            <strong className="md:text-[20px]">{card.price}</strong>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500 rounded-lg">
              <button className="font-extrabold px-12 py-4 bg-red-600 rounded-lg text-white">
                Order Now!
              </button>
            </div>
          </div>
        ))}
        <button onClick={next}>
          <GrNext className="text-[45px]" />
        </button>
      </div>

      {/*  mobile */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory space-x-4 px-4 py-10">
        {cards.map((card) => (
          <div
            className="min-w-[85%] snap-center bg-white shadow-xl rounded-lg p-6 relative group"
            key={card.id}
          >
            <h1 className="font-extrabold text-[20px] text-center">
              {card.title}
            </h1>
            <img
              className="w-full h-[200px] object-contain my-6"
              src={card.img}
            />
            <p className="text-[15px] text-center">{card.description}</p>
            <strong className="text-[18px] block text-center mt-2">
              {card.price}
            </strong>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500 rounded-lg">
              <button className="font-extrabold px-10 py-3 bg-red-600 rounded-lg text-white">
                Order Now!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
