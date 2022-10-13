import getObj from "./getObj";
const increaseCount=(productsN,id)=>{

    let obj=JSON.parse(JSON.stringify(getObj(productsN,id)));
    obj.count+=1;
    return JSON.parse(JSON.stringify(obj));

}
export default increaseCount;