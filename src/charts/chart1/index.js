import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const DashboardChart1 = () => {
	const totalSolicitados = new Array (9, 33, 35, 11, 4, 25, 17, 14, 7, 10, 12, 8, 30, 36, 16, 38, 6);
	let totalTotal = 311;
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
				<h3 style={{ marginTop: "0vh", marginBottom: "0vh" }}>
					{" "}
					Problemas Resolvidos: {" "}
				</h3>
				<span style={{ marginBottom: "4vh" }}> {totalTotal} </span>
				<PieChart
            		center = {[75, 50]}
            		data = {[
                		{title: "Conservação Urbana: " + totalSolicitados[0], value: totalSolicitados[0], color: "#b83333"},
                		{title: "Conservação Rural/Áreas Verdes: " + totalSolicitados[1], value: totalSolicitados[1], color: "#691b1b"},
						{title: "Remoção de Detritos: " + totalSolicitados[2], value: totalSolicitados[2], color: "#b83386"},
						{title: "Vigilância Sanitária: " + totalSolicitados[3], value: totalSolicitados[3], color: "#691b65"},
						{title: "Controle de Pragas: " + totalSolicitados[4], value: totalSolicitados[4], color: "#7d33b8"},
                		{title: "Animais Domésticos: " + totalSolicitados[5], value: totalSolicitados[5], color: "#2a1b69"},
						{title: "Meio Ambiente: " + totalSolicitados[6], value: totalSolicitados[6], color: "#3344b8"},
                		{title: "Fauna e Flora: " + totalSolicitados[7], value: totalSolicitados[7], color: "#1b5469"},
						{title: "Assistência Social: " + totalSolicitados[8], value: totalSolicitados[8], color: "#3282b8"},
                		{title: "Famílias Carentes: " + totalSolicitados[9], value: totalSolicitados[9], color: "#1b693e"},
						{title: "Serviços Sociais: " + totalSolicitados[10], value: totalSolicitados[10], color: "#33b87b"},
                		{title: "Segurança e Defesa Civil: " + totalSolicitados[11], value: totalSolicitados[11], color: "#2b691b"},
						{title: "Botão do Pânico: " + totalSolicitados[12], value: totalSolicitados[12], color: "#33b834"},
                		{title: "Administração Pública: " + totalSolicitados[13], value: totalSolicitados[13], color: "#69601b"},
						{title: "Notificação e Comunicação: " + totalSolicitados[14], value: totalSolicitados[14], color: "#a8b833"},
                		{title: "Sensoriamento Móvel Participativo: " + totalSolicitados[15], value: totalSolicitados[15], color: "#693a1b"},
						{title: "Assossiação Comercial: " + totalSolicitados[16], value: totalSolicitados[16], color: "#b86333"}
            		]}
            		labelPosition = {50}
            		lengthAngle = {360}
            		lineWidth = {30}
            		radius = {50}
            		viewBoxSize = {[150, 150]}
        		/>
			</div>
		</>
	);
};

export default DashboardChart1;
