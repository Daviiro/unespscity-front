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

const Pracas = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 70;
	const totalResolvidos = 62;
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_conservacao_rural.png"
						titulo="Áreas Verdes"
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
						<h1> Praças </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Utilize este serviço para informar ocorrências em praças públicas da cidade, como solicitação de limpeza, informar ocupação indevida, problemas infraestruturais e demais irregularidades e/ou sugestões." />
					<Form />
				</Square>
				<GrayLine />
				<ChartContainer>
					<h3> Resgastes solicitados e resolvidos: </h3>
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
export default Pracas;
