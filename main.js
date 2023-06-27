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
        <div id="currencies">
        </div>
        <button id="show-button">Show</button>
     </form>
  </main>
`

initChart();
