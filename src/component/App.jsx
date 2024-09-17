import React, { useState } from "react";
import InputBox from "./InputBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import useCurrencyInfo from "../useCurrencyInfo";

export default function App() {
    const [From, setFrom] = useState("usd")
    const [To, setTo] = useState("inr")
    const [amount, setAmount] = useState(1) 
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(From);
    const option = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(To);
        setTo(From);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }

    const convert = () => { 
            setConvertedAmount(amount *currencyInfo[To]);
    }

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="w-100">
                <div className="mx-auto border rounded-lg p-4" style={{ maxWidth: '500px', backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.3)' }}>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="mb-3">
                            <InputBox 
                                label="From" 
                                amount={amount}
                                currencyOption={option}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={From}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="position-relative mb-3">
                            <hr className="my-3" />
                            <button
                                type="button"
                                className="btn btn-primary position-absolute top-50 start-50 translate-middle"
                                style={{
                                    borderRadius: '5px',
                                    padding: '2px 8px',
                                }}
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="mb-3">
                            <InputBox 
                                label="To"
                                amount={convertedAmount}
                                currencyOption={option}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={To}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 py-3">
                            Convert {From} To {To}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
