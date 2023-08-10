import { useEffect, useState } from "react";
import axios from "axios";

const requestUrl = axios.get("https://api.exchangerate.host/latest?base=PLN&symbols=PLN,USD,EUR,GBP,CHF");

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const axiosRates = async () => {
            try {
                const response = await requestUrl;
                const {rates, date} = response.data;

                setRatesData({
                    status: "success",
                    rates,
                    date,
                });
            } catch {
                setRatesData({
                    status: "error",
                });
            }
        };

        setTimeout(axiosRates, 3000);
    }, []);

    return ratesData;
};