import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";
//import { Toast } from "react-toastify/dist/components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Carton = (props) => {
  const { id, name, quantity, price, img } = props.data;

  const dispatch = useDispatch();
  const increase = () => {
    dispatch(
      cartActions.addToCart({
        id,
        price,
        name,
        img,
      })
    );
  };
  const decrease = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  const cut = () => {
    toast.error("Item removed from cart");
    dispatch(cartActions.cutFromCart(id));
    dispatch(
      uiActions.showNotification({
        open: false,
      })
    );
  };

  return (
    <div className="lg:w-84 sm:w-84 h-48 m-8 flex shadow shadow-black hover:shadow-xl p-6 bg-white border border-gray-200  dark:bg-white dark:border-gray-700">
      <div className="w-28 object-fill">
        {" "}
        <img src={img} className="h-24" />
      </div>
      <div className=" ml-16 ">
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
        <div className="flex flex-row ml-5">
          <button className=" w-4 text-black bg-gray-600" onClick={decrease}>
            {" "}
            -{" "}
          </button>

          <p className="w-8 text-center font-bold bg-gray-200">{quantity}</p>
          <button className=" w-4 text-black bg-gray-600" onClick={increase}>
            {" "}
            +
          </button>
        </div>
        <button
          className="bg-red-700 text-white font-bold mt-4 border rounded-md w-24"
          onClick={cut}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
