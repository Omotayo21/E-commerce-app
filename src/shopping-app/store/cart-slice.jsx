import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartier",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceData(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.itemsList = action.payload.itemsList;
    },
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.productName,
          img: newItem.productImage,
        });
        //state.totalQuantity++
      }
      state.totalQuantity = state.itemsList.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    removeFromCart(state, action) {
      state.changed = true;
      const id = action.payload;
      const existingItemIndex = state.itemsList.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.itemsList[existingItemIndex];

        if (existingItem) {
          if (existingItem.quantity === 1) {
            // Remove the item if its quantity is 1
            state.itemsList = state.itemsList.filter((item) => item.id !== id);
          } else {
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price;
          }
        }

        // Update totalQuantity
        state.totalQuantity = state.itemsList.reduce(
          (total, item) => total + item.quantity,
          0
        );
      }
    },
    cutFromCart(state, action) {
      state.changed = true;
      const id = action.payload;

      // Create a new array without the item to be removed
      state.itemsList = state.itemsList.filter((item) => item.id !== id);

      // Recalculate the totalQuantity based on the updated itemsList
      state.totalQuantity = state.itemsList.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    finish(state) {
      state.totalQuantity = initialState.totalQuantity;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
