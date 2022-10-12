import React, { Component } from 'react'
import { connect } from 'react-redux'
export class Cart extends Component {
  toggleCartHandler=()=>{
    this.props.toggleCart();
  }
  render() {
    return (
      <div onClick={this.toggleCartHandler} className='cart'>
        <button><i className="fa-solid fa-cart-shopping fa-2x"></i></button>
        {/* <span>3</span> */}
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
