import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useMenuHook from "../Hook/useMenuHook";
import { useParams } from "react-router-dom";
import { useState } from "react";

const OurShop = () => {
  const [menu] = useMenuHook();
  // console.log(menu);

  const categories = ["salad", "drinks", "dessert", "pizza", "offered"];
  const { categroy } = useParams();

  const initialIndex = categories.indexOf(categroy.toLowerCase());

  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log({ tabIndex, categroy });
  // const [tabIndex, setTabIndex] = useState(0);

  const salad = menu.filter((salad) => salad.category === "salad");
  // console.log(salad);

  const drinks = menu.filter((drinks) => drinks.category === "drinks");
  // console.log(drinks);

  const soup = menu.filter((soup) => soup.category === "soup");
  // console.log(soup);

  const dessert = menu.filter((dessert) => dessert.category === "dessert");
  // console.log(dessert);

  const pizza = menu.filter((pizza) => pizza.category === "pizza");
  // console.log(pizza);

  const offered = menu.filter((offer) => offer.category === "offered");
  // console.log(offered);
  return (
    <div className="bg-black text-white">
      <h1 className="pt-16 text-center font-bold text-4xl ">OurShop</h1>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex justify-center items-center m-3 gap-10 uppercase border-b-2">
          <Tab className="border-2 rounded-md m-2 font-semibold p-2">Salad</Tab>
          <Tab className="border-2 rounded-md m-2 font-semibold p-2">
            Drinks
          </Tab>
          <Tab className="border-2 rounded-md m-2 font-semibold p-2">
            Dessert
          </Tab>
          <Tab className="border-2 rounded-md m-2 font-semibold p-2">Pizza</Tab>
          <Tab className="border-2 rounded-md m-2 font-semibold p-2">
            offered
          </Tab>
        </TabList>
        <TabPanel>
          <h1 className="text-3xl text-center pb-16">Salad</h1>
          <div className="flex justify-center items-center m-16">
            <div className="grid grid-cols-3 gap-5">
              {salad.map((sobji) => (
                <div className="font-bold text-xl text-center border p-5 rounded-md">
                  <img src={sobji.image} className="radius" srcset="" />
                  <div className=" p-2 m-2 rounded-md">
                    <h1>{sobji.name}</h1>
                    <h1>{sobji.category}</h1>
                    <h1>{sobji.recipe}</h1>
                    <h1>Price: {sobji.price}</h1>
                    <button className="border p-2 m-2 rounded-full">
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h1 className="text-3xl text-center p-16">Drinks</h1>
          <div className="flex justify-center items-center ">
            <div className="grid grid-cols-3 gap-5">
              {drinks.map((sorbot) => (
                <div className="font-bold text-xl text-center">
                  <img src={sorbot.image} className="radius" />
                  <h1>{sorbot.name}</h1>
                  <h1>Price: {sorbot.price}</h1>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h1 className="text-3xl text-center p-16">Dessert</h1>

          <div className="flex justify-center items-center ">
            <div className="grid grid-cols-3 gap-5">
              {dessert.map((misty) => (
                <div className="font-bold text-xl text-center">
                  <img src={misty.image} className="radius" />
                  <h1>{misty.name}</h1>
                  <h1>Price: {misty.price}</h1>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h1 className="text-3xl text-center p-16">Pizza</h1>
          <div className="flex justify-center items-center ">
            <div className="grid grid-cols-3 gap-5">
              {pizza.map((nasta) => (
                <div className="font-bold text-xl text-center">
                  <img src={nasta.image} className="radius" />
                  <h1>{nasta.name}</h1>
                  <h1>Price: {nasta.price}</h1>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h1 className="text-3xl text-center p-16">offered</h1>

          <div className="flex justify-center items-center ">
            <div className="grid grid-cols-3 gap-5">
              {offered.map((offered) => (
                <div className="font-bold text-xl text-center">
                  <img src={offered.image} className="radius" />
                  <h1>{offered.name}</h1>
                  <h1>Price: {offered.price}</h1>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
