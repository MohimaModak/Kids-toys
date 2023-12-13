import React from "react";

const MenuCategory = ({ item }) => {
  return (
    <div>
      <div className=" grid grid-cols-3 gap-5 ">
        {item.map((menu) => (
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

export default MenuCategory;
