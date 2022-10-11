import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    console.log(this.props.data.sku+"_1.jpg");
    return (
      <div className='card'>
        <img src={"images/"+this.props.data.sku+"_1.jpg"} alt="" />
        <h3>{this.props.data.title}</h3>
        <h2><small>{this.props.data.currencyFormat}</small>{this.props.data.price}</h2>
        {this.props.data.installments==0?(<p></p>):(<p>or {this.props.data.installments} x{(this.props.data.price/this.props.data.installments).toFixed(2)}</p>)}
        <button>Add to Cart</button>
      </div>
    )
  }
}
