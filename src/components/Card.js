import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Card extends Component {
  cartHandler=(e)=>{
    this.props.cartClick(e);
  }
  render() {
    return (
      <div id={this.props.data.id} className='card'>
        <img src={"images/"+this.props.data.sku+"_1.jpg"} alt="" />
        <p>{this.props.data.title}</p>
        <h3><small>{this.props.data.currencyFormat}</small>{this.props.data.price}</h3>
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
      dispatch({type:"cartClick",obj:e})
    }
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Card);
