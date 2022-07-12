import React from "react";
import ReactApexChart from "react-apexcharts";

const DashboardChart4 = () => {  
    const state = {
        series: [
        {
            name: "visitantes", data: [124, 194, 227, 137, 237, 173, 133]
        },
        {
            name: "usuários cadastrados", data: [90, 142, 119, 68, 170, 70, 149]
        }
        ],

        options: {
          chart: {
            height: 350,
            type: 'line',
            dropShadow: { enabled: true, color: '#000', top: 18, left: 7, blur: 10, opacity: 0.2 },
            toolbar: { show: false }
          },
          colors: ['#3282b8', '#133d59'],
          dataLabels: {
              enabled: true,
          },
          stroke: {
              curve: 'smooth'
          },
          title: {
              text: 'Acessos nos últimos 7 dias', align: 'left'
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
              categories: ['-7 dias', '-6 dias', '-5 dias', '-4 dias', '-3 dias', 'anteontem', 'ontem'],
              title: { text: 'Dias' }
          },
          yaxis: {
              title: { text: 'Acessos' },
              min: 50,
              max: 250
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
		<>
			<ReactApexChart options = {state.options} series = {state.series} type = "line" height = {380} width = {760} />
		</>
	);
};

export default DashboardChart4;