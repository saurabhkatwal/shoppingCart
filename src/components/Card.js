import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Card extends Component {
  cartHandler=(e)=>{
    this.props.cartClick(e);
  }
  render() {
    console.log(this.props.data.sku+"_1.jpg");
    return (
      <div id={this.props.data.id} className='card'>
        <img src={"images/"+this.props.data.sku+"_1.jpg"} alt="" />
        <h3>{this.props.data.title}</h3>
        <h2><small>{this.props.data.currencyFormat}</small>{this.props.data.price}</h2>
        {this.props.data.installments==0?(<p></p>):(<p>or {this.props.data.installments} x{(this.props.data.price/this.props.data.installments).toFixed(2)}</p>)}
        <button onClick={this.cartHandler}>Add to Cart</button>
      </div>
    )
  }
}
const mapStateToProps=(state=>{
return {}
})
const mapDispatchToProps=(dispatch=>{
  return {
    cartClick:(e)=>{
      dispatch({type:"cartClick",obj1:e})
    }
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Card);
