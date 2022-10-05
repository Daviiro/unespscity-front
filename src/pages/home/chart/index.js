import React, { useEffect } from "react";
import { api } from "../../../services/api";
import ProgressBar from "../../../charts/types/progress";
import { ContainerRow } from "./styles";

const ChartHome = () => {
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


	const maxValue = 24;
/*	let maxValue = 0;
	for (var i = 0; i < 10; i++) {
		if (contagemTotal[i] > maxValue) { 
			maxValue = contagemTotal[i]; 
		}
	} */

	
	return (
		<>
			<h3 style={{ marginTop: "0vh", marginBottom: "5.5vh" }}>
				{" "}
				Total de Problemas Resolvidos:{" "}
			</h3>
			<ContainerRow>
				<img
					src="/assets/img/home_conservacao_urbana.png"
					alt="Conservação Urbana"
				/>
				<ProgressBar value={24} max={maxValue} /> 
			{/*	<ProgressBar value={contagemTotal[0]} max={maxValue} /> */}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_conservacao_rural.png"
					alt="Conservação Rural/Áreas Verdes"
				/>
				<ProgressBar value={17} max={maxValue} /> 
			{/*	<ProgressBar value={contagemTotal[1]} max={maxValue} /> */}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_remocao_detritos.png"
					alt="Remoção de Detritos"
				/>
				<ProgressBar value={8} max={maxValue} /> 
			{/*	<ProgressBar value={contagemTotal[2]} max={maxValue} /> */}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_vigilancia_sanitaria.png"
					alt="Vigilância Sanitária"
				/>
				<ProgressBar value={17} max={maxValue} /> 
			{/*	<ProgressBar value={contagemTotal[3]} max={maxValue} /> */}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_controle_pragas.png"
					alt="Controle de Pragas"
				/>
				<ProgressBar value={13} max={maxValue} /> 
			{/*	<ProgressBar value={contagemTotal[4]} max={maxValue} /> */}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_animais_domesticos.png"
					alt="Animais Domésticos"
				/>
				<ProgressBar value={24} max={maxValue} /> 
			{/*	<ProgressBar value={contagemTotal[5]} max={maxValue} /> */}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_meio_ambiente.png"
					alt="Meio Ambiente"
				/>
				<ProgressBar value={6} max={maxValue} /> 
			{/*	<ProgressBar value={contagemTotal[6]} max={maxValue} /> */}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_fauna_flora.png"
					alt="Fauna e Flora"
				/>
				<ProgressBar value={10} max={maxValue} /> 
			{/*	<ProgressBar value={contagemTotal[7]} max={maxValue} /> */}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_assistencia_social.png"
					alt="Assistência Social"
				/>
				<ProgressBar value={5} max={maxValue} /> 
			{/*	<ProgressBar value={contagemTotal[8]} max={maxValue} /> */}
			</ContainerRow>
			<ContainerRow>
				<img
					src="/assets/img/home_familias_carentes.png"
					alt="Famílias Carentes"
				/>
				<ProgressBar value={7} max={maxValue} /> 
			{/*	<ProgressBar value={contagemTotal[9]} max={maxValue} /> */}
			</ContainerRow>
		</>
	);
};

export default ChartHome;
