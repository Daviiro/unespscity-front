import React, { useState } from "react";
// import { api } from "../../../services/api";
import { Link } from "react-router-dom";
import PagesPieChart from "../../../charts/types/donut";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	MidContentContainer,
	DescriptionText,
} from "../../../components/styled-components/PageStyles";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import GrayLine from "../../../components/styled-components/gray-line";
import Typography from "@mui/material/Typography";
import ListCard from "../../domestic-animals/lost-animals/card-list";
import { ChartContainer } from "../../../charts/types/donut/chart";
import Footer from "../../../components/footer";

const AdocaoAreasAdotadas = () => {
/*	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/public_area_adoption');
				setProblems(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, []);	*/

	const totalDisponiveis = 1;
	const totalAdotadas = 6;

	return (
		<>
			<ContainerBase>
				<Header />
				<ContentContainer>
					<TopContentContainer>
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
						<div style={{ marginTop: "14px" }}>
							<div style={{ textAlign: "center" }}>
								<Typography variant="h4">
									Adoção de Áreas Públicas
								</Typography>
							</div>
							<Link
								to="/adocao_areas_disponiveis"
								style={{ textDecoration: "none" }}
							>
								<DescriptionText>
									Aqui você pode checar a lista de Áreas Públicas passíveis de adoção que 
									já encontram-se adotadas. Para visualizar as disponíveis, clique AQUI.
								</DescriptionText>
							</Link>
						</div>
						<div></div>
					</TopContentContainer>
					<MidContentContainer>
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
					</MidContentContainer>
				</ContentContainer>
				<GrayLine />
				<ChartContainer>
					<h3>
						{" "}
						Áreas públicas disponíveis/resolvidas e Áreas públicas
						adotadas/solicitadas:{" "}
					</h3>
				{/*	{
						problems.map((problem) => (problem.type === "pubic-areas-adoption") (
							<PagesPieChart
								solved={problem.totalResolvidos}
								unsolved={problem.totalSolicitados}
							/>
						))
					}	*/}
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
