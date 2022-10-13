import React, { Component } from 'react'
import { connect } from 'react-redux'
import Items from './Items'

export class ShopMenu extends Component {
  
  alertHandler=()=>{
    this.props.alertValue();
  }
  render() {
    return (
      <div className='shop-menu'>
        <div className="menu-header">
            <div className="cart-icon">
            <i className="fa-solid fa-cart-shopping fa-2x"></i>
            {this.props.totalItems}
            </div>
            <h2>Cart</h2>
        </div>
        <div className="menu-body">
            {this.props.cartItems.length===0?<p>Add some products in cart</p>:<Items items={this.props.cartItems}/>}
        </div>
        <div className="menu-checkout">
            <div className="checkout-container">
                <div className="checkout-details">
                    <p>Subtotal</p>
                    <div className="cost">
                        <p>${this.props.totalCost.toFixed(2)}</p>
                        {/* <p></p> */}
                    </div>
                </div>
                <div className="checkout-btn">
                    <button onClick={this.alertHandler}>Checkout</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
return {
    cartItems:state.cartItems,
    totalItems:state.totalItems,
    totalCost:state.totalCost
}
}
const mapDispatchToProps=(dispatch)=>{
return {
alertValue:()=>{
  dispatch({type:"alertValue"});
}
}
}
export default connect(mapStateToProps,mapDispatchToProps)(ShopMenu);