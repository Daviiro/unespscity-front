import React, { useState } from "react";
import { Link } from "react-router-dom";
import PagesPieChart from "../../../charts/types/donut";

import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	Square,
	Details,
} from "../../public-administration/know-city-managers/styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import GrayLine from "../../../components/styled-components/gray-line";
import ServiceDescription from "../../../components/service-description";
import ListCard from "../../domestic-animals/lost-animals/card-list";
import { ChartContainer } from "../../../charts/types/donut/chart";
import Footer from "../../../components/footer";

const AdocaoAreasAdotadas = () => {
	const [gestores, setGestores] = useState([]);
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalDisponiveis = 16;
	const totalAdotadas = 2;

	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_meio_ambiente.png"
						titulo="Meio Ambiente"
						linkItems={[
							{
								id: 1,
								name: "Adoção de Áreas Públicas",
								link: "/adocao_areas_opcoes",
							},
							{
								id: 2,
								name: "Monitoramento do Tempo",
								link: "/monitoramento",
							},
							{
								id: 3,
								name: "Coleta de Lixo",
								link: "/coleta-de-lixo",
							},
						]}
					/>
					<ContainerColumn>
						<h1> Adoção de Áreas Públicas </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<Link
						to="/adocao_areas_disponiveis"
						style={{ textDecoration: "none" }}
					>
						<ServiceDescription description="Aqui você pode checar a lista de Áreas Públicas passíveis de adoção que já encontram-se adotadas. Para visualizar as disponíveis, clique AQUI." />
					</Link>
					<Details>
						<ListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							button="Falar com o dono"
						/>
						<ListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							button="Falar com o dono"
						/>
						<ListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							button="Falar com o dono"
						/>
						<ListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							button="Falar com o dono"
						/>
						<ListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							button="Falar com o dono"
						/>
						<ListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							button="Falar com o dono"
						/>
					</Details>
				</Square>
				<GrayLine />
				<ChartContainer>
					<h3>
						{" "}
						Áreas públicas disponíveis/resolvidas e Áreas públicas
						adotadas/solicitadas:{" "}
					</h3>
					<PagesPieChart
						solved={totalDisponiveis}
						unsolved={totalAdotadas}
					/>
				</ChartContainer>
				<Footer />
			</ContainerBase>
		</>
	);
};
export default AdocaoAreasAdotadas;
