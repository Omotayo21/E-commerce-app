import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
 export const fetchData =() =>{
 return async (dispatch) => {

    const fetchHandler = async () => {
      const res = await fetch('https://my-shopping-app-dfa7b-default-rtdb.firebaseio.com/cartItems.json')
      const data = await res.json();
      return data;
    }

    try{
      const cartData = await fetchHandler();
          dispatch(cartActions.replaceData(cartData)) 
    }
  
     catch(error){

  dispatch(uiActions.showNotification(
          {open: true,
            message: "ERR, INTERNET DISCONNECTED PLEASE TRY AGAIN",
            type:"error"

          }))

    }
}
};
