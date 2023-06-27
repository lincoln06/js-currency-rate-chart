import makeChart from './components/chartMaker.js'
import makeOptions from './components/optionsMaker.js'
export default () => {
    const currencies = [
        "EUR",
        "USD",
        "CAD",
        "PLN",
        "GBP",
        "RMB"
    ];
    const referenceCurrencyEl = document.getElementById("reference-currency");
    const showButtonEl = document.getElementById("show-button")
    let baseCurrency = referenceCurrencyEl.value;

    referenceCurrencyEl.addEventListener("change", () => {
        baseCurrency = referenceCurrencyEl.value;
        makeOptions(currencies, baseCurrency);
    })
    currencies.forEach(currency => {
        referenceCurrencyEl.add(new Option(currency, undefined));
    });
    makeOptions(currencies, baseCurrency);

    showButtonEl.addEventListener("click", (event) => {
        makeChart(currencies, baseCurrency);
        event.preventDefault();
    })
}