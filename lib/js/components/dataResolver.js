export default async (currencies, baseCurrency, dateFrom, dateTo) => {
    const selectedCheckboxes = document.querySelectorAll('input.currency-checkbox:checked');
    const selectedCurrencies = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);
    const currenciesToFetch = selectedCurrencies.toString();

    if(currenciesToFetch === '') {
        alert("You need to pick at least one currency from the list");
        return null;
    }

    const apiUrl = `https://api.exchangerate.host/timeseries?start_date=${dateFrom}&end_date=${dateTo}&base=${baseCurrency}&symbols=${currenciesToFetch},&source=ecb`;

    try {
        let data = await fetch(apiUrl)
            .then(response => response.json());
        return data.rates;
    } catch (error) {
        console.log(error);
        return null;
    }
}