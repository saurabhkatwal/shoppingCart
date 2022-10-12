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
    filteredData:data.products
},action)=>{
    if(action.type==="click"){
        console.log("inside click event")
        let text=action.obj.target.innerText;
        console.log(text);
        console.log("got the text")
        let toggleState=JSON.parse(JSON.stringify(state.activeToggles));
        console.log("copied values to togglestate")
        // let newObj={...toggleState};
        console.log(toggleState[text])
        toggleState[text]=!state.activeToggles[text];
        console.log("togglestate : ",toggleState);
        // let toggleState=!state.activeToggles[text];
        // console.log(state.activeToggles)
        // state.activeToggles[text]=!state.activeToggles[text];
        let activeToggleEntries=Object.entries(toggleState)
        let positives=activeToggleEntries.filter(entry=>{
            return entry[1];
        }).map(positive=>{
            return positive[0]
        })
        console.log("positives "+positives)
        // state.activeButtons=positives
        let sizes=[...positives];
        // state.filteredData
        console.log("got the positives")
        let dataFiltered
        =state.productsData.filter(product=>{
            return isPresent(sizes,product);
        })
        console.log("got the data filtered")
        console.log("returning state");
        return {
            ...state,
            activeButtons:[...positives],
            filteredData:(positives.length===0)?(state.productsData):([...dataFiltered]),
            activeToggles:JSON.parse(JSON.stringify(toggleState))
        }
    }
    return state;
}
let store=createStore(reducerFn,composeWithDevTools(
    applyMiddleware(logger)
  ));
// store.subscribe(Content);
// console.log(store.getState())
export default store