import React from "react";
import {
	ContainerBase,
	Content,
	GrayLine,
	ChartContainer,
	ContainerColumn,
	ContainerRow,
} from "./styles";

import Header from "../../components/header";
import { StyledHr } from "../../components/styled-components/StyledHr";
import DashboardButton from "./index-button";
import DashboardChart1 from "../../charts/chart1";
import DashboardChart2 from "../../charts/chart2";
import DashboardChart3 from "../../charts/chart3";
import DashboardChart4 from "../../charts/chart4";
import Footer from "../../components/footer";

const Dashboard = () => {
	return (
		<ContainerBase>
			<Header />
			<Content>
				<ContainerColumn>
					<h1> Dashboard </h1>
					<StyledHr style={{ width: "95%", marginLeft: "-2vw" }} />
					<DashboardChart1 />
					<DashboardButton
						description = "Visualizar novos problemas"
						linkItems={[
							{
								id: 1,
								name: "Conservação Urbana",
								link: "/admin/conservacao_urbana",
							},
							{
								id: 2,
								name: "Conservação Rural/Áreas Verdes",
								link: "/admin/conservacao_rural",
							},
							{
								id: 3,
								name: "Remoção de Detritos",
								link: "/admin/remocao_detritos",
							},
							{
								id: 4,
								name: "Vigilância Sanitária",
								link: "/admin/vigilancia_sanitaria",
							},
							{
								id: 5,
								name: "Controle de Pragas",
								link: "/admin/controle_pragas",
							},
							{
								id: 6,
								name: "Animais Domésticos",
								link: "/admin/animais_domesticos",
							},
							{
								id: 7,
								name: "Meio Ambiente",
								link: "/admin/meio_ambiente",
							},
							{
								id: 8,
								name: "Fauna e Flora",
								link: "/admin/fauna_flora",
							},
							{
								id: 9,
								name: "Assistência Social",
								link: "/admin/assistencia_social",
							},
							{
								id: 10,
								name: "Famílias Carentes",
								link: "/admin/familias_carentes",
							},
							{
								id: 11,
								name: "Serviços Sociais",
								link: "/admin/servicos_sociais",
							},
							{
								id: 12,
								name: "Segurança e Defesa Civil",
								link: "/admin/seguranca_defesa_civil",
							},
							{
								id: 13,
								name: "Botão do Pânico",
								link: "/vias_publicas",
							},
							{
								id: 14,
								name: "Administração Pública",
								link: "/admin/administracao_publica",
							},
							{
								id: 15,
								name: "Central de Notificação e Comunicação",
								link: "/admin/comunicacao",
							},
							{
								id: 16,
								name: "Sensoriamento Móvel Participativo",
								link: "/admin/sensoriamento_remoto",
							},
							{
								id: 17,
								name: "Assossiação Comercial",
								link: "/admin/associacao_comercial",
							},
						]}
					/>
					<DashboardButton
						description = "Mapas de Calor"
						linkItems={[
							{
								id: 1,
								name: "Radar da Dengue",
								link: "/admin/mapas/dengue",
							},
							{
								id: 2,
								name: "Regiões com Alta Poluição",
								link: "/admin/mapas/poluicao",
							},
						]}
					/>
					<GrayLine />
					<ChartContainer> 
						<ContainerRow>
							<DashboardChart2 />
							<DashboardChart3 />
						</ContainerRow>
					</ChartContainer>
					<ChartContainer style = {{ paddingTop: "2vh" }}> 
						<DashboardChart4 />
					</ChartContainer>
				</ContainerColumn>
			</Content>
			<Footer />
		</ContainerBase>
	);
};

export default Dashboard;
