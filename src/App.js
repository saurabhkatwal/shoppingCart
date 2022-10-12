import './App.css';
import React, { Component } from 'react'
import Logo from './components/Logo';
import Content from './components/Content'
import Cart from './components/Cart';
export default class App extends Component {
  render() {
    return (
      <div className=''>
        <Logo/>
        <Content/>
        <Cart/>
      </div>
    )
  }
}

