import './App.css';
import React, { Component } from 'react'
import Logo from './components/Logo';
import Content from './components/Content'
import Cart from './components/Cart';
import { connect } from 'react-redux';
export class App extends Component {
  render() {
    return (
      <div className='app'>
        <Logo/>
        <p>{this.props.filteredData.length} product(s) found</p>
        <Content/>
        <Cart/>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
return {
filteredData:state.filteredData
}
}
const mapDispatchToProps=(dispatch)=>{
return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
