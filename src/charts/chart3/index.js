import React, { useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { api } from "../../services/api";

const DashboardChart3 = () => {
	let resolvidosXnaoresolvidos = new Array(2).fill(0);
// 0: total de serviços Resolvidos, 1: total de serviços Não Resolvidos //

	useEffect(() => {
		async function getProblems() {
			try {	// Conservação Urbana //
				let { data } = await api.get('/get_all_street_lighting');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
		/*	try {
				data = await api.get('/paviment');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/facilities_inspection');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/monument');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/public_roads');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Conservação Rural/Áreas Verdes //
				let { data } = await api.get('/rurais');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/parques');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/praca');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Remoção de Detritos //
				let { data } = await api.get('/removetrash');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/removaldeadanimals');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Vigilância Sanitária //
				let { data } = await api.get('/limpeza_terreno');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/limpeza_piscinas');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Controle de Pragas //
				let { data } = await api.get('/radar_dengue');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/foco_escorpiao');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/leishmaniose');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/insetos_roedores_caramujos');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Animais Domésticos //
				let { data } = await api.get('/animais_abandonados');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/animais_sinantropicos');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/animais_perdidos');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/adocao_animais');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/maus_tratos_animais'); // ou animalviolence //
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Meio Ambiente //
				let { data } = await api.get('/public_area_adoption');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Fauna e Flora //
				let { data } = await api.get('/wildanimals');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/maus_tratos_animais');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Famílias Carentes //
				let { data } = await api.get('/solidarydisposal');
				resolvidosXnaoresolvidos[0] = resolvidosXnaoresolvidos[0] + data.filter((service) => service.isResolved === true).length;
				resolvidosXnaoresolvidos[1] = resolvidosXnaoresolvidos[1] + data.filter((service) => service.isResolved === false).length;
				data = null;
			}
			catch(e) { console.log(e); }
	*/	}
		getProblems();
	}, []);
	
//	let totalResolvidos = 135;
//	let totalNaoResolvidos = 102;
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
            		center = {[54, 50]}
            	/*	data = {[
                		{title: "Total Resolvidos: " + totalResolvidos, value: totalResolvidos, color: "#3282b8"},
                		{title: "Total Solicitados: " + totalNaoResolvidos, value: totalNaoResolvidos, color: "#133d59"},
            		]}	*/
					data = {[
                		{title: "Total Resolvidos: " + resolvidosXnaoresolvidos[0], value: resolvidosXnaoresolvidos[0], color: "#3282b8"},
                		{title: "Total Solicitados: " + resolvidosXnaoresolvidos[1], value: resolvidosXnaoresolvidos[1], color: "#133d59"},
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

export default DashboardChart3;
