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
        <button onClick={this.toggleCartHandler} className='cartToggleIcon'>{this.props.showCart?("X"):<i className="fa-solid fa-cart-shopping fa-2x"></i>}</button>
        {/* <span>3</span> */}
        <ShopMenu/>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
return {
  showCart:state.showCart
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
