import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function InputBox(
    {
        label, 
        amount,
        amountDisable = false,
        onAmountChange,
        currencyOption = [],
        selectCurrency,
        onCurrencyChange,
    
    }
) {


    return (
        <div className="bg-white p-3 rounded text-sm d-flex">
            <div className="w-50">
                <label className="text-muted mb-2 d-block">
                    {label}
                </label>
                <input
                    className="form-control border-0 bg-transparent py-2"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) => {
                        if (onAmountChange) {
                            onAmountChange(Number(e.target.value));
                        }
                    }}
                />
            </div>
            <div className="w-50 d-flex flex-wrap justify-content-end text-right">
                <p className="text-muted mb-2 w-100">Currency Type</p>
                <select
                    className="form-select rounded px-1 py-1 bg-light cursor-pointer border-0"
                    value={selectCurrency}
                    onChange={(e) => {
                        if (onCurrencyChange) {
                            onCurrencyChange(e.target.value);
                        }
                    }}
                >
                    {currencyOption.map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
