import "./style.css";
import React from "react";

const Result = ({ result }) => (

    <p className="result">
        <strong>{result.result.toFixed(2)} {result.currency}</strong>
    </p>
);

export default Result;