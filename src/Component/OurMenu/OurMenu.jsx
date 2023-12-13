import { Link } from "react-router-dom";
import useMenuHook from "../Hook/useMenuHook";
import "./ourmenu.css";

const OurMenu = () => {
  const [menu] = useMenuHook();
  console.log(menu);

  const salad = menu.filter((item) => item.category === "salad");
  console.log(salad);

  const drinks = menu.filter((item) => item.category === "drinks");
  console.log(drinks);

  const soup = menu.filter((item) => item.category === "soup");
  console.log(soup);

  const dessert = menu.filter((item) => item.category === "dessert");
  console.log(dessert);

  const pizza = menu.filter((item) => item.category === "pizza");
  console.log(pizza);

  const offered = menu.filter((item) => item.category === "offered");
  console.log(offered);

  return (
    <div className="bg-black text-white">
      <div className="">
        <h1 className="p-16 text-3xl text-center ">OurMenu</h1>
        <h1 className="text-3xl text-center pb-16">Salad</h1>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-3 gap-5">
            {salad.map((sobji) => (
              <div className="font-bold text-xl text-center">
                <img src={sobji.image} className="radius" srcset="" />
                <h1>{sobji.name}</h1>
                <h1>Price: {sobji.price}</h1>
                <Link to={`/shop/${sobji.category}`}>
                  <div className="text-center border p-2 rounded-full m-5">
                    <button className="text-white text-2xl btn btn-outline bg-white border-0 border-b-4 border-orange-400 mt-4">Order Now</button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl text-center p-16">Drinks</h1>
          <div className="flex justify-center items-center ">
            <div className="grid grid-cols-3 gap-5">
              {drinks.map((sorbot) => (
                <div className="font-bold text-xl text-center">
                  <img src={sorbot.image} className="radius" />
                  <h1>{sorbot.name}</h1>
                  <h1>Price: {sorbot.price}</h1>
                  <Link to={`/shop/${sorbot.category}`}>
                    <div className="text-center border p-2 rounded-full m-5">
                      <button className="text-white text-2xl ">
                        Order Now
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl text-center p-16">Dessert</h1>

          <div className="flex justify-center items-center ">
            <div className="grid grid-cols-3 gap-5">
              {dessert.map((misty) => (
                <div className="font-bold text-xl text-center">
                  <img src={misty.image} className="radius" />
                  <h1>{misty.name}</h1>
                  <h1>Price: {misty.price}</h1>
                  <Link to={`/shop/${misty.category}`}>
                    <div className="text-center border p-2 rounded-full m-5">
                      <button className="text-white text-2xl ">
                        Order Now
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center p-16">Pizza</h1>
          <div className="flex justify-center items-center ">
            <div className="grid grid-cols-3 gap-5">
              {pizza.map((nasta) => (
                <div className="font-bold text-xl text-center">
                  <img src={nasta.image} className="radius" />
                  <h1>{nasta.name}</h1>
                  <h1>Price: {nasta.price}</h1>
                  <Link to={`/shop/${nasta.category}`}>
                    <div className="text-center border p-2 rounded-full m-5">
                      <button className="text-white text-2xl ">
                        Order Now
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div></div>
        <h1 className="text-3xl text-center p-16">offered</h1>

        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-3 gap-5">
            {offered.map((offered) => (
              <div className="font-bold text-xl text-center">
                <img src={offered.image} className="radius" />
                <h1>{offered.name}</h1>
                <h1>Price: {offered.price}</h1>
                <Link to={`/shop/${offered.category}`}>
                  <div className="text-center border p-2 rounded-full m-5">
                    <button className="text-white text-2xl ">Order Now</button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
