export const addItemToCart = (CartItems, itemToBeAdded) => {
    const sameItemFound = CartItems.find(
        CartItem => CartItem.id === itemToBeAdded.id
        );
    if (sameItemFound) {
        return CartItems.map(CartItem => (
            (CartItem.id === itemToBeAdded.id) ? { ...CartItem, quantity: CartItem.quantity + 1 }
                : CartItem
        ));
    }

    return [...CartItems, { ...itemToBeAdded, quantity: 1 }];
};
