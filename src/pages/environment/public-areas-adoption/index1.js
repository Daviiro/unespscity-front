import React, { useState, useEffect } from "react";
import { api } from "../../../services/api";
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

const AdocaoAreasDisponiveis = () => {
/*	const [problems, setProblems] = useState([]);	*/
const [totalAdotadas, setTotalAdotadas] = useState(0);
const [totalDisponiveis, setTotalDisponiveis] = useState(0);

useEffect(() => {
	async function getProblems() {
		try {
			const { data } = await api.get('/public_area_adoption');
			/*setProblems(data);*/
			let totalSolicitados = data.length;
			setTotalDisponiveis(data.filter((service) => service.isAdopted === false).length);
			setTotalAdotadas(totalSolicitados - totalDisponiveis);
		}
		catch (e) {
			console.log(e);
		}
	}
	getProblems();
}, []);

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
								to="/adocao_areas_adotadas"
								style={{ textDecoration: "none" }}
							>
								<DescriptionText>
									Aqui você pode checar a lista das Áreas Públicas passíveis de adoção que encontram-
									se disponíveis. Para visualizar as que já encontram-se adotadas, clique AQUI.
								</DescriptionText>
							</Link>
						</div>
						<div></div>
					</TopContentContainer>
					<MidContentContainer>
					{/*	{
						problems.map((problem) => (
							<ListCard
								source={problem.images}
								nome={problem.owner}
								sobrenome={problem.date}
								descricao={problem.description}
								button="Falar com o dono"
							/>
						))
					}	*/}
						<Link
							to="/adocao_areas_regras"
							style={{ textDecoration: "none" }}
						>
							<ListCard
								source="/assets/img/meio_ambiente.png"
								nome="[Nome]"
								sobrenome="[localização]"
								descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
								button="Regras de adoção"
							/>
						</Link>
						<Link
							to="/adocao_areas_regras"
							style={{ textDecoration: "none" }}
						>
							<ListCard
								source="/assets/img/meio_ambiente.png"
								nome="[Nome]"
								sobrenome="[localização]"
								descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
								button="Regras de adoção"
							/>
						</Link>
						<Link
							to="/adocao_areas_regras"
							style={{ textDecoration: "none" }}
						>
							<ListCard
								source="/assets/img/meio_ambiente.png"
								nome="[Nome]"
								sobrenome="[localização]"
								descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
								button="Regras de adoção"
							/>
						</Link>
						<Link
							to="/adocao_areas_regras"
							style={{ textDecoration: "none" }}
						>
							<ListCard
								source="/assets/img/meio_ambiente.png"
								nome="[Nome]"
								sobrenome="[localização]"
								descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
								button="Regras de adoção"
							/>
						</Link>
						<Link
							to="/adocao_areas_regras"
							style={{ textDecoration: "none" }}
						>
							<ListCard
								source="/assets/img/meio_ambiente.png"
								nome="[Nome]"
								sobrenome="[localização]"
								descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
								button="Regras de adoção"
							/>
						</Link>
						<Link
							to="/adocao_areas_regras"
							style={{ textDecoration: "none" }}
						>
							<ListCard
								source="/assets/img/meio_ambiente.png"
								nome="[Nome]"
								sobrenome="[localização]"
								descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
								button="Regras de adoção"
							/>
						</Link>
					</MidContentContainer>
				</ContentContainer>
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
export default AdocaoAreasDisponiveis;
