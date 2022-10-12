import React, { Component } from 'react'
import Item from './Item'
export default class Items extends Component {
  render() {
    return (
      <div className='items'>
        {this.props.items.map(item=>{
            return <Item itemObj={item}/>
        })}
      </div>
    )
  }
}
