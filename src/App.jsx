import "./index.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./shopping-app/components/navbar";
import Footer from "./shopping-app/components/footer";
import Home from "./shopping-app/pages/Home";
import { Shop } from "./shopping-app/pages/shop/shop";
import { Cart } from "./shopping-app/pages/cart/cart";
import Details from "./shopping-app/pages/shop/full-details";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./shopping-app/pages/shop/Notification";
import { uiActions } from "./shopping-app/store/ui-slice";
import { fetchData } from "./shopping-app/store/cart-actions";
import Checkout from "./shopping-app/pages/checkout";
import Complete from "./shopping-app/pages/complete";
import ProductPage from "./shopping-app/components/ProductPage";
import { PRODUCTS } from "./shopping-app/products";
import { About } from "./shopping-app/pages/about";
import { Contact } from "./shopping-app/pages/contact";
import Error from "./shopping-app/pages/Error";
import Login from "./shopping-app/pages/Login";
import Register from "./shopping-app/pages/Signup";
import { authentication } from "./config/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
    
  }, [dispatch]);

  const userUID = 
     authentication?.currentUser?.uid;
    

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    if (cart.changed) {
      const sendRequest = async () => {
        //send state as sending

        dispatch(
          uiActions.showNotification({
            open: true,
            message: "sending request",
            type: "warning",
          })
        );
        try {
          const res = await fetch(
            `https://my-shopping-app-dfa7b-default-rtdb.firebaseio.com/users/${userUID}/cartItems.json`,
            {
              method: "PUT",
              body: JSON.stringify(cart),
            }
          );

          const data = await res.json();
         
          
        } catch (error) {
          console.error("error in sending request", error.message);
          dispatch(
            uiActions.showNotification({
              open: true,
              message: "Failed, couldn't complete request",
              type: "error",
            })
          );
        }
        //send state as successful
      };

      sendRequest().catch((error) => {
        dispatch(
          uiActions.showNotification({
            open: true,
            message: "Failed, couldn't add item to cart",
            type: "error",
          })
        );
        //send state as error
      });
    }
  }, [cart, dispatch]);
   
  useEffect(()=> {
    if (notification) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);

        dispatch(uiActions.clearNotification());}, 3000);
        return () => clearTimeout(timer);
      
    }
  }, [notification, dispatch])
  return (
    <Router>
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/*"
          element={
            <div>
              <Navbar PRODUCTS={PRODUCTS} />
              <ToastContainer />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/person/:id" element={<Details />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/complete" element={<Complete />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route
                  path="/product/:id"
                  element={<ProductPage PRODUCTS={PRODUCTS} />}
                />
                <Route path="*" element={<Error />} />
              </Routes>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
