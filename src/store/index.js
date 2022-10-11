import { createStore } from "redux";
import Content from "../components/Content.js";
import data from "./products.js"
console.log(data)
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
    }
},action)=>{
    if(action.type==="click"){
        console.log(action.obj.target.innerText)
    }
    return state;
}
let store=createStore(reducerFn);
// store.subscribe(Content);
// console.log(store.getState())
export default store