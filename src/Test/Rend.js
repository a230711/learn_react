import { useState, useEffect } from "react";

function Rend(){
    const [effect, setEffect] = useState();
    
    useEffect(()=>{
        console.log('執行render');
    },[effect]);
    return(
        <>
            {/* //render只有一次，因為按鈕按下後值沒辦法在改變 */}
            <p>{effect}</p>
            <button onClick={()=>{
                setEffect('button effect');
            }}>
            Click
            </button>
            
            {/* //render會一直跳出，因文字使內容一再在改變(可會出錯，還在找原因) */}
            {/* <input 
                type='text'
                value={effect}
                onChange={(e)=>{
                    setEffect(e.target.value);
                }}
            /> */}
        </>
    )
}

export default Rend