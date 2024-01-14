import React from "react";
import img1 from "../assets/11.png";
import img2 from "../assets/12.png";
import { Carousel } from "./shop/carousel";
import Head from "./shop/motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Head />
      <Carousel />

      <motion.button
        initial={{ opacity: 0, x: -180 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 1.2 }}
        className="lg:w-64 mt-3 font-serif ml-64 sm:w-24 hover:border-black/40 flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 "
      >
        
        <Link to="/shop">SHOP NOW</Link>{" "}
      </motion.button>

      <div className="flex flex-col text-center mt-12">
        <h1 className="lg:mt-4 text-blue-700 text-center font-bold lg:text-2xl sm:text-xl sm:mt-4 underline">
          LATEST PRODUCTS
        </h1>
      </div>
      <div className="w-full overflow-x-auto  whitespace-nowrap">
        <div className="flex space-x-12">
          <br />

          <div className=" ">
            <img src={img1} className="w-32 h-32 object-cover" />{" "}
            <h5 className="text-lg text-black">iphone 14 pro </h5>
            <p>
              <b className="text-lg font-bold text-black">$1200000</b>
              <b className="line-through text-sm text-black  rahman">$699</b>
            </p>
          </div>
          <div>
            <img src={img2} className="w-24 h-32 object-cover mt-4" />{" "}
            <h5 className="text-lg text-black">iphone X</h5>
            <p>
              <b className="text-lg font-bold text-black">$135000</b>
              <b className="line-through text-sm text-black  rahman">$699</b>
            </p>
          </div>
          <div>
            <img src={img1} className="w-32 h-32 object-cover" />{" "}
            <h5 className="text-lg text-black">iphone 14 pro </h5>
            <p>
              <b className="text-lg font-bold text-black">$1200000</b>
              <b className="line-through text-sm text-black  rahman">$699</b>
            </p>
          </div>
          <div>
            <img src={img2} className="w-24 h-32 object-cover mt-4" />{" "}
            <h5 className="text-lg text-black">iphone X</h5>
            <p>
              <b className="text-lg font-bold text-black">$135000</b>
              <b className="line-through text-sm text-black  rahman">$699</b>
            </p>
          </div>
          <div>
            <img src={img1} className="w-32 h-32 object-cover" />{" "}
            <h5 className="text-lg text-black">iphone 14 pro </h5>
            <p>
              <b className="text-lg font-bold text-black">$1200000</b>
              <b className="line-through text-sm text-black  rahman">$699</b>
            </p>
          </div>
          <div>
            <img src={img2} className="w-24 mt-4 h-32 object-cover" />{" "}
            <h5 className="text-lg text-black">iphone X</h5>
            <p>
              <b className="text-lg font-bold text-black">$135000</b>
              <b className="line-through text-sm text-black  rahman">$699</b>
            </p>
          </div>
          <div>
            <img src={img1} className="w-32 h-32 object-cover" />{" "}
            <h5 className="text-lg text-black">iphone 14 pro </h5>
            <p>
              <b className="text-lg font-bold text-black">$1200000</b>
              <b className="line-through text-sm text-black  rahman">$699</b>
            </p>
          </div>
          <div>
            <img src={img2} className="w-24 mt-4 h-32 object-cover" />{" "}
            <h5 className="text-lg text-black">iphone X</h5>
            <p>
              <b className="text-lg font-bold text-black">$135000</b>
              <b className="line-through text-sm text-black  rahman">$699</b>
            </p>
          </div>
          <div>
            <img src={img1} className="w-32 h-32 object-cover" />{" "}
            <h5 className="text-lg text-black">iphone 14 pro </h5>
            <p>
              <b className="text-lg font-bold text-black">$1200000</b>
              <b className="line-through text-sm text-black  rahman">$699</b>
            </p>
          </div>
          <div>
            <img src={img2} className="w-24 mt-4 h-32 object-cover" />{" "}
            <h5 className="text-lg text-black">iphone X</h5>
            <p>
              <b className="text-lg font-bold text-black">$135000</b>
              <b className="line-through text-sm text-black  rahman">$699</b>
            </p>
          </div>
          <div>
            <img src={img1} className="w-32 h-32 object-cover" />{" "}
            <h5 className="text-lg text-black">iphone 14 pro </h5>
            <p>
              <b className="text-lg font-bold text-black">$1200000</b>
              <b className="line-through text-sm text-black  rahman">$699</b>
            </p>
          </div>
          <div>
            <img src={img2} className="w-34 mt-4 h-32 object-cover" />{" "}
            <h5 className="text-lg text-black">iphone X</h5>
            <p>
              <b className="text-lg font-bold text-black">$135000</b>
              <b className="line-through text-sm text-black  rahman">$699</b>
            </p>
          </div>
        </div>{" "}
        <br />
      </div>
    </>
  );
};

export default Home;
