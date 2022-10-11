import React, { Component } from 'react'
import { connect } from 'react-redux'
import Size from './Size'
export class Sizes extends Component {
  render() {
    console.log(this.props.sizes)
    return (
      <div className='sizes'>
        {this.props.sizes.map(size=><Size size={size}/>)}
      </div>
    )
  }
}
const mapStateToProps=(state=>{
    return {
        sizes:state.sizes
    }
})
export default connect(mapStateToProps)(Sizes)