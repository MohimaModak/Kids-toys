import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  // Fetch data using useLoaderData hook
  const weddings = useLoaderData();
  
  // Get the id from the URL params
  const { id } = useParams();
  const idInt = parseInt(id);

  // Find the wedding with the matching id
  const wedding = weddings.find((wedding) => wedding._id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Check if a wedding is found
  if (!wedding) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mx-auto md:w-2/3">
      <div className="flex items-center justify-center h-[100vh] mx-auto">
        <div className="text-center background border shadow-2xl rounded-2xl p-5 text-slate-600">
          <div className="flex justify-center items-center">
            {wedding.image && (
              <img
                src={wedding.image}
                alt={wedding.name}
                className="rounded-lg w-1/2"
              />
            )}
          </div>
          <div className="flex justify-center items-center ">
            <div className="w-2/3">
              <h1 className="text-2xl md:text-5xl m-2 new font-extrabold">
                {wedding.name}
              </h1>
              <h1 className="text-base md:text-2xl font-bold more">
                {wedding.recipe}
              </h1>
              <h1 className="text-2xl font-semibold more">{wedding.price}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
