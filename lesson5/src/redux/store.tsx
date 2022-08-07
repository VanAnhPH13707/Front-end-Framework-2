import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../pages/Home/cartSlice';
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})
export default store;