import Chart from "chart.js/auto";
import resolveData from "./dataResolver.js";

export default async (currencies, baseCurrency) => {

    const dataToShow = await resolveData(currencies, baseCurrency);
    const chartEl = document.getElementById("chart");
    const chartStatus = Chart.getChart("chart"); // <canvas> id

    if (chartStatus !== undefined) {
        chartStatus.destroy();
    }
    new Chart(
        chartEl,
        {
            type: 'bar',
            data: {
                labels: Object.keys(dataToShow),
                datasets: [
                    {
                        label: baseCurrency,
                        data: dataToShow
                    }]
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
}