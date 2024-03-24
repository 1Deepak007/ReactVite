import { React, useId } from "react";

function InputBox({ label, amount,
  onAmountChange, onCurrencyChange,
  currencyOptions = [], selectCurrency = "usd",
  amountDisabled = false, currencyDisable = false,
  className = "", }) {
  const amountInputId = useId();
  return (
    <>
      <div className='container mt-3'>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor={amountInputId}>{label}</label>
              <input disabled={amountDisabled} value={amount} id={amountInputId} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} type="number" placeholder="Amount" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Currency Type</label>
              <select value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable} className="form-control" id="from-currency">
                {currencyOptions.map((currency) => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputBox;
