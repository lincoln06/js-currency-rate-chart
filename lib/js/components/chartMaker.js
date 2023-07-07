import Chart from "chart.js/auto";
import resolveData from "./dataResolver.js";
import makeRandomColor from "./colorMaker.js"

export default async (currencies, baseCurrency, timespan) => {
    let date = new Date();
    const dateTo = date.toISOString().slice(0,10);
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - timespan);
    const dateFrom = date.toISOString().slice(0,10);
    const dataToShow = await resolveData(currencies, baseCurrency, dateFrom, dateTo);
    const chartEl = document.getElementById("chart");
    const chartStatus = Chart.getChart("chart");

    if(chartStatus !== undefined) {
        chartStatus.destroy();
    }

    const chartData = {
        labels: Object.keys(dataToShow),
        datasets: []
    };

    Object.keys(dataToShow[Object.keys(dataToShow)[0]]).forEach((currency, index) => {
        const dataset = {
            label: currency,
            data: Object.values(dataToShow).map(dateRates => dateRates[currency]),
            borderWidth: 2,
            borderColor: makeRandomColor(),
        };
        chartData.datasets.push(dataset);
    });

    new Chart(chartEl, {
        type: 'line',
        data: chartData,
        options: {
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