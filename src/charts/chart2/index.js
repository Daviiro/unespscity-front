import React, { useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { api } from "../../services/api";

const DashboardChart2 = () => {
	let contagemConservacaoUrbana = new Array(5).fill(0);
// 0: Iluminação Pública, 1: Pavimentação, 2: Fiscalização de Instalações, 3: Monumentos e Chafarizes, 4: Vias Públicas //	

	let contagemConservacaoRural = new Array(3).fill(0);
// 0: Pontes em Estradas Rurais, 2: Parques, 3: Praças //

	let contagemRemocaoDetritos = new Array(2).fill(0);
// 0: Resíduos Sólidos, 1: Animais Mortos //

	let contagemVigilanciaSanitaria = new Array(2).fill(0);
// 0: Limpeza de Terreno, 1: Limpeza de Piscinas //

	let contagemControlePragas = new Array(4).fill(0);
// 0: Radar da Dengue, 1: Foco de Escorpião, 2: Leishmaniose, 3: Insetos/Roedores/Caramujos //

	let contagemAnimaisDomesticos = new Array(5).fill(0);
// 0: Animais Abandonados, 1: Animais Sinantrópicos, 2: Animais Perdidos, 3: Adoção, 4: Maus-tratos //

	let contagemMeioAmbiente = 0;
// 0: Adoção de Áreas //

	let contagemFaunaFlora = new Array(2).fill(0);
// 0: Fiscalização de Animais Silvestres, 1: Maus-tratos //

	let contagemAssistenciaSocial = 0;
// 0: Cadastro de Falecidos e Túmulos //

	let contagemFamiliasCarentes = 0;
// 0: Descarte Solidário //

	let contagemTotal = new Array(10).fill(0);
// 0: Conservação Urbana, 1: Conservação Rural/Áreas Verdes, 2: Remoção de Detritos, 3: Vigilância Sanitária, 4: Controle de Pragas //
// 5: Animais Domésticos, 6: Meio Ambiente, 7: Fauna e Flora, 8: Assistência Social, 9: Famílias Carentes //

	useEffect(() => {
		async function getProblems() {
			try {	// Conservação Urbana //
				let { data } = await api.get('/get_all_street_lighting');
				contagemConservacaoUrbana[0] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
		/*	try {
				data = await api.get('/paviment');
				contagemConservacaoUrbana[1] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/facilities_inspection');
				contagemConservacaoUrbana[2] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/monument');
				contagemConservacaoUrbana[3] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/public_roads');
				contagemConservacaoUrbana[4] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }	*/
			contagemTotal[0] = contagemConservacaoUrbana[0] + contagemConservacaoUrbana[1] + contagemConservacaoUrbana[2] + 
			contagemConservacaoUrbana[3] + contagemConservacaoUrbana[4];	/*


			try {	// Conservação Rural/Áreas Verdes //
				let { data } = await api.get('/rurais');
				contagemConservacaoRural[0] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/parques');
				contagemConservacaoRural[1] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/praca');
				contagemConservacaoRural[2] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			contagemTotal[1] = contagemConservacaoRural[0] + contagemConservacaoRural[1] + contagemConservacaoRural[2];


			try {	// Remoção de Detritos //
				let { data } = await api.get('/removetrash');
				contagemRemocaoDetritos[0] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/removaldeadanimals');
				contagemRemocaoDetritos[1] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			contagemTotal[2] = contagemRemocaoDetritos[0] + contagemRemocaoDetritos[1];


			try {	// Vigilância Sanitária //
				let { data } = await api.get('/limpeza_terreno');
				contagemVigilanciaSanitaria[0] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/limpeza_piscinas');
				contagemVigilanciaSanitaria[1] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			contagemTotal[3] = contagemVigilanciaSanitaria[0] + contagemVigilanciaSanitaria[1];


			try {	// Controle de Pragas //
				let { data } = await api.get('/radar_dengue');
				contagemControlePragas[0] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/foco_escorpiao');
				contagemControlePragas[1] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/leishmaniose');
				contagemControlePragas[2] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/insetos_roedores_caramujos');
				contagemControlePragas[3] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			contagemTotal[4] = contagemControlePragas[0] + contagemControlePragas[1] + contagemControlePragas[2] + 
			contagemControlePragas[3];


			try {	// Animais Domésticos //
				let { data } = await api.get('/animais_abandonados');
				contagemAnimaisDomesticos[0] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/animais_sinantropicos');
				contagemAnimaisDomesticos[1] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/animais_perdidos');
				contagemAnimaisDomesticos[2] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/adocao_animais');
				contagemAnimaisDomesticos[3] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/maus_tratos_animais'); // ou animalviolence //
				contagemAnimaisDomesticos[4] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			contagemTotal[5] = contagemAnimaisDomesticos[0] + contagemAnimaisDomesticos[1] + contagemAnimaisDomesticos[2] + 
			contagemAnimaisDomesticos[3] + contagemAnimaisDomesticos[4];


			try {	// Meio Ambiente //
				let { data } = await api.get('/public_area_adoption');
				contagemMeioAmbiente = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			contagemTotal[6] = contagemMeioAmbiente;


			try {	// Fauna e Flora //
				let { data } = await api.get('/wildanimals');
				contagemFaunaFlora[0] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/maus_tratos_animais');
				contagemFaunaFlora[1] = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			contagemTotal[7] = contagemFaunaFlora[0] + contagemFaunaFlora[1];


			try {	// Assistência Social //
				let { data } = await api.get('/tumulos');
				contagemAssistenciaSocial = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			contagemTotal[8] = contagemAssistenciaSocial;


			try {	// Famílias Carentes //
				let { data } = await api.get('/solidarydisposal');
				contagemFamiliasCarentes = data.filter((service) => service.isResolved === true).length;
				data = null;
			}
			catch(e) { console.log(e); }
			contagemTotal[9] = contagemFamiliasCarentes;
	*/	}
		getProblems();
	}, []);
	
	
	const totalSolicitados = new Array (24, 17, 8, 17, 13, 24, 6, 10, 5, 7);
	const totalTotal = 135;
//	const totalTotal = contagemTotal[0] + contagemTotal[1] + contagemTotal[2] + contagemTotal[3] + contagemTotal[4] + contagemTotal[5]
//	+ contagemTotal[6] + contagemTotal[7] + contagemTotal[8] + contagemTotal[9];

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
				/*	data = {[
                		{title: "Conservação Urbana: " + contagemTotal[0], value: parseInt(contagemTotal[0]), color: "#b83333"},
                		{title: "Conservação Rural/Áreas Verdes: " + contagemTotal[1], value: parseInt(contagemTotal[1]), color: "#b83386"},
						{title: "Remoção de Detritos: " + contagemTotal[2], value: parseInt(contagemTotal[2]), color: "#7d33b8"},
						{title: "Vigilância Sanitária: " + contagemTotal[3], value: parseInt(contagemTotal[3]), color: "#2a1b69"},
						{title: "Controle de Pragas: " + contagemTotal[4], value: parseInt(contagemTotal[4]), color: "#3344b8"},
                		{title: "Animais Domésticos: " + contagemTotal[5], value: parseInt(contagemTotal[5]), color: "#3282b8"},
						{title: "Meio Ambiente: " + contagemTotal[6], value: parseInt(contagemTotal[6]), color: "#33b87b"},
                		{title: "Fauna e Flora: " + contagemTotal[7], value: parseInt(contagemTotal[7]), color: "#33b834"},
						{title: "Assistência Social: " + contagemTotal[8], value: parseInt(contagemTotal[8]), color: "#a8b833"},
                		{title: "Famílias Carentes: " + contagemTotal[9], value: parseInt(contagemTotal[9]), color: "#b86333"}
            		]}	*/
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
