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
import DashboardChart4 from "../../charts/chart4";
import { MidContentContainer } from "../../components/styled-components/PageStyles";
import DengueDashboard from "./dashboard-maps/dengue";
import FairsDashboard from "./dashboard-maps/feiras";
import TreesDashboard from "./dashboard-maps/trees";
import LeishmanioseDashboard from "./dashboard-maps/leishmaniose";
import UsefulLocationsDashboard from "./dashboard-maps/useful_locations";
import Footer from "../../components/footer";

const Dashboard = () => {
	return (
		<ContainerBase>
			<AdminHeader />
			<Content>
				<ContainerColumn>
					<h1> Dashboard </h1>
					<StyledHr style={{ width: "95%", marginLeft: "-2vw" }} />
					<Link to = "/admin_details" style={{ textDecoration: "none", color: "#1b262c" }}>
						<DashboardChart1 />
					</Link>
					<Link to = "/microsservicos" style={{ textDecoration: "none", color: "#1b262c" }}>
						<DashboardButton description="Acessar Microsserviços"/>
					</Link>
					<GrayLine />
					<ChartContainer>
						<ContainerRow>
							<DashboardChart2 />
							<DashboardChart3 />
						</ContainerRow>
					</ChartContainer>
					<ChartContainer style={{ paddingTop: "2vh" }}>
						<DashboardChart4 />
					</ChartContainer>
				</ContainerColumn>
			</Content>
			<MidContentContainer>
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
