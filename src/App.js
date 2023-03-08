import React, { useState } from "react";
import Form from "./Form";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ name }) => name === currency).value;

    setResult({
      result: amount / rate,
      currency,
    });
  };

  return (
    <Form
      title="Kalkulator walutowy"
      result={result}
      calculateResult={calculateResult}
    />
  );
}

export default App;