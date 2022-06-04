import React from "react";
import PagesPieChart from "../../../charts/types/donut";

import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	Square,
	ChartContainer,
} from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../components/service-description";
import GrayLine from "../../../components/styled-components/gray-line";
import Footer from "../../../components/footer";
import Form from "../../../components/forms";

const Pontes = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 97;
	const totalResolvidos = 12;
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_conservacao_rural.png"
						titulo="Conservação Rural"
						linkItems={[
							{
								id: 1,
								name: "Parques",
								link: "/parques",
							},
							{
								id: 2,
								name: "Pontes em estradas rurais",
								link: "/pontes_em_estradas_rurais",
							},
							{
								id: 3,
								name: "Praças",
								link: "/pracas",
							},
						]}
					/>
					<ContainerColumn>
						<h1> Pontes em Estradas Rurais </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Utilize este serviço para informar ocorrências em pontes rurais sob os limites do município, como problemas infraestruturais, obstruções (como acúmulo de terra ou invasão de vegetação), falha estrututal e/ou semelhantes." />
					<Form />
				</Square>
				<GrayLine />
				<ChartContainer>
					<h3> Serviços solicitados e resolvidos: </h3>
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
export default Pontes;
