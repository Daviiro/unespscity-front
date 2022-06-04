import React from "react";
import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	Square,
	ChartContainer,
} from "./styles";
import PagesPieChart from "../../../charts/types/donut";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../components/service-description";
import GrayLine from "../../../components/styled-components/gray-line";
import Footer from "../../../components/footer";
import Form from "../../../components/forms";

const Terreno = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 37;
	const totalResolvidos = 17;
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_vigilancia_sanitaria.png"
						titulo="Vigilância Sanitária"
						linkItems={[
							{
								id: 1,
								name: "Limpeza de Piscinas",
								link: "/limpeza_de_piscinas",
							},
							{
								id: 2,
								name: "Limpeza de Terreno",
								link: "/limpeza_de_terreno",
							},
							{
								id: 3,
								name: "Restaurantes/Ambientes Irregulares",
								link: "/restaurantes",
							},
						]}
					/>
					<ContainerColumn>
						<h1> Limpeza de Terreno </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Utilize este serviço para solicitar a limpeza de terrenos públicos pertencentes ao município ou para denunciar terrenos baldios particulares com irregularidades." />
					<Form />
				</Square>
				<GrayLine />
				<ChartContainer>
					<h3> Limpezas solicitadas e efetuadas: </h3>
					<PagesPieChart
						solved={totalResolvidos}
						unsolved={totalSolicitados}
					/>
				</ChartContainer>
				<Footer />
			</ContainerBase>
		</>
	);
};
export default Terreno;
