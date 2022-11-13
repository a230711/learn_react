import { useState } from "react";

function Bbtn(){
    const [bbcontrol, setBbcontrol] = useState('');
    const mail = 'a230711@yahoo.com.tw';
    return(
        <>
            <input 
                type="text"
                value={bbcontrol}
                onChange={(e)=>{
                    setBbcontrol(e.target.value);
                    //直接改動顯示
                }}
            />
            <button onClick={()=>{
                setBbcontrol(mail);
            }}>Clicik</button>
        </>
    )
}

export default Bbtn