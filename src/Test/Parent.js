import { useState, useEffect } from "react";
import Child from "./Child";

function Test(){
    const [total, setTotal] = useState(0);
    // useEffect(()=>{
    //     console.log('render');
    // },[total])
    return(
        <>
            <button onClick={()=>setTotal(total+1)}>Click</button>
            <h1>{total}</h1>
            {/* <Child name="Nike" product={20}/> */}
        </>
    )
}

export default Test