import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const axiosRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                const {rates, date} = response.data;

                setRatesData({
                    state: "success",
                    rates,
                    date,
                });
            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(axiosRates, 2000);
    }, []);

    return ratesData;
};