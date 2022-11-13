import { useState } from "react";

function Child(props){
    const {name, product} = props;
    const [kid ,setKid] = useState(3);

    return(
        <>
            <div>
                <p>{name}</p>
                <p>{kid}</p>
                <button onClick={()=>setKid(kid+product)}>Click</button>
            </div>
        </>
    )
}

export default Child