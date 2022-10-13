import React, { Component } from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid';
export default class Items extends Component {
  render() {
    return (
      <div className='items'>
        {this.props.items.map(item=>{
            return <Item key={uuidv4()} itemObj={item}/>
        })}
      </div>
    )
  }
}
