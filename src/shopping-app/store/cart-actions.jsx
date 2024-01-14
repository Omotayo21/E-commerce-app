import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
import { authentication } from "../../config/firebase";
export const fetchData = () => {
  return async (dispatch) => {
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
    } catch(error) {
      console.log(error)
      //dispatch(uiActions.showNotification({
          //open: true,
          //message: "ERR, INTERNET DISCONNECTED PLEASE TRY AGAIN",
          //type: "error",
        //})
      //);
    }
  };
};
