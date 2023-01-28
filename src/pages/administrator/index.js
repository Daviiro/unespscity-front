import React from "react";
import { Link } from "react-router-dom";
import {
	ContainerBase,
	Content,
	GrayLine,
	ChartContainer,
	ContainerColumn,
	ContainerRow,
} from "./styles";

import AdminHeader from "../../components/header/admin";
import { StyledHr } from "../../components/styled-components/StyledHr";
import DashboardButton from "./index-button";
import DashboardChart1 from "../../charts/chart1";
import DashboardChart2 from "../../charts/chart2";
import DashboardChart3 from "../../charts/chart3";
import ExtraDashboard from "./dashboard-maps/extra-charts/extra-charts";
import DashboardChart4 from "../../charts/chart4";
import { MidContentContainer } from "../../components/styled-components/PageStyles";
import DengueDashboard from "./dashboard-maps/dengue";
import FairsDashboard from "./dashboard-maps/feiras";
import TreesDashboard from "./dashboard-maps/trees";
import LeishmanioseDashboard from "./dashboard-maps/leishmaniose";
import UsefulLocationsDashboard from "./dashboard-maps/useful_locations";
import Footer from "../../components/footer";
import { Card } from "../../components/Card/Card";
import ReactApexChart from "react-apexcharts";

const Dashboard = () => {
	const state = {
		series: [
			{
				name: "Novas solicitações", data: [2, 5, 4, 6, 7, 6, 4]
			},
			{
				name: "Solicitações resolvidas", data: [1, 3, 2, 5, 2, 4, 3]
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
				text: 'Solicitações resolvidas e novas solicitações', align: 'left'
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
				title: { text: 'Solicitações' },
				min: 0,
				max: 10
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

	const options = {
		series: [{
			data: [14, 13, 11, 10, 8, 7, 5]
		}],
		title: {
			text: 'Serviços mais solicitados', align: 'left'
		},
		chart: {
			type: 'bar',
			height: 350
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
				horizontal: true,
			}
		},
		dataLabels: {
			enabled: false
		},
		xaxis: {
			categories: ['Iluminação Pública', 'Praças', 'Asfaltos', 'Animais perdidos', 'Acidentes', 'Pavimentação', 'Monumentos'],
		}
	};
	return (
		<ContainerBase>
			<AdminHeader />
			<Content>
				<div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginBottom: '40px' }}>
					<Card title="Total de usuarios" value={"25"} />
					<Card title="Total de serviços solicitados" value={"70"} />
					<Card title="Total de serviços solucionados" value={"46"} />
					<Card title="% dos serviços solucionados" value={'65,71%'} />
				</div>
				<div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
					<div style={{ width: '45%', paddingLeft: '30px' }}>
						<ReactApexChart options={state.options} series={state.series} type="line" height={380} width='95%' />
					</div>
					<div style={{ width: '45%'}}>
						<ReactApexChart options={options} series={options.series} type="bar" height={380} width='95%' />
					</div>
				</div>
				<ContainerColumn>
					<StyledHr style={{ width: "95%", marginLeft: "-2vw" }} />
					<DashboardChart1 />
					<Link to = "/microsservicos" style={{ textDecoration: "none", color: "#1b262c" }}>
						<DashboardButton description="Acessar Microsserviços"/>
					</Link>
					<GrayLine />
					<ChartContainer style = {{ marginBottom: "-12vh" }}>
						<ContainerRow>
							<DashboardChart2 />
							<DashboardChart3 />
						</ContainerRow>
					</ChartContainer>
					<ExtraDashboard />
					<ChartContainer style={{ paddingTop: "2vh", marginTop: "0", marginBottom: "-100vh" }}>
						<DashboardChart4 />
					</ChartContainer>
				</ContainerColumn>
			</Content>
			<MidContentContainer style = {{ marginTop: "115vh" }}>
				<GrayLine style={{ marginBottom: "-8.5vh" }} />
				<TreesDashboard />
				<GrayLine style={{ marginBottom: "-8.5vh" }} />
				<DengueDashboard />
				<GrayLine style={{ marginBottom: "-8.5vh" }} />
				<FairsDashboard />
				<GrayLine style={{ marginBottom: "-8.5vh" }} />
				<LeishmanioseDashboard />
				<GrayLine style={{ marginBottom: "-8.5vh" }} />
				<UsefulLocationsDashboard />
			</MidContentContainer>
			<GrayLine style={{ width: "100%" }} />
			<Footer />
		</ContainerBase>
	);
};

export default Dashboard;
