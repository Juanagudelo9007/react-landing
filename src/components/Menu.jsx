import React, { useState } from 'react'
import img1 from "../img/burger1.png";
import img2 from "../img/burger2.png"
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
   

  return (
    <div className="flex flex-col w-screen min-h-screen overflow-hidden bg-gray-100 items-center justify-center p-8">
      <div className=" w-full max-w-md overflow-hidden rounded-lg ">
        {cards.map((card) => (
          <div
            className=" items-center text-center gap-2 p-4 mx-auto mb-6"
            key={card.id}
          >
            <h1>
              <strong>{card.title}</strong>
            </h1>
            <img 
            className="w-full h-48 object-contain"
            src={card.img} />
            <p>{card.description}</p>
            <strong>{card.price}</strong>
          </div>
        ))}
        <div className='flex justify-between'>
          <button className=' top-70 right-14'>previous</button>
          <button className=' top-70 left-14'>next</button>
        </div>
      </div>
    </div>
  );
}

export default Menu