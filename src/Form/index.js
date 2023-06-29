import { useState } from "react";
import Result from "./Result";
import Clock from "./Clock";
import { useRatesData } from "./useRatesData";
import {
    StyledForm,
    Fieldset,
    Legend,
    Label,
    Input,
    Button,
    Paragraph,
    Loading,
    Error,
} from "./styled";

const Form = ({ title }) => {
    const [amount, setNewAmount] = useState("");
    const [result, setResult] = useState();
    const [outputCurrency, setOutputCurrency] = useState("GBP");
    const ratesData = useRatesData();

    const calculateResult = (amount, outputCurrency) => {
        const outputRate = ratesData.rates[outputCurrency];

        setResult({
            result: amount * outputRate,
            outputCurrency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, outputCurrency);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>{title}</Legend>
                <Clock />
                {ratesData.state === "loading" ? (
                    <Loading>
                        Proszę chwilę poczekać, trwa ładowanie danych!
                    </Loading>
                ) : (
                    ratesData.state === "error" ? (
                        <Error>
                            Coś poszło nie tak!
                        </Error>
                    ) : (
                        <>
                            <Label>Podaj kwotę w PLN do wymiany:
                                <Input
                                    type="number"
                                    value={amount}
                                    onChange={({ target }) => setNewAmount(target.value)}
                                    step="any"
                                    min="0"
                                    required
                                    autoFocus={true}
                                    placeholder="Wpisz kwotę"
                                />
                            </Label>
                            <p>
                                <Label>Wybierz walutę końcową:
                                    <Input as="select"
                                        value={outputCurrency}
                                        onChange={({ target }) => setOutputCurrency(target.value)}
                                    >
                                        {Object.keys(ratesData.rates).map(((outputCurrency) => (
                                            <option
                                                key={outputCurrency}
                                                value={outputCurrency}
                                            >
                                                {outputCurrency}
                                            </option>
                                        )))};
                                    </Input>
                                </Label>
                            </p>
                            <Button>Oblicz</Button>
                            <Paragraph>Otrzymasz:</Paragraph>
                            <Result
                                result={result}
                            />
                            <Paragraph smaller>
                                Kursy walut pobrane ze strony <a rel="noreferrer noopener" target="_blank" href="https://exchangerate.host">https://exchangerate.host</a>.
                            </Paragraph>
                        </>
                    )
                )}
            </Fieldset>
        </StyledForm>
    );
};

export default Form;