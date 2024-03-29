//==========> This is a custom Hook

// API
//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const[data,setData] = useState({})

    //useEffect will call api wehn component loads/mount
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;