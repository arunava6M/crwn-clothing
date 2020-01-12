import {cartActionTypes}  from './cart.types.js';

export const toggelCartDropdown=()=>({
    type: cartActionTypes.toggleShowCart
});

export const addItem=item=>({
    type: cartActionTypes.addItem,
    payload: item
});

