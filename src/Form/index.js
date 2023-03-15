import { useState } from "react";
import "./style.css";
import { currencies } from "../currencies";
import Result from "../Result";

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
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">{title}</legend>
                <label className="form__label">Jaką kwotę chcesz wymienić:
                    <input
                        className="form__input"
                        type="number"
                        value={amount}
                        onChange={({ target }) => setNewAmount(target.value)}
                        step="any"
                        min="0"
                        required
                        autoFocus={true}
                        placeholder="Wpisz kwotę"
                    />
                </label>
                <p>
                    <label className="form__label">Wybierz walutę początkową:
                        <select
                            value={inputCurrency}
                            className="form__input"
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
                        </select>
                    </label>
                </p>
                <p>
                    <label className="form__label">Wybierz walutę końcową:
                        <select
                            value={outputCurrency}
                            className="form__input"
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
                        </select>
                    </label>
                </p>
                <button className="form__button">Oblicz</button>
                <p className="form__paragraph">Otrzymasz:</p>
                <Result
                    result={result}
                />
                <p className="form__paragraph form__paragraph--smaller">
                    Kursy walut pochądzą ze strony nbp.pl z Tabeli nr 037/A/NBP/2023 z dnia 2023-02-22
                </p>
            </fieldset>
        </form>
    );
};

export default Form;