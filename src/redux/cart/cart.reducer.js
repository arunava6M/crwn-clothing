import { cartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItem: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.toggleShowCart:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.addItem:
            return {
                ...state,
                cartItem: addItemToCart(state.cartItem,action.payload)
                // cartItem: [...state.cartItem, action.payload]
            };
        default:
            return state;

    };
};

export default cartReducer;