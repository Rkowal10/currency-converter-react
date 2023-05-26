import { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";
import Clock from "./Clock";
import { StyledForm, Fieldset, Legend, Label, Input, Button, Paragraph } from "./styled";

const Form = ({ title }) => {
    const [amount, setNewAmount] = useState("");
    const [inputCurrency, setInputCurrency] = useState(currencies[0].name);
    const [outputCurrency, setOutputCurrency] = useState(currencies[0].name);
    const [result, setResult] = useState();

    const calculateResult = (amount, inputCurrency, outputCurrency) => {
        const inputRate = currencies.find(({ name }) => name === inputCurrency).value;
        const outputRate = currencies.find(({ name }) => name === outputCurrency).value;

        setResult({
            result: (amount * inputRate) / outputRate,
            outputCurrency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, inputCurrency, outputCurrency);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>{title}</Legend>
                <Clock />
                <Label>Jaką kwotę chcesz wymienić:
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
                    <Label>Wybierz walutę początkową:
                        <Input as="select"
                            value={inputCurrency}
                            onChange={({ target }) => setInputCurrency(target.value)}
                        >
                            {currencies.map(inputCurrency => (
                                <option
                                    key={inputCurrency.id}
                                    value={inputCurrency.name}
                                >
                                    {inputCurrency.name}
                                </option>
                            ))};
                        </Input>
                    </Label>
                </p>
                <p>
                    <Label>Wybierz walutę końcową:
                        <Input as="select"
                            value={outputCurrency}
                            onChange={({ target }) => setOutputCurrency(target.value)}
                        >
                            {currencies.map(outputCurrency => (
                                <option
                                    key={outputCurrency.id}
                                    value={outputCurrency.name}
                                >
                                    {outputCurrency.name}
                                </option>
                            ))};
                        </Input>
                    </Label>
                </p>
                <Button>Oblicz</Button>
                <Paragraph>Otrzymasz:</Paragraph>
                <Result
                    result={result}
                />
                <Paragraph smaller>
                    Kursy walut pochądzą ze strony nbp.pl z Tabeli nr 037/A/NBP/2023 z dnia 2023-02-22
                </Paragraph>
            </Fieldset>
        </StyledForm>
    );
};

export default Form;