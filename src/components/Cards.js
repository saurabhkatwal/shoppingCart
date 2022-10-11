import React, { Component } from 'react'
import Card from './Card'
import { connect } from 'react-redux'
export class Cards extends Component {
  render() {
    console.log(this.props.productsData)
    return (
      <div className='cards'>
        {this.props.productsData.map(data=><Card data={data}/>)}
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    productsData:state.productsData
  }
  }
  const mapDispatchToProps=(dispatch)=>{
  return {
    
  }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Cards)