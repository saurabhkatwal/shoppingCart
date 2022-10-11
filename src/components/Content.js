import React, { Component } from 'react'
import Filter from './Filter'
import Cards from './Cards'
// import { connect } from 'react-redux'
export default class Content extends Component {

  render() {
    // console.log(productsData)
    return (
      <div>
        <Filter/>
        <Cards/>
      </div>
    )
  }
}
// const mapStateToProps=(state)=>{
// return{
//   productsData:state.productsData
// }
// }
// const mapDispatchToProps=(dispatch)=>{
// return {
  
// }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Content)
