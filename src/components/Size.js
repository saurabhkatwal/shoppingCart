import React, { Component } from 'react'
import { connect } from 'react-redux'
export class Size extends Component {

    clickHandler=(e)=>{
        this.props.click(e);
    }
        // return this.props.activeToggles[this.props.size]?({backgroundColor:"#ccc",color:"#fff"}):({})
  render() {
    // console.log(this.props.activeToggles)
    // console.log("current adfa"+this.props.activeToggles[this.props.size])
    return (
      <div className='filterSize' onClick={this.clickHandler}>
        {/* { console.log("current adfa"+this.props.activeToggles[this.props.size])} */}
        <button style={this.props.activeToggles[this.props.size]?{color:"#fff",backgroundColor:"#000"}:{}}>{this.props.size}</button>
      </div>
    )
  } 
}
const mapStateToProps=(state)=>{
return {
    activeToggles:state.activeToggles
}
}
const mapDispatchToProps=(dispatch)=>{
return {
click:(e)=>{
    dispatch({type:"click",obj:e})
}
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Size);