import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <StyledResult>
        {result !== undefined && (
            <>
                <strong>{result.result.toFixed(2)} {result.outputCurrency}</strong>
            </>
        )}
    </StyledResult>
);

export default Result;