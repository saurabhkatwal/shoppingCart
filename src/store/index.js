import { createStore } from "redux";
import Content from "../components/Content.js";
import data from "./products.js"
console.log(data)
let reducerFn=(state={productsData:data.products},action)=>{
    
    return state;
}
let store=createStore(reducerFn);
store.subscribe(Content);
console.log(store.getState())
export default store