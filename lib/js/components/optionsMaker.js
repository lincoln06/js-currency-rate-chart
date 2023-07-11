export default (currencies) => {

    const currenciesEl = document.getElementById("currencies");
    const referenceCurrencyEl = document.getElementById("reference-currency");
    createCheckboxes();
    referenceCurrencyEl.addEventListener("change", createCheckboxes);

    function createCheckboxes() {
        let outputCode='';
        currencies.forEach(currency => {
            if(currency!==referenceCurrencyEl.value) {
                outputCode +=
                    `<label>
                    <input type="checkbox" id="${currency}" class="currency-checkbox" value="${currency}" />
                    ${currency}
                    </label><br>`;
            }
            currenciesEl.innerHTML=outputCode;
        });
    }
}