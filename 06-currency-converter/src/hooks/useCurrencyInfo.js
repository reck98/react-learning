import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;
        let isCancelled = false;

        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                if (!isCancelled) {
                    setData(res?.[currency] || {});
                }
            })
            .catch(() => {
                if (!isCancelled) {
                    setData({});
                }
            });

        return () => {
            isCancelled = true;
        };
    }, [currency]);

    return data;
}
