import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { cartActions } from "../store/cart-slice";

const ProductPage = ({ PRODUCTS }) => {
  const { id } = useParams();
  const [productName, setProductName] = useState("default name");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState();

  useEffect(() => {
    const product = PRODUCTS.find((product) => product.id === parseInt(id));
    setProductName(product.productName);
    setProductDescription(product.productDescription);
    setProductImage(product.productImage);
    setPrice(product.price);
  }, []);
  if (!productName) {
    return <p>Product not found.</p>;
  }

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        price,
        productName,
        productImage,
        productDescription,
      })
    );
  };

  return (
    <div className="mt-24">
      <div className="flex flex-col items-center">
        <div className="group  border-gray-100/30 flex lg:w-96 max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-100  ">
          <div className="relative mx-3 mt-3 flex overflow-hidden rounded-xl"></div>
          <img
            className="h-48 object-center sm:w-32  sm:h-24 lg:w-64 lg:h-48"
            src={productImage}
          />
          <div className="mt-4 px-5 pb-5">
            <h5 className="text-xl tracking-tight text-black whitespace-nowrap overflow-hidden overflow-ellipsis">
              {productName}
            </h5>

            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <b className="text-4xl font-bold text-black">{price}</b>
                <b className=" line-through! text-sm text-black  rahman">
                  $699
                </b>
              </p>
            </div>
            <p>{productDescription}</p>
            <br />
            <button
              onClick={addToCart}
              className="ml-8 sm:ml-4 hover:border-black/40 flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <ShoppingCart size={25} />
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <br />
      <button className="bg-blue-700 text-white border rounded-lg border-white h-12 w-48 font-bold hover:border-blue-900">
        <Link to="/shop">Continue shopping</Link>
      </button>
    </div>
  );
};

export default ProductPage;
