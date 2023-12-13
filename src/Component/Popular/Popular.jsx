import React, { useEffect, useState } from "react";
import useMenuHook from "../Hook/useMenuHook";

const Popular = () => {
  const [menu] = useMenuHook();
  console.log(menu);
  const popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <div className="bg-black text-white">
      <h1 className="text-center p-16 text-4xl text-red-700 font-bold uppercase">
        Popular Menu
      </h1>

      <div className=" grid grid-cols-3 gap-5 ">
        {popularMenu.map((menu) => (
          <div className="flex border justify-center items-center gap-2 m-5 rounded-md">
            <div>
              <img src={menu.image} className="pl-5" />
            </div>
            <div>
              <h1>Name: {menu.name}</h1>
              <h1>Recipe: {menu.recipe}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
