import './style.css'
import './lib/scss/main.scss'
import initChart from './lib/js/chart.js'

document.querySelector('#app').innerHTML = `
  <main>
     <canvas id="chart">
     </canvas>
     <form id="options-form">
     <label for="reference-currency">Reference currency</label>
        <select name="reference-currency" id="reference-currency">
            <option value="" disabled selected>Select...</option>
        </select>
        <label for="timespan">Timespan</label>
        <select name="timespan" id="timespan">
            <option value="5">Last week</option>
            <option value="12">Last 14 days</option>
            <option value="28">Last 30 days</option>
            <option value="363">Last year</option>
        </select>
        <label for="currencies">Currencies to show</label>
        <div id="currencies">
        </div>
        <button id="show-button" disabled>Show</button>
     </form>
  </main>
  <footer>
    <p>currency-rate-chart | Author: Maciej Janta-Lipiński INF II NS</p>
  </footer>
`

initChart();
