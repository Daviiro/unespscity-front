import React, { useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { api } from "../../../../services/api";
import {
	ContainerBase,
	ChartContainer,
	ContainerColumn,
	ContainerRow
} from "../../styles";
import MiniCard from "../../../../components/mini-card";
import { MidContentContainer } from "../../../../components/styled-components/PageStyles";
import DashboardDescription from "../../../../components/styled-components/dashboard-description";

const Dashboard2 = () => {
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

	useEffect(() => {
		async function getProblems() {
		/*	try {	// Conservação Urbana //
				let { data } = await api.get('/get_all_street_lighting');
				contagemConservacaoUrbana[0] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/paviment');
				contagemConservacaoUrbana[1] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/facilities_inspection');
				contagemConservacaoUrbana[2] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/monument');
				contagemConservacaoUrbana[3] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/public_roads');
				contagemConservacaoUrbana[4] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Conservação Rural/Áreas Verdes //
				let { data } = await api.get('/rurais');
				contagemConservacaoRural[0] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/parques');
				contagemConservacaoRural[1] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/praca');
				contagemConservacaoRural[2] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Remoção de Detritos //
				let { data } = await api.get('/removetrash');
				contagemRemocaoDetritos[0] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/removaldeadanimals');
				contagemRemocaoDetritos[1] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Vigilância Sanitária //
				let { data } = await api.get('/limpeza_terreno');
				contagemVigilanciaSanitaria[0] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/limpeza_piscinas');
				contagemVigilanciaSanitaria[1] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Controle de Pragas //
				let { data } = await api.get('/radar_dengue');
				contagemControlePragas[0] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/foco_escorpiao');
				contagemControlePragas[1] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/leishmaniose');
				contagemControlePragas[2] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/insetos_roedores_caramujos');
				contagemControlePragas[3] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Animais Domésticos //
				let { data } = await api.get('/animais_abandonados');
				contagemAnimaisDomesticos[0] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/animais_sinantropicos');
				contagemAnimaisDomesticos[1] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/animais_perdidos');
				contagemAnimaisDomesticos[2] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/adocao_animais');
				contagemAnimaisDomesticos[3] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/maus_tratos_animais'); // ou animalviolence //
				contagemAnimaisDomesticos[4] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Meio Ambiente //
				let { data } = await api.get('/public_area_adoption');
				contagemMeioAmbiente = data.length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Fauna e Flora //
				let { data } = await api.get('/wildanimals');
				contagemFaunaFlora[0] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
			try {
				data = await api.get('/maus_tratos_animais');
				contagemFaunaFlora[1] = data.length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Assistência Social //
				let { data } = await api.get('/tumulos');
				contagemAssistenciaSocial = data.length;
				data = null;
			}
			catch(e) { console.log(e); }


			try {	// Famílias Carentes //
				let { data } = await api.get('/solidarydisposal');
				contagemFamiliasCarentes = data.length;
				data = null;
			}
			catch(e) { console.log(e); }
	*/	}
		getProblems();
	}, []);

    contagemConservacaoUrbana = [6, 3, 6, 4, 3];
    contagemConservacaoRural = [5, 2, 5];
    contagemRemocaoDetritos = [4, 7];
    contagemVigilanciaSanitaria = [7, 6];
    contagemControlePragas = [4, 5, 3, 5];
    contagemAnimaisDomesticos = [6, 4, 3, 5, 7];
    contagemMeioAmbiente = 4;
    contagemFaunaFlora = [4, 7];
    contagemAssistenciaSocial = 3;
    contagemFamiliasCarentes = 5;

	return (
		<ContainerBase>
			<MidContentContainer>
				<ChartContainer style={{ height: "50vh", width: "77%", marginLeft: "-3.5vw" }}>
            		<ContainerRow>
                		<MiniCard
							source="/assets/img/home_conservacao_urbana.png"
							titulo="Conservação Urbana"
                		/>
                		<PieChart
            				center = {[62, 62]}
							data = {[
                				{title: "Iluminação Pública: " + contagemConservacaoUrbana[0], value: parseInt(contagemConservacaoUrbana[0]), color: "#b83333"},
								{title: "Pavimentação: " + contagemConservacaoUrbana[1], value: parseInt(contagemConservacaoUrbana[1]), color: "#2a1b69"},
								{title: "Fiscalização de Instalações: " + contagemConservacaoUrbana[2], value: parseInt(contagemConservacaoUrbana[2]), color: "#3344b8"},
								{title: "Monumentos e Chafarizes: " + contagemConservacaoUrbana[3], value: parseInt(contagemConservacaoUrbana[3]), color: "#33b87b"},
								{title: "Vias Públicas: " + contagemConservacaoUrbana[4], value: parseInt(contagemConservacaoUrbana[4]), color: "#a8b833"}
            				]}
            				labelPosition = {50}
            				lengthAngle = {360}
            				lineWidth = {30}
            				radius = {50}
            				viewBoxSize = {[125, 125]}
        				/>
						<ContainerColumn style={{ height: "100%", justifyContent: "center", marginRight: "-15vw" }}>
							<DashboardDescription color="#b83333" label="Iluminação Pública"/>
							<DashboardDescription color="#2a1b69" label="Pavimentação"/>
							<DashboardDescription color="#3344b8" label="Fiscalização de Instalações"/>
							<DashboardDescription color="#33b87b" label="Monumentos e Chafarizes"/>
							<DashboardDescription color="#a8b833" label="Vias Públicas"/>
						</ContainerColumn>
            		</ContainerRow>
				</ChartContainer>
				<ChartContainer style={{ height: "50vh", width: "77%", marginLeft: "-3.5vw" }}>
            		<ContainerRow>
            			<MiniCard
							source="/assets/img/home_conservacao_rural.png"
							titulo="Conservação Rural"
                		/>
                		<PieChart
            				center = {[62, 62]}
							data = {[
                				{title: "Pontes em Estradas Rurais: " + contagemConservacaoRural[0], value: parseInt(contagemConservacaoRural[0]), color: "#b83333"},
								{title: "Parques: " + contagemConservacaoRural[1], value: parseInt(contagemConservacaoRural[1]), color: "#2a1b69"},
								{title: "Praças: " + contagemConservacaoRural[2], value: parseInt(contagemConservacaoRural[2]), color: "#3344b8"}
            				]}
            				labelPosition = {50}
            				lengthAngle = {360}
            				lineWidth = {30}
            				radius = {50}
            				viewBoxSize = {[125, 125]}
        				/>
						<ContainerColumn style={{ height: "100%", justifyContent: "center", marginRight: "-15vw" }}>
							<DashboardDescription color="#b83333" label="Pontes em Estradas Rurais"/>
							<DashboardDescription color="#2a1b69" label="Parques"/>
							<DashboardDescription color="#3344b8" label="Praças"/>
						</ContainerColumn>
            		</ContainerRow>
				</ChartContainer>
				<ChartContainer style={{ height: "50vh", width: "77%", marginLeft: "-3.5vw" }}>
            		<ContainerRow>
            			<MiniCard
							source="/assets/img/home_remocao_detritos.png"
							titulo="Remoção de Detritos"
                		/>
                		<PieChart
            				center = {[62, 62]}
							data = {[
                				{title: "Resíduos Sólidos: " + contagemRemocaoDetritos[0], value: parseInt(contagemRemocaoDetritos[0]), color: "#b83333"},
								{title: "Animais Mortos: " + contagemRemocaoDetritos[1], value: parseInt(contagemRemocaoDetritos[1]), color: "#a8b833"}
            				]}
            				labelPosition = {50}
            				lengthAngle = {360}
            				lineWidth = {30}
            				radius = {50}
            				viewBoxSize = {[125, 125]}
        				/>
						<ContainerColumn style={{ height: "100%", justifyContent: "center", marginRight: "-15vw" }}>
							<DashboardDescription color="#b83333" label="Resíduos Sólidos"/>
							<DashboardDescription color="#a8b833" label="Animais Mortos"/>
						</ContainerColumn>
            		</ContainerRow>
				</ChartContainer>
				<ChartContainer style={{ height: "50vh", width: "77%", marginLeft: "-3.5vw" }}>
            		<ContainerRow>
            			<MiniCard
							source="/assets/img/home_vigilancia_sanitaria.png"
							titulo="Vigilância Sanitária"
                		/>
                		<PieChart
            				center = {[62, 62]}
							data = {[
								{title: "Limpeza de Terreno: " + contagemVigilanciaSanitaria[0], value: parseInt(contagemVigilanciaSanitaria[0]), color: "#3344b8"},
								{title: "Limpeza de Piscinas: " + contagemVigilanciaSanitaria[1], value: parseInt(contagemVigilanciaSanitaria[1]), color: "#33b87b"}
            				]}
            				labelPosition = {50}
            				lengthAngle = {360}
            				lineWidth = {30}
            				radius = {50}
            				viewBoxSize = {[125, 125]}
        				/>
						<ContainerColumn style={{ height: "100%", justifyContent: "center", marginRight: "-15vw" }}>
							<DashboardDescription color="#3344b8" label="Limpeza de Terreno"/>
							<DashboardDescription color="#33b87b" label="Limpeza de Piscinas"/>
						</ContainerColumn>
            		</ContainerRow>
				</ChartContainer>
				<ChartContainer style={{ height: "50vh", width: "77%", marginLeft: "-3.5vw" }}>
            		<ContainerRow>
            			<MiniCard
							source="/assets/img/home_controle_pragas.png"
							titulo="Controle de Pragas"
                		/>
                		<PieChart
            				center = {[62, 62]}
							data = {[
                				{title: "Radar da Dengue: " + contagemControlePragas[0], value: parseInt(contagemControlePragas[0]), color: "#b83333"},
								{title: "Foco de Escorpião: " + contagemControlePragas[1], value: parseInt(contagemControlePragas[1]), color: "#2a1b69"},
								{title: "Leishmaniose: " + contagemControlePragas[2], value: parseInt(contagemControlePragas[2]), color: "#33b87b"},
								{title: "Roedores/Insetos/Caramujos: " + contagemControlePragas[3], value: parseInt(contagemControlePragas[3]), color: "#a8b833"}
            				]}
            				labelPosition = {50}
            				lengthAngle = {360}
            				lineWidth = {30}
            				radius = {50}
            				viewBoxSize = {[125, 125]}
        				/>
						<ContainerColumn style={{ height: "100%", justifyContent: "center", marginRight: "-15vw" }}>
							<DashboardDescription color="#b83333" label="Radar da Dengue"/>
							<DashboardDescription color="#2a1b69" label="Foco de Escorpião"/>
							<DashboardDescription color="#33b87b" label="Leishmaniose"/>
							<DashboardDescription color="#a8b833" label="Roedores/Insetos/Caramujos"/>
						</ContainerColumn>
            		</ContainerRow>
				</ChartContainer>
				<ChartContainer style={{ height: "50vh", width: "77%", marginLeft: "-3.5vw" }}>
            		<ContainerRow>
            			<MiniCard
							source="/assets/img/home_animais_domesticos.png"
							titulo="Animais Domésticos"
                		/>
                		<PieChart
            				center = {[62, 62]}
							data = {[
                				{title: "Animais Abandonados: " + contagemAnimaisDomesticos[0], value: parseInt(contagemAnimaisDomesticos[0]), color: "#b83333"},
								{title: "Animais Sinantrópicos: " + contagemAnimaisDomesticos[1], value: parseInt(contagemAnimaisDomesticos[1]), color: "#2a1b69"},
								{title: "Animais Perdidos: " + contagemAnimaisDomesticos[2], value: parseInt(contagemAnimaisDomesticos[2]), color: "#3344b8"},
								{title: "Adoção: " + contagemAnimaisDomesticos[3], value: parseInt(contagemAnimaisDomesticos[3]), color: "#33b87b"},
								{title: "Maus-tratos animais: " + contagemAnimaisDomesticos[4], value: parseInt(contagemAnimaisDomesticos[4]), color: "#a8b833"}
            				]}
            				labelPosition = {50}
            				lengthAngle = {360}
            				lineWidth = {30}
            				radius = {50}
            				viewBoxSize = {[125, 125]}
        				/>
						<ContainerColumn style={{ height: "100%", justifyContent: "center", marginRight: "-15vw" }}>
							<DashboardDescription color="#b83333" label="Animais Abandonados"/>
							<DashboardDescription color="#2a1b69" label="Animais Sinantrópicos"/>
							<DashboardDescription color="#3344b8" label="Animais Perdidos"/>
							<DashboardDescription color="#33b87b" label="Adoção"/>
							<DashboardDescription color="#a8b833" label="Maus-tratos animais"/>
						</ContainerColumn>
            		</ContainerRow>
				</ChartContainer>
				<ChartContainer style={{ height: "50vh", width: "77%", marginLeft: "-3.5vw" }}>
            		<ContainerRow>
            			<MiniCard
							source="/assets/img/home_meio_ambiente.png"
							titulo="Meio Ambiente"
                		/>
                		<PieChart
            				center = {[62, 62]}
							data = {[
								{title: "Adoção de Áreas Públicas: " + contagemMeioAmbiente, value: parseInt(contagemMeioAmbiente), color: "#3344b8"}
            				]}
            				labelPosition = {50}
            				lengthAngle = {360}
            				lineWidth = {30}
            				radius = {50}
            				viewBoxSize = {[125, 125]}
        				/>
						<ContainerColumn style={{ height: "100%", justifyContent: "center", marginRight: "-15vw" }}>
							<DashboardDescription color="#3344b8" label="Adoção de Áreas Públicas"/>
						</ContainerColumn>
            		</ContainerRow>
				</ChartContainer>
				<ChartContainer style={{ height: "50vh", width: "77%", marginLeft: "-3.5vw" }}>
            		<ContainerRow>
            			<MiniCard
							source="/assets/img/home_fauna_flora.png"
							titulo="Fauna e Flora"
                		/>
                		<PieChart
            				center = {[62, 62]}
							data = {[
                				{title: "Fiscalização de Animais Silvestres: " + contagemFaunaFlora[0], value: parseInt(contagemFaunaFlora[0]), color: "#b83333"},
								{title: "Maus-tratos animais: " + contagemFaunaFlora[1], value: parseInt(contagemFaunaFlora[1]), color: "#2a1b69"}
            				]}
            				labelPosition = {50}
            				lengthAngle = {360}
            				lineWidth = {30}
            				radius = {50}
            				viewBoxSize = {[125, 125]}
        				/>
						<ContainerColumn style={{ height: "100%", justifyContent: "center", marginRight: "-15vw" }}>
							<DashboardDescription color="#b83333" label="Fiscalização de Animais Silvestres"/>
							<DashboardDescription color="#2a1b69" label="Maus-tratos animais"/>
						</ContainerColumn>
            		</ContainerRow>
				</ChartContainer>
				<ChartContainer style={{ height: "50vh", width: "77%", marginLeft: "-3.5vw" }}>
            		<ContainerRow>
            			<MiniCard
							source="/assets/img/home_assistencia_social.png"
							titulo="Assistência Social"
                		/>
                		<PieChart
            				center = {[62, 62]}
							data = {[
								{title: "Cadastro de Falecidos e Túmulos: " + contagemAssistenciaSocial, value: parseInt(contagemAssistenciaSocial), color: "#a8b833"}
            				]}
            				labelPosition = {50}
            				lengthAngle = {360}
            				lineWidth = {30}
            				radius = {50}
            				viewBoxSize = {[125, 125]}
        				/>
						<ContainerColumn style={{ height: "100%", justifyContent: "center", marginRight: "-15vw" }}>
							<DashboardDescription color="#a8b833" label="Cadastro de Falecidos e Túmulos"/>
						</ContainerColumn>
            		</ContainerRow>
				</ChartContainer>
				<ChartContainer style={{ height: "50vh", width: "77%", marginLeft: "-3.5vw", marginBottom: "15vh" }}>
            		<ContainerRow>
            			<MiniCard
							source="/assets/img/home_familias_carentes.png"
							titulo="Famílias Carentes"
                		/>
                		<PieChart
            				center = {[62, 62]}
							data = {[
								{title: "Descarte Solidário: " + contagemFamiliasCarentes, value: parseInt(contagemFamiliasCarentes), color: "#33b87b"}
            				]}
            				labelPosition = {50}
            				lengthAngle = {360}
            				lineWidth = {30}
            				radius = {50}
            				viewBoxSize = {[125, 125]}
        				/>
						<ContainerColumn style={{ height: "100%", justifyContent: "center", marginRight: "-15vw" }}>
							<DashboardDescription color="#33b87b" label="Descarte Solidário"/>
						</ContainerColumn>
            		</ContainerRow>
				</ChartContainer>
			</MidContentContainer>
		</ContainerBase>
	);
};

export default Dashboard2;
