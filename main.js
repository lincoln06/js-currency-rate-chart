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
        <select name="timespan" id="timespan">
            <option value="5">Last week</option>
            <option value="12">Last 14 days</option>
            <option value="${new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() - 2}">Last 30 days</option>
        </select>
        
        <div id="currencies">
        </div>
        <button id="show-button" disabled>Show</button>
     </form>
  </main>
`

initChart();
