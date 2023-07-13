import Chart from "chart.js/auto";
import resolveData from "./dataResolver.js";
import makeRandomColor from "./colorMaker.js"
export default async (currencies, baseCurrency, timespan) => {

    let date = new Date();
    const dateTo = date.toISOString().slice(0,10);
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - timespan);
    const dateFrom = date.toISOString().slice(0,10);
    const chartEl = document.getElementById("chart");
    const chartStatus = Chart.getChart("chart");
    const resolvedData = await resolveData(currencies, baseCurrency, dateFrom, dateTo);
    if(!resolvedData) return null;

    if(chartStatus !== undefined) {
        chartStatus.destroy();
    }

    const chartData = {
        labels: Object.keys(resolvedData),
        datasets: []
    };

    Object.keys(resolvedData[Object.keys(resolvedData)[0]]).forEach((currency) => {
        const dataset = {
            label: currency,
            data: Object.values(resolvedData).map(dateRates => dateRates[currency]),
            borderWidth: 2,
            borderColor: makeRandomColor(),
            pointRadius: 1,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 3
        };
        chartData.datasets.push(dataset);
    });

    new Chart(chartEl, {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: {
                        maxRotation: 90,
                        minRotation: 90
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `${baseCurrency}`,
                    font: {
                        size: 20
                    }
                }
            },
            datasets: {
                beginAtZero: true
            }
        }
    });
}