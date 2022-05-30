import React from "react";
import HomePieChart from "../../../charts/donut";

import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	Square,
	Details,
	ChartContainer,
} from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../components/service-description";
import Input from "../../../components/input";
import DescriptionInput from "../../../components/description-input";
import Button from "../../../components/styled-components/form-button";
import GrayLine from "../../../components/styled-components/gray-line";
import footer from "../../../components/footer";
import InputLocalization from "../../../components/user-location-input";
import InputPhotos from "../../../components/images-input";

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
					<Details>
						<InputLocalization />
						<p>OU</p>
						<Input
							title="Ponto de Referência:"
							placeholder="Opcional"
						/>
						<DescriptionInput
							title="Descrição:"
							placeholder="Conte-nos em detalhes sobre o problema encontrado."
						/>
						<InputPhotos />
						<Button text="Enviar" />
					</Details>
				</Square>
				<GrayLine />
				<ChartContainer>
					<h3> Serviços solicitados e resolvidos: </h3>
					<HomePieChart
						solved={totalResolvidos}
						unsolved={totalSolicitados}
					/>
				</ChartContainer>
				<footer />
			</ContainerBase>
		</>
	);
};
export default Pontes;
