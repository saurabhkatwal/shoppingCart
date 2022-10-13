import React, { Component } from 'react'
import { connect } from 'react-redux'
export class Item extends Component {

  removeItemHandler=(e)=>{
    this.props.removeItem(e);
  }
  incrementHandler=(e)=>{
    this.props.increment(e);
  }
  decrementHandler=(e)=>{
    this.props.decrement(e);
  }
  render() {
    return (
      <div id={this.props.itemObj.id} className='item'>
        <div className="img-container">
        <img src={"/images/"+this.props.itemObj.sku+"_2.jpg"} alt="" />
        </div>
        <div className="product-info">
            <p className="title">{this.props.itemObj.title}</p>
            <p>Quantity{this.props.itemObj.count}</p>
        </div>
        <div className="price-info">
        <button className='remove' onClick={this.removeItemHandler}>X</button>
            <p></p>
            <div id={this.props.itemObj.id+"btn"}className="btns">
                <button onClick={this.decrementHandler}>-</button>
                <button onClick={this.incrementHandler}>+</button>
            </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
return {

}
}
const mapDispatchToProps=(dispatch=>{
  return {
    removeItem:(e)=>{
      dispatch({type:"removeItem",obj:e})
    },
    increment:(e)=>{
      dispatch({type:"increment",obj:e})
    },
    decrement:(e)=>{
      dispatch({type:"decrement",obj:e})
    }
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Item)