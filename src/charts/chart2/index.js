import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const DashboardChart2 = () => {
	let totalResolvidos = 311;
	let totalSolicitados = 406;
	return (
		<>
			<div
				style={{
					width: "70%",
					marginTop: "7.5vh",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginLeft: "-12vw"
				}}
			>
				<h3 style={{ marginTop: "0.5vh", marginBottom: "0vh", marginLeft: "-2.75vw" }}>
					{" "}
					Índice de Eficiência: {" "}
				</h3>
				<span style={{ marginBottom: "3vh", marginLeft: "-2.75vw" }}> Serviços solicitados/resolvidos </span>
				<PieChart
            		center = {[74, 50]}
            		data = {[
                		{title: "Total Resolvidos: " + totalResolvidos, value: totalResolvidos, color: "#3282b8"},
                		{title: "Total Solicitados: " + totalSolicitados, value: totalSolicitados, color: "#133d59"},
            		]}
            		labelPosition = {50}
            		lengthAngle = {360}
            		lineWidth = {30}
            		radius = {50}
            		viewBoxSize = {[160, 160]}
        		/>
			</div>
		</>
	);
};

export default DashboardChart2;
