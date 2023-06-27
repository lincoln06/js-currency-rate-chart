export default async (currencies, baseCurrency) => {
    const apiUrl = `https://api.exchangerate.host/latest?base=${baseCurrency}`;
    const selectedCheckboxes = document.querySelectorAll('input.currency-checkbox:checked');
    const selectedCurrencies = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);

    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const json = await response.json();
            const data = Object.fromEntries(Object.entries(json.rates)
                .filter(([code]) => selectedCurrencies.includes(code)));
            return data;
        }
    }
    catch(error) {
        console.log(error);
    }

    return null;
}