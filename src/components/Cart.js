import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShopMenu from './ShopMenu';
export class Cart extends Component {
  toggleCartHandler=()=>{
    this.props.toggleCart();
  }
  render() {
    return (
      <div style={this.props.showCart?{right:0}:{}} className='cart'>
        <button onClick={this.toggleCartHandler} className='cartToggleIcon'>{this.props.showCart?("X"):(<div className='value-icon'><i className="fa-solid fa-cart-shopping fa-2x"></i>{this.props.totalItems}</div>)}</button>
        <ShopMenu/>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
return {
  showCart:state.showCart,
  cartItems:state.cartItems,
  totalItems:state.totalItems
}
}
const mapDispatchToProps=(dispatch)=>{
  return {
    toggleCart:()=>{
      dispatch({type:"toggleCart"});
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
