import { useState } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASEURL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_yQWL8DcRtZXCxDwTY3navsFV1NICn2BfHlBFcbMw";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, settoCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const response = await axios.get(
      `${BASEURL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div>
      <div className="currency-div">
        <div
          style={{
            width: "100%",
            fontFamily: "arial",
            backgroundColor: "black",
            textAlign: "center",
            color: "white",
          }}
        >
          <h3>EXCHANGE RATE</h3>
        </div>
        <div>
          <div style={{ marginTop: "45px" }}>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              className="amount"
            />
            <select
              onChange={(e) => setFromCurrency(e.target.value)}
              className="from-currency-option"
            >
              <option>USD</option>
              <option>EUR</option>
              <option>TL</option>
            </select>
            <FaRegArrowAltCircleRight
              style={{
                fontSize: "25px",
                marginRight: "10px",
                marginTop: "0px",
              }}
            />

            <select
              onChange={(e) => settoCurrency(e.target.value)}
              className="to-currency-option"
            >
              <option>TRY</option>
              <option>USD</option>
              <option>EUR</option>
            </select>

            <input value={result} type="number" className="result" />
          </div>
        </div>

        <div>
          <button onClick={exchange} className="exchangeButton">
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
}

export default Currency;
