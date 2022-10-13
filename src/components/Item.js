import React, { Component } from 'react'
import { connect } from 'react-redux'
export class Item extends Component {

  removeItemHandler=(e)=>{
    this.props.removeItem(e);
  }
  render() {
    return (
      <div id={this.props.itemObj.id} className='item'>
        <div className="img-container">
        <img src={"/images/"+this.props.itemObj.sku+"_2.jpg"} alt="" />
        </div>
        <div className="product-info">
            <p className="title">{this.props.itemObj.title}</p>
        </div>
        <div className="price-info">
        <button className='remove' onClick={this.removeItemHandler}>X</button>
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
const mapStateToProps=(state)=>{
return {

}
}
const mapDispatchToProps=(dispatch=>{
  return {
    removeItem:(e)=>{
      dispatch({type:"removeItem",obj:e})
    }
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Item)