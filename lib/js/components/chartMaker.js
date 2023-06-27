import Chart from "chart.js/auto";
import resolveData from "./dataResolver.js";

export default async (currencies, baseCurrency) => {
    const data = resolveData(currencies, baseCurrency);
    console.log(data);
    const dataToshow = await data;
    
    console.log(dataToshow);
    const chartEl = document.getElementById("chart");
    if(dataToshow !== undefined) {
        let chartStatus = Chart.getChart("chart"); // <canvas> id
        if (chartStatus !== undefined) {
            chartStatus.destroy();
        }
    new Chart(
        chartEl,
        {
            type: 'bar',
            data: {
                labels: Object.keys(dataToshow),
                datasets: [
                    {
                        label: baseCurrency,
                        data: dataToshow
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            maxRotation: 90,
                            minRotation: 90
                        }
                    }
                }
            }
        })
    } else {
        chartEl.innerText="Nothing to show";
    }

}