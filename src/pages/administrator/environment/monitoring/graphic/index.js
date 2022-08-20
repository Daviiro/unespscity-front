import Chart from "react-apexcharts";

const Graphic = (props) => {
    const Average = props.data; 
    const columnText = props.columnName;
    const minimum = props.min;
    const maximum = props.max;

    const state = {
        series: [
            {
                name: `${props.title}`, data: Average
            }
        ],

        options: {
            chart: {
                height: 350,
                type: 'line',
                dropShadow: { enabled: true, color: '#000', top: 18, left: 7, blur: 10, opacity: 0.2 },
                toolbar: { show: false }
            },
            colors: ['#3282b8', '#133d59', '#b86832', '#324354'],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: `${props.title}`, align: 'center'
            },
            grid: {
                borderColor: '#e7e7e7',
                row: {
                    colors: ['transparent', 'transparent'], opacity: 0.5
                },
            },
            markers: {
                size: 1
            },
            xaxis: {
                categories: ['-18 segundos', '-15 segundos', '-12 segundos', '-09 segundos', '-06 segundos', '-03 segundos', 'agora'],
                title: { text: 'Segundos' }
            },
            yaxis: {
                title: { text: columnText },
                min: minimum,
                max: maximum
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            }
        },
    }

    return (
        <Chart
            options={state.options}
            series={state.series}
            type="line"
            height={380}
            width={760}
        />
    )
}

export default Graphic;