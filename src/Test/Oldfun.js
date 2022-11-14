import { useState } from 'react';

function Oldfun(){
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [anwser, setAnwser] = useState();

    // const date = new Date();
    // const getime = date.setFullYear(2022).setMonth(10).getDay();
    // console.log(getime);
    // console.log(new Date(year, month, 0).getDate());
    // const chck18time = 18*365.25*12*
    // const selftime = Number(new Date(`${year}/${month}/${day}`));
    // console.log(selftime)


    return(
        <>
            <span>
            西元
                <select
                    value={year}
                    onChange={(e)=>{
                        setYear(e.target.value)
                    }}
                >
                    <option>請選擇</option>
                    {
                        Array(2022-1970+1).fill(0).map((v,i)=>{
                            return (
                                <option key={i} value={i+1970}>
                                    {i+1970}
                                </option>
                            )
                        })
                    }
                </select>
            年
            </span>
            <span>
                <select
                    value={month}
                    onChange={(e)=>{
                        setMonth(e.target.value)
                    }}
                >
                <option>請選擇</option>
                {
                    Array(12).fill(0).map((v,i)=>{
                        return(
                            <option key={i} value={i+1}>
                                {i+1}
                            </option>
                        )
                    })
                }
                </select>
            月
            </span>
            <span>
                <select
                    value={day}
                    onChange={(e)=>{
                        setDay(e.target.value)
                    }}
                >
                <option>請選擇</option>
                {
                    Array(new Date(year, month, 0).getDate()?new Date(year, month, 0).getDate():0).fill(0).map((v,i)=>{
                        return(
                            <option key={i} value={i+1}>
                                {i+1}
                            </option>
                        )
                    })
                }
                </select>
            日
            </span>
            <hr/>
            <button
                onClick={()=>{
                    const chck18time = 568036800000;
                    const selftime = Number(new Date(`${year}/${month}/${day}`));
                    if(chck18time>selftime){
                        setAnwser('已滿18');
                    }else{
                        setAnwser('未滿18')
                    }
                }}
            >
            檢查
            </button>
            <p>{anwser}</p>
        </>
    )
}

export default Oldfun