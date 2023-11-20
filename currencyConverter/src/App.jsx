import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            className="w-full flex flex-col gap-1"
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="flex justify-center items-center w-full h-10 gap-[3rem]">
              <button
                type="submit"
                className="bg-gradient-to-r from-gray-600 to-gray-300 text-white px-2 py-0.5 rounded-lg w-20 hover:scale-125"
              >
                Convert
              </button>
              <button
                type="button"
                className="rounded-md bg-gradient-to-r from-gray-300 to-gray-600 text-white px-2 py-0.5 w-20 hover:scale-125"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
