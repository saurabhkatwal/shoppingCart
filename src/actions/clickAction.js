import isPresent from "../functions/isPresent";
const clickAction=(action,state)=>{
    let text=action.obj.target.innerText;
    let toggleState=JSON.parse(JSON.stringify(state.activeToggles));
    toggleState[text]=!state.activeToggles[text];
    let activeToggleEntries=Object.entries(toggleState)
    let positives=activeToggleEntries.filter(entry=>{
        return entry[1];
    }).map(positive=>{
        return positive[0]
    })
    let sizes=[...positives];
    let dataFiltered
    =state.productsData.filter(product=>{
        return isPresent(sizes,product);
    })
    return {
        ...state,
        activeButtons:[...positives],
        filteredData:(positives.length===0)?(state.productsData):([...dataFiltered]),
        activeToggles:JSON.parse(JSON.stringify(toggleState))
    }
}
export default clickAction;