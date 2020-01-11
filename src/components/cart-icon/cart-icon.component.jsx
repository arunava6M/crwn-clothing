import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import { toggelCartDropdown } from '../../redux/cart/cart.actions';

const CartIcon = ({toggelCartDropdown}) => (
    <div className='cart-icon' onClick={toggelCartDropdown}>
        <ShoppingIcon className='shopping-icon' />
        <div className='item-count'>0</div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggelCartDropdown: ()=> dispatch(toggelCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);