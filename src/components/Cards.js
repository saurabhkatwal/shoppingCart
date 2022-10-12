import React, { Component } from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
export class Cards extends Component {
  render() {
    console.log("filtered data"+this.props.filteredData)
    return (
      <div className='cards'>
        {this.props.filteredData.map(data=><Card key={uuidv4()} data={data}/>)}
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    productsData:state.productsData,
    filteredData:state.filteredData
  }
  }
  // const mapDispatchToProps=(dispatch)=>{
  // return {
    
  // }
  // }
  export default connect(mapStateToProps)(Cards)