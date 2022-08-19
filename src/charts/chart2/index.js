import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const DashboardChart2 = () => {
	const totalSolicitados = new Array (24, 17, 8, 17, 13, 24, 6, 10, 5, 7);
	let totalTotal = 135;
	return (
		<>
			<div
				style={{
					width: "70%",
					marginTop: "7.5vh",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<h3 style={{ marginTop: "0.5vh", marginBottom: "0vh", marginLeft: "-2.75vw" }}>
					{" "}
					Problemas já Resolvidos: {" "}
				</h3>
				<span style={{ marginBottom: "3vh", marginLeft: "-2.75vw" }}> {totalTotal} </span>
				<PieChart
            		center = {[54, 50]}
            		data = {[
                		{title: "Conservação Urbana: " + totalSolicitados[0], value: totalSolicitados[0], color: "#b83333"},
                		{title: "Conservação Rural/Áreas Verdes: " + totalSolicitados[1], value: totalSolicitados[1], color: "#b83386"},
						{title: "Remoção de Detritos: " + totalSolicitados[2], value: totalSolicitados[2], color: "#7d33b8"},
						{title: "Vigilância Sanitária: " + totalSolicitados[3], value: totalSolicitados[3], color: "#2a1b69"},
						{title: "Controle de Pragas: " + totalSolicitados[4], value: totalSolicitados[4], color: "#3344b8"},
                		{title: "Animais Domésticos: " + totalSolicitados[5], value: totalSolicitados[5], color: "#3282b8"},
						{title: "Meio Ambiente: " + totalSolicitados[6], value: totalSolicitados[6], color: "#33b87b"},
                		{title: "Fauna e Flora: " + totalSolicitados[7], value: totalSolicitados[7], color: "#33b834"},
						{title: "Assistência Social: " + totalSolicitados[8], value: totalSolicitados[8], color: "#a8b833"},
                		{title: "Famílias Carentes: " + totalSolicitados[9], value: totalSolicitados[9], color: "#b86333"}
            		]}
            		labelPosition = {50}
            		lengthAngle = {360}
            		lineWidth = {30}
            		radius = {50}
            		viewBoxSize = {[125, 125]}
        		/>
			</div>
		</>
	);
};

export default DashboardChart2;
