import React, { useState } from "react";
import img1 from "../img/burger1.png";
import img2 from "../img/burger2.png";
import img3 from "../img/burger3.png";
import img4 from "../img/burger4.png";
import img5 from "../img/burger5.png";
import img6 from "../img/5-removebg-preview.png";

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
    <div className="w-full min-h-screen bg-white ">
      <div className="flex items-center space-x-4 p-14 h-screen ">
        <button 
        onClick={prev}>previous</button>
        {visibleCards.map((card) => (
          <div
            className="flex flex-col items-center gap-6 shadow-lg p-6 rounded-lg  text-justify"
            key={card.id}
          >
            <h1>{card.title}</h1>
            <img
              className="w-full h-[250px] object-contain my-6"
              src={card.img}
            />
            <p>{card.description}</p>
            <span>{card.price}</span>
          </div>
        ))}
        <button onClick={next}>next</button>
      </div>
    </div>
  );
};

export default Menu;
