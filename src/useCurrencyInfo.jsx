import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [Data, setData] = useState({})
    useEffect(()=>{
      const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      fetch(url)
      .then((res)=>res.json())
      .then((res)=> setData(res[currency]))
      console.log(Data)
    }, [currency])

    return Data
}

export default useCurrencyInfo;