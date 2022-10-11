import { createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import logger from "redux-logger"
import Content from "../components/Content.js";
import data from "./products.js"
import Size from "../components/Size"
console.log(data)
const isPresent=(sizes,product)=>{
    for(let i=0;i<sizes.length;i++){
        if(product.availableSizes.includes(sizes[i].toUpperCase())){
            return true;
        }
    }
    return false;
  }
let reducerFn=(state={productsData:data.products,
    sizes:["xs","s","m","ml","l","xl","xxl"],
    activeToggles:{
        xs:false,
        s:false,
        m:false,
        ml:false,
        l:false,
        xl:false,
        xxl:false
    },activeButtons:[],
    filteredData:[]
},action)=>{
    if(action.type==="click"){
        let text=action.obj.target.innerText;
        console.log(text);
        state.activeToggles[text]=!state.activeToggles[text];
        let activeToggleEntries=Object.entries(state.activeToggles)
        let positives=activeToggleEntries.filter(entry=>{
            return entry[1];
        }).map(positive=>{
            return positive[0]
        })
        state.activeButtons=positives
        let sizes=state.activeButtons;
        state.filteredData=state.productsData.filter(product=>{
            return isPresent(sizes,product);
        })
    }
    return state;
}
let store=createStore(reducerFn,composeWithDevTools(
    applyMiddleware(logger)
  ));
// store.subscribe(Content);
// console.log(store.getState())
export default store