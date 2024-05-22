import {createSlice} from '@reduxjs/toolkit'
export const CartSlice = createSlice({
    name: 'cart',
    initialState : [],
    reducers: {
        addToCart:(state, action)=>{
            state.push(action.payload);
        },
        dropFromCart(state, action)
        {
            return state.filter((item)=>{
                if(item.id === action.payload)
                    return false;
                return true;
            })
        }
    }
});

export const {addToCart, dropFromCart} = CartSlice.actions;
export default CartSlice.reducer;