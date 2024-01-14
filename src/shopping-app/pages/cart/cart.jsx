import React from "react";
import { useSelector } from "react-redux";
import { Carton } from "./cart-item";
import { Link, useNavigate } from "react-router-dom";
import empty from "../../assets/mtcart.png";

export const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.itemsList);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  let total = 0;
  cartItems.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <div className="text-center flex flex-col items-center jago">
      <h2 className="mt-36 text-black text-center font-bold text-4xl">
        Your cart items
      </h2>
      <div className="cart-items">
        {cartItems.map((product) => {
          return <Carton data={product} key={product.id} />;
        })}
      </div>

      {total > 0 ? (
        <div>
          <div>
            <br />
            <div className=" border-gray-100/30 flex lg:w-72 max-w-xs flex-col lg:ml-16 sm:ml-4 self-center overflow-hidden rounded-lg border bg-gray-100  ">
              <div className="cart_total">
                <p className="mt-4 font-bold lg:mb-16 text-center text-blue-500 dark:text-blue-700 sm:text-xl">
                  Cart Totals
                </p>

                <span className="flex flex-row border-2 border-b-black ">
                  <p className="text-xl ml-4">Total Qty:</p>
                  <p className="text-lg ml-36">{cartQuantity}</p>
                </span>
                <br />

                <span className="flex flex-row border-2 border-b-black ">
                  <p className="text-xl ml-4">Totals:</p>
                  <p className="text-lg ml-32">${total}</p>
                </span>
                <br />
              </div>
            </div>
            <br />
            <div className=" inline-block ml-4">
              <button
                onClick={() => navigate("/shop")}
                className="bg-blue-700 h-16 text-white p-2 border rounded-lg border-white sm:w-36 lg:w-48 lg:font-bold hover:border-blue-900"
              >
                Continue shopping
              </button>
              <button className="bg-green-700 text-white ml-8 p-2 border rounded-lg border-white h-16 lg:w-48 sm:w-40 lg:font-bold hover:border-green-900">
                <Link to="/checkout">Proceed to checkout</Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <img src={empty} className="w-96" />
          <h1 className="mt-16 text-black text-center font-bold text-4xl">
            Your cart is Empty
          </h1>
          <br />
          <button
            onClick={() => navigate("/")}
            className="bg-blue-700 -ml-8 text-white border rounded-lg border-white h-12 w-48 font-bold hover:border-blue-900"
          >
            Go shopping
          </button>
        </div>
      )}
    </div>
  );
};
