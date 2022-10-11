import React, { Component } from 'react'
import Sizes from './Sizes'
export default class Filter extends Component {
  render() {
    return (
      <div className='filter'>
        <h4>Sizes:</h4>
        <Sizes/>
      </div>
    )
  }
}
