import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='item'>
        <div className="img-container">
        <img src={"/images/"+this.props.itemObj.sku+"_2.jpg"} alt="" />
        </div>
        <div className="product-info">
            <p className="title">{this.props.itemObj.title}</p>
        </div>
        <div className="price-info">
        <button className='remove'>X</button>
            <p></p>
            <div className="btns">
                <button>-</button>
                <button>+</button>
            </div>
        </div>
      </div>
    )
  }
}
