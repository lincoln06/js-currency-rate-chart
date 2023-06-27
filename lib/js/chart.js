import makeChart from './components/chartMaker.js'
import resolveData from './components/dataResolver.js'
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
    const showButtonEl = document.getElementById("show-button");
    currencies.forEach(currency => {
        referenceCurrencyEl.add(new Option(currency, undefined));
    });
    const baseCurrency = referenceCurrencyEl.value;
    // const baseCurrency = referenceCurrencyEl.value;
    makeOptions(currencies, baseCurrency);

    showButtonEl.addEventListener("click", (event) => {
        makeChart(currencies, baseCurrency);
        event.preventDefault();
    })
}