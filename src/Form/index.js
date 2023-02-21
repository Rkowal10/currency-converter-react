import "./style.css";

const Form = () => {
    return (
        <form className="form js-form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walutowy</legend>
                <label className="form__label">Jaką kwotę chcesz wymienić: <input className="form__input js-value" type="number"
                        step="any" min="0" required placeholder="Wpisz kwotę"/></label>
                <p>
                    <label className="form__label">Wybierz walutę:
                        <select name="currency1" className="form__input js-currency1">
                            <option value="PLN" selected>Polski złoty (PLN)</option>
                            <option value="USD">Dolar amerykański (USD)</option>
                            <option value="EUR">Euro (EUR)</option>
                            <option value="GBP">Funt szterling (GBP)</option>
                            <option value="CHF">Frank szwajcarski (CHF)</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label className="form__label">Wybierz walutę:
                        <select name="currency2" className="form__input js-currency2">
                            <option value="PLN">Polski złoty (PLN)</option>
                            <option value="USD" selected>Dolar amerykański (USD)</option>
                            <option value="EUR">Euro (EUR)</option>
                            <option value="GBP">Funt szterling (GBP)</option>
                            <option value="CHF">Frank szwajcarski (CHF)</option>
                        </select>
                    </label>
                </p>
                <button className="form__button">Oblicz</button>
                <button type="reset" className="form__button">Reset</button>
                <p className="form__paragraph">Otrzymasz: <strong className="js-result">N/A</strong><span
                        className="js-name"></span></p>
                <p className="form__paragraph form__paragraph--smaller">
                    Kursy walut pochądzą ze strony nbp.pl z Tabeli nr 194/A/NBP/2022 z dnia 2022-10-06
                </p>
            </fieldset>
        </form>
    );
};

export default Form;