import React, { Component } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import Size from './Size'
export class Sizes extends Component {
  render() {
    return (
      <div className='sizes'>
        {this.props.sizes.map(size=><Size key={uuidv4()} size={size}/>)}
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