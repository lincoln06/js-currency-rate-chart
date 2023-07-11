import makeChart from './components/chartMaker.js'
import makeOptions from './components/optionsMaker.js'
export default () => {
    const currencies = [
        "EUR",
        "USD",
        "CAD",
        "PLN",
        "GBP",
        "CHF",
        "SEK",
        "NOK"
    ];
    const referenceCurrencyEl = document.getElementById("reference-currency");
    const showButtonEl = document.getElementById("show-button");

    let baseCurrency = referenceCurrencyEl.value;

    referenceCurrencyEl.addEventListener("change", () => {
        baseCurrency = referenceCurrencyEl.value;
        if(baseCurrency !== undefined) {
            showButtonEl.disabled = false;
        }
        makeOptions(currencies);
    });

    currencies.forEach(currency => {
        referenceCurrencyEl.add(new Option(currency, undefined));
    });

    showButtonEl.addEventListener("click", (event) => {
        let timespan = document.getElementById("timespan").value;
        makeChart(currencies, baseCurrency, timespan);
        event.preventDefault();
    });
}