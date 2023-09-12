// cartSelectors.js

export const selectCart = (state) => state.cart.cart;

export const selectCartSubtotal = (state) => {
    const cart = selectCart(state);
    return cart.items.reduce((subtotal, item) => subtotal + item.price, 0);
};  