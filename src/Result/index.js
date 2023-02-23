import "./style.css";

const Result = ({ amount, currency, rate }) => {
    const result = amount / rate;

    return (
        <p className="result">
            <strong>{result.toFixed(2)} {currency}</strong>
        </p>
    );
};

export default Result;