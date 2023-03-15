import "./style.css";

const Result = ({ result }) => (
    <p className="result">
        {result !== undefined && (
            <>
                <strong>{result.result.toFixed(2)} {result.currency}</strong>
            </>
        )}
    </p>
);

export default Result;