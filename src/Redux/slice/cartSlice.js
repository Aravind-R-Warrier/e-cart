import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: 'cart',
  initialState:[],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(item => item.id == action.payload.id);

      if (existingProduct) {

        const remainingProducts=state.filter(item=>item.id !=existingProduct.id)
        // Update existing product quantity and totalPrice
        existingProduct.quantity++;
        existingProduct.totalPrice = existingProduct.price * existingProduct.quantity;
        state=[...remainingProducts,existingProduct]
      } else {
        // Add new product to the cart with quantity 1 and totalPrice set to price
        state.push({...action.payload,quantity: 1,totalPrice: action.payload.price});
      }
    },
    removeFromCart:(state,action)=>{
      return state=state.filter(item=>item.id!==action.payload)
    },
    emptyCart:(state)=>{
    return  state=[]
    }
  },
});

export const { addToCart,removeFromCart,emptyCart } = CartSlice.actions;
export default CartSlice.reducer;
