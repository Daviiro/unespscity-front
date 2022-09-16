import React, { useEffect } from "react";
import { ContainerRow, Card, GrayLine } from "./styles";
import { api } from "../../services/api";

const DashboardChart1 = () => {
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
				contagemConservacaoUrbana[0] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/paviment');
				contagemConservacaoUrbana[1] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/facilities_inspection');
				contagemConservacaoUrbana[2] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/monument');
				contagemConservacaoUrbana[3] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/public_roads');
				contagemConservacaoUrbana[4] = data.filter((service) => service.isResolved === false).length;
				data = null;

				contagemTotal[0] = contagemConservacaoUrbana[0] + contagemConservacaoUrbana[1] + contagemConservacaoUrbana[2] + 
				contagemConservacaoUrbana[3] + contagemConservacaoUrbana[4];
			}
			catch(e) { console.log(e); }


			try {	// Conservação Rural/Áreas Verdes //
				let { data } = await api.get('/rurais');
				contagemConservacaoRural[0] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/parques');
				contagemConservacaoRural[1] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/praca');
				contagemConservacaoRural[2] = data.filter((service) => service.isResolved === false).length;
				data = null;

				contagemTotal[1] = contagemConservacaoRural[0] + contagemConservacaoRural[1] + contagemConservacaoRural[2];
			}
			catch(e) { console.log(e); }


			try {	// Remoção de Detritos //
				let { data } = await api.get('/removetrash');
				contagemRemocaoDetritos[0] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/removaldeadanimals');
				contagemRemocaoDetritos[1] = data.filter((service) => service.isResolved === false).length;
				data = null;

				contagemTotal[2] = contagemRemocaoDetritos[0] + contagemRemocaoDetritos[1];
			}
			catch(e) { console.log(e); }


			try {	// Vigilância Sanitária //
				let { data } = await api.get('/limpeza_terreno');
				contagemVigilanciaSanitaria[0] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/limpeza_piscinas');
				contagemVigilanciaSanitaria[1] = data.filter((service) => service.isResolved === false).length;
				data = null;

				contagemTotal[3] = contagemVigilanciaSanitaria[0] + contagemVigilanciaSanitaria[1];
			}
			catch(e) { console.log(e); }


			try {	// Controle de Pragas //
				let { data } = await api.get('/radar_dengue');
				contagemControlePragas[0] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/foco_escorpiao');
				contagemControlePragas[1] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/leishmaniose');
				contagemControlePragas[2] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/insetos_roedores_caramujos');
				contagemControlePragas[3] = data.filter((service) => service.isResolved === false).length;
				data = null;

				contagemTotal[4] = contagemControlePragas[0] + contagemControlePragas[1] + contagemControlePragas[2] + 
				contagemControlePragas[3];
			}
			catch(e) { console.log(e); }


			try {	// Animais Domésticos //
				let { data } = await api.get('/animais_abandonados');
				contagemAnimaisDomesticos[0] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/animais_sinantropicos');
				contagemAnimaisDomesticos[1] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/animais_perdidos');
				contagemAnimaisDomesticos[2] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/adocao_animais');
				contagemAnimaisDomesticos[3] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/maus_tratos_animais'); // ou animalviolence //
				contagemAnimaisDomesticos[4] = data.filter((service) => service.isResolved === false).length;
				data = null;

				contagemTotal[5] = contagemAnimaisDomesticos[0] + contagemAnimaisDomesticos[1] + contagemAnimaisDomesticos[2] + 
				contagemAnimaisDomesticos[3] + contagemAnimaisDomesticos[4];
			}
			catch(e) { console.log(e); }


			try {	// Meio Ambiente //
				let { data } = await api.get('/public_area_adoption');
				contagemMeioAmbiente = data.filter((service) => service.isResolved === false).length;
				data = null;

				contagemTotal[6] = contagemMeioAmbiente;
			}
			catch(e) { console.log(e); }


			try {	// Fauna e Flora //
				let { data } = await api.get('/wildanimals');
				contagemFaunaFlora[0] = data.filter((service) => service.isResolved === false).length;
				data = null;

				data = await api.get('/maus_tratos_animais');
				contagemFaunaFlora[1] = data.filter((service) => service.isResolved === false).length;
				data = null;

				contagemTotal[7] = contagemFaunaFlora[0] + contagemFaunaFlora[1];
			}
			catch(e) { console.log(e); }


			try {	// Assistência Social //
				let { data } = await api.get('/tumulos');
				contagemAssistenciaSocial = data.length;
				data = null;

				contagemTotal[8] = contagemAssistenciaSocial;
			}
			catch(e) { console.log(e); }


			try {	// Famílias Carentes //
				let { data } = await api.get('/solidarydisposal');
				contagemFamiliasCarentes = data.filter((service) => service.isResolved === false).length;
				data = null;

				contagemTotal[9] = contagemFamiliasCarentes;
			}
			catch(e) { console.log(e); }
		}
		getProblems();
	}, []);


	return (
		<>
			<h4 style = {{ marginTop: "5vh", marginLeft: "2.75vw" }}> Novas Solicitações de Serviços: </h4>
			<ContainerRow>
				<Card>
					<img src="/assets/img/home_conservacao_urbana.png" alt="Conservação Urbana"/>
					<GrayLine />
				{/*	<h5> 16 </h5> */}
					<h5> {contagemTotal[0]} </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_conservacao_rural.png" alt="Conservação Rural/Áreas Verdes" />
					<GrayLine />
				{/*	<h5> 7 </h5> */}
					<h5> {contagemTotal[1]} </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_remocao_detritos.png" alt="Remoção de Detritos" />
					<GrayLine />
				{/*	<h5> 8 </h5> */}
					<h5> {contagemTotal[2]} </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_vigilancia_sanitaria.png" alt="Vigilância Sanitária"/>
					<GrayLine />
				{/*	<h5> 13 </h5> */}
					<h5> {contagemTotal[3]} </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_controle_pragas.png" alt="Controle de Pragas" />
					<GrayLine />
				{/*	<h5> 20 </h5> */}
					<h5> {contagemTotal[4]} </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_animais_domesticos.png" alt="Animais Domésticos" />
					<GrayLine />
				{/*	<h5> 25 </h5> */}
					<h5> {contagemTotal[5]} </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_meio_ambiente.png" alt="Meio Ambiente" />
					<GrayLine />
				{/*	<h5> 1 </h5> */}
					<h5> {contagemTotal[6]} </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_fauna_flora.png" alt="Fauna e Flora" />
					<GrayLine />
				{/*	<h5> 10 </h5> */}
					<h5> {contagemTotal[7]} </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_assistencia_social.png" alt="Assistência Social" />
					<GrayLine />
				{/*	<h5> 5 </h5> */}
					<h5> {contagemTotal[8]} </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_familias_carentes.png" alt="Famílias Carentes" />
					<GrayLine />
				{/*	<h5> 2 </h5> */}
					<h5> {contagemTotal[9]} </h5>
				</Card>
			</ContainerRow>
			<GrayLine style = {{ marginTop: "7vh" }}/>
		</>
	);
};

export default DashboardChart1;
