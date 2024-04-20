import { uiActions } from "./ui-slice";
import { useDispatch } from 'react-redux';
import { cartActions } from "./cart-slice";
import { authentication } from "../../config/firebase";
export const fetchData = () => {
  const dispatch = useDispatch();
  return async () => {
    const fetchHandler = async () => {
      const userUID = authentication?.currentUser?.uid;
      const res = await fetch(
        `https://my-shopping-app-dfa7b-default-rtdb.firebaseio.com/users/${userUID}/cartItems.json`
      );
      const data = await res.json();
      return data;
    };

    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
      localStorage.setItem('cartData', JSON.stringify(cartData));
    } catch(error) {
      console.log(error)
      
    }
  };
};
