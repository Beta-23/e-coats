import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem 
                    key={ cartItem.id } 
                    item={ cartItem } 
                    />
                ))
            ) : (
                <span className='empty-message'>Your Cart Is Empty!</span>
            )}
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>CHECK OUT</CustomButton>
    </div>
);

const mapStateProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateProps)(CartDropdown));