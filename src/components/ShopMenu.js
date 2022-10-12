import React, { Component } from 'react'

export default class ShopMenu extends Component {
  render() {
    return (
      <div className='shop-menu'>
        <div className="menu-header">
            <div className="cart-icon">
            <i className="fa-solid fa-cart-shopping fa-2x"></i>
            </div>
            <h2>Cart</h2>
        </div>
        <div className="menu-body">
            <p>Add some products in cart</p>
        </div>
        <div className="menu-checkout">
            <div className="checkout-container">
                <div className="checkout-details">
                    <p>Subtotal</p>
                    <div className="cost">
                        <p>$ 0.00</p>
                        <p></p>
                    </div>
                </div>
                <div className="checkout-btn">
                    <button>Checkout</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
