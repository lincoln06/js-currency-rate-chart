export default (currencies, baseCurrency) => {

    const currenciesEl = document.getElementById("currencies");
    const referenceCurrencyEl = document.getElementById("reference-currency");
    createCheckboxes();
    referenceCurrencyEl.addEventListener("change", createCheckboxes);

    function createCheckboxes() {
        let outputCode='';
        currencies.forEach(currency => {
            if(currency!==referenceCurrencyEl.value) {
                outputCode += `<input type="checkbox" id="${currency}" class="currency-checkbox" value="${currency}">
                              <label for="${currency}">${currency}</label><br>`;
            }
            currenciesEl.innerHTML=outputCode;
        });
    }
}