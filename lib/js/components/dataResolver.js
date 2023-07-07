export default async (currencies, baseCurrency, dateFrom, dateTo) => {

    const apiUrl = `https://api.exchangerate.host/timeseries?start_date=${dateFrom}&end_date=${dateTo}?base=$${baseCurrency}`;
    const selectedCheckboxes = document.querySelectorAll('input.currency-checkbox:checked');
    const selectedCurrencies = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);

    try {
        let dataToReturn = await fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const filteredData = Object.entries(data.rates).reduce((filteredData, [date, rates]) => {
                    filteredData[date] = Object.fromEntries(
                        Object.entries(rates).filter(([currency]) => selectedCurrencies.includes(currency))
                    );
                    return filteredData;
                }, {});
                return filteredData;
            });

        console.log(dataToReturn);
        return dataToReturn;
    } catch (error) {
        console.error(error);
    }
}