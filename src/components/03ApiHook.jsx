// Currency Converter- by calling API and using CustomHook(create our own hook)
// API Link -> https://www.jsdelivr.com/package/gh/fawazahmed0/currency-api
// API -> https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json


import React, { useState } from 'react';
import InputBox from './03InputBox';
import useCurrencyInfo from '../hooks/useCurrencyInfo'

export default function ApiHook() {
  const [amount,setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () =>{
    setFrom(to); setTo(from); setConvertedAmount(amount); setAmount(convertedAmount);
  }
  const convert = () => { setConvertedAmount(amount * currencyInfo[to]) }
  

  return (
    <>
        <h3 className='text-center text-decoration-underline '>Api & CustomHook</h3>
        
        <div className="container" style={{backgroundColor:'lightblue'}} >
            <h4 className='text-center pb-3 pt-4 text-decoration-underline'>Currency Converter</h4>
            
            <form onSubmit={(e)=>{e.preventDefault(); convert()}}>
              <div className='w-full mb-1 '>
                <InputBox label="From" amount={amount} currencyOptions={options} onAmountChange={(amount)=>setAmount(amount)} onCurrencyChange={(currency)=>setAmount(amount)} selectCurrency={from} />
              </div>
              <div className='w-full mb-1 '>
                <InputBox label="To" amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency)=>setTo(currency)} selectCurrency={from} amountDisabled />
              </div>

              <div className='relative w-full h-0.5'>
                <button type="submit" className="btn btn-primary mb-3"> Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
                <button type="button" className="btn btn-primary mb-3" onClick={swap}> Swap </button>
              </div>
            </form>
        </div>
        <hr/>
    </>
  )
}
