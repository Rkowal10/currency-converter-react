import { useState } from "react";
import "./style.css";
import { currencies } from "../currencies";

const Form = ({ title }) => {
    const [amount, setNewAmount] = useState("");
    const [currency, setNewCurrency] = useState("");

    const onSelectChange = ({ target }) => setNewCurrency(target.value);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (amount === "") {
            return;
        }
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
                    <label className="form__label">Wybierz walutę:
                        <select
                            value={currency}
                            className="form__input"
                            onChange={onSelectChange}
                        >
                            {currencies.map(currency => (<option key={currency.id}>{currency.name}
                            </option>
                            ))};
                        </select>
                    </label>
                </p>
                <button className="form__button">Oblicz</button>
                <p className="form__paragraph">Otrzymasz:</p>
                <p className="form__paragraph form__paragraph--smaller">
                    Kursy walut pochądzą ze strony nbp.pl z Tabeli nr 037/A/NBP/2023 z dnia 2023-02-22
                </p>
            </fieldset>
        </form>
    );
};

export default Form;