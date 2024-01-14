import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Hero from "./motion";

export const Shop = () => {
  return (
    <>
      <Hero />
      <div className="grid sm:grid-cols-2 md:space-x-4 lg:mt-2 sm:mt-2 sm:gap-4 lg:grid-cols-4 lg:gap-4 lg:ml-12">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <br />
    </>
  );
};
