import { useRef } from "react";


function Refbtn (){
    const inputRef = useRef(null);
    //{current: null}
    return(
        <>
            <input 
                type="text" 
                ref={inputRef}
            />
            <button onClick={()=>{
                inputRef.current.value = "a230711@yahoo.com.tw"
            }}>
            Click
            </button>
        </>
    )
}

export default Refbtn