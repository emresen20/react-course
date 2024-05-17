import React, { useState } from 'react'
import '../css/Currency.css'
import axios from 'axios';


/// Api SİTESİNDE N HESABIMI SİLDİĞİMDEN DOLAYI ŞUAN ÇALIŞMAZ YENİ HESAP AÇMAK GEREKİR

let Base_Url = "https://api.freecurrencyapi.com/v1/latest";
let Api_Key = "fca_live_a4h1qtUoFCJXvYEwRBg03ecV8cHsqxb48IolH7GZ";

const Currency = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        try {
            const response = await axios.get(`${Base_Url}?apikey=${Api_Key}&base_currency=${fromCurrency}`);
            console.log(response.data.data)
            const rate = response.data.data[toCurrency];
            if (rate) {
                setResult(rate * amount);
            } else {
                alert("Geçersiz döviz çifti seçildi.");
            }
        } catch (error) {
            console.error("Kur bilgisi alınırken bir hata oluştu:", error);
            alert("Döviz kurları alınırken bir hata oluştu.");
        }
    }

    return (
        <div className='currency-div'>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                    className='input'
                    type='number'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <select
                    className='curenct-option'
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                    <option value="BGN">BGN</option>
                </select>
                <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                >
                    <option value="TRY">TRY</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="BGN">BGN</option>
                </select>
                <input
                    className='result'
                    type='number'
                    value={result}
                    readOnly
                />
            </div>
            <button onClick={exchange} style={{ marginTop: "10px" }}>Çevir</button>
        </div>
    )
}

export default Currency
