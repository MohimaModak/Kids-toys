import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Order = () => {
  const [menu, setmenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setmenu(data));
  }, []);

  return (
    <div className="bg-black text-white ">
      <h1 className="text-center pt-16 text-6xl font-bold text-red-600">
        Start Your Game
      </h1>
      <h1 className="text-center text-2xl pt-5 ">--- These games for 4-8 ages kids ---</h1>
      <div className="text-center p-5 flex justify-center ">
        <h1 className="text-4xl border-y-2 py-2 w-52 ">
          Toys for u: {menu.length}
        </h1>
      </div>
      <Marquee pauseOnHover={true} speed={80}>
        <div className="grid grid-cols-10 gap-20 ">
          {menu.map((food) => (
            <div className="border shadow-2xl p-2 rounded-md">
              <img src={food.photo} className="object-cover rounded-md" />
              <div className="p-2 mt-2 rounded-md border text-center font-bold">
                {" "}
                <h1>{food.name}</h1>
                <h1>Price: {food.price}</h1>
                <h1>Category: {food.category}</h1>
                <Link to={`/details/${food._id}`}>
                  <div className="border p-2 rounded-full m-2">
                    <button>SEE</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Order;
