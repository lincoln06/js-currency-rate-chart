export default async (currencies, baseCurrency) => {
    const apiUrl = `https://api.exchangerate.host/latest?base=${baseCurrency}`;
    let selectedCheckboxes = document.querySelectorAll('input.currency-checkbox:checked');
    let selectedCurrencies = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);

    try {
        let response = await fetch(apiUrl);
        if (response.ok) {
            let json = await response.json();
            let data = Object.fromEntries(Object.entries(json.rates)
                .filter(([code]) => selectedCurrencies.includes(code)));
            console.log(data);
            return data;
        }
    }
    catch(error) {
        console.log(error);
    }
    return null;
}