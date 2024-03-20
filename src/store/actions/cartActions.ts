// actions/userActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk action
export const fetchCartData = createAsyncThunk('fetchCartData', async () => {
  const cartinfo = await sessionStorage.getItem('carts')
  const cartData = (cartinfo) ? JSON.parse(cartinfo) : []
  return cartData;
});
export const removeItemFromCart = createAsyncThunk('removeItemFromCart', async (index: number) => {
  try {
    const cartinfo = await sessionStorage.getItem('carts');
    const cartData = cartinfo ? JSON.parse(cartinfo) : [];
    const { services, ...cartInfo } = cartData;

    if (cartData && services && Array.isArray(services)) {
      const filteredArray = services.filter((item, rowindex) => rowindex !== index);
      const iData = { ...cartInfo, services: filteredArray };

      const savePromise = new Promise((resolve, reject) => {
        try {
          sessionStorage.setItem('carts', JSON.stringify(iData));
          resolve('Cart data updated successfully');
        } catch (error) {
          reject('Error updating cart data');
        }
      });

     
      const result = await savePromise;
    }
  } catch (error) {
    console.error(error);
  }

  // if (index >= 0 && index < cartData.length) {
  //   cartData.services.splice(index, 1);
  //   sessionStorage.setItem('carts', JSON.stringify(cartData));
  // }
  
 
});






