import React from "react";
import {
	ContainerBase,
	Content,
	ProblemsButtom,
	WrapContainer,
	GrayLine,
	ContainerColumn,
	ContainerRow,
} from "./styles";
import Header from "../../components/header";
import { StyledHr } from "../../components/styled-components/StyledHr";
import DashboardChart1 from "../../charts/chart1";
import DashboardChart2 from "../../charts/chart2";
import DashboardChart3 from "../../charts/chart3";
import Footer from "../../components/footer";

const Dashboard = () => {
	return (
		<ContainerBase>
			<Header />
			<Content>
				<ContainerColumn>
					<h1> Dashboard </h1>
					<StyledHr style={{ width: "95%", marginLeft: "-2vw" }} />
					<ProblemsButtom>
						{" "}
						<h3> Visualizar novos problemas </h3>{" "}
					</ProblemsButtom>
					<ContainerRow>
						<DashboardChart1 />
						<DashboardChart2 style />
					</ContainerRow>
					<GrayLine />
				</ContainerColumn>
				<DashboardChart3 />
			</Content>
			<Footer />
		</ContainerBase>
	);
};

export default Dashboard;
