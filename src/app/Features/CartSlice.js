import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem
            ("cartItems")) : [], //if the items exist at the localstorage then we want to include them in our state else [emptyArray]
        cart: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
    },
    reducers: {
        // ******************* Add to cart Action ***********************************************************
        addItemToCart: (state, action) => {
            const itemIndex = state.cart.findIndex(
                item => item.id === action.payload.id); //we check wheather a product we are trying to add already existing or not
            if (itemIndex >= 0) {  // >=0 means we already have item inside cart
                state.cart[itemIndex].cartQuantity += 1
                toast.info(`${action.payload.name}'s quantity has been increased `, {
                    position: "bottom-left"
                });
            } else {

                const tempProduct = { ...action.payload, cartQuantity: 1 };  //we have to increase cart Quantity by 1
                state.cart.push(tempProduct);
                toast.success(`${action.payload.name} added to cart`, {
                    position: "bottom-left"
                });
            }
            // ************************************** Storing items to the local storage ***************************
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },
        // ******************* Remove from cart Action ***********************************************************
        removeItemFromCart: (state, action) => {
            const nextCartItems = state.cart.filter(item => item.id !== action.payload.id);
            state.cart = nextCartItems;

        },
        // ******************************** Decreasing item quantity ********************
        decreaseCartQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex(
                cartItems => cartItems.id === action.payload.id
            )
            if (state.cart[itemIndex].cartQuantity > 1) {
                state.cart[itemIndex].cartQuantity -= 1
                toast.error(`decreased ${action.payload.name} Quantity `, {
                    position: "bottom-left"
                });
            } else if (state.cart[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cart.filter(item => item.id !== action.payload.id);
                state.cart = nextCartItems;

            }

        },

        clearCart: (state, action) => {
            state.cart = [];
            toast.error(`Cart cleared`, {
                position: "bottom-left"
            });
            // ************************************** Storing items to the local storage ***************************
            localStorage.setItem("cartItems", JSON.stringify(state.cart));


        },
        getTotal: (state, action) => {
            let { total, quantity } = state.cart.reduce((cartTotal, cartItem) => {   //first parameter is teh accumulator and secod is the initial value which is defined below
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;
                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
                return cartTotal;
            }, {
                total: 0,
                quantity: 0,
            });
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    },
});

export const { addItemToCart, removeItemFromCart, decreaseCartQuantity, clearCart, getTotal } = cartSlice.actions;
export default cartSlice.reducer;
