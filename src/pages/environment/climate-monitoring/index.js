import React from "react";
import { gql, useSubscription } from '@apollo/client';

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
import ServiceDescription from "../../../components/service-description";
import Footer from "../../../components/footer";

const Monitoring = () => {
	const TEMPERATURE_SUBSCRIPTION = gql`
    subscription temperatureValues($title: String!) {
			temperatureValues(data: $title) {
			title
			longitude
			latitude
			temperature
			humidity
		}	
	}`;

	const { data, loading } = useSubscription(
		TEMPERATURE_SUBSCRIPTION, 
		{ variables: { title: "Temperatura em X Lugar" } }
	);
	console.log(data);
	console.log(loading);

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
						<h1> Monitoramento do Tempo </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Aqui você pode checar o monitoramento do tempo em tempo real. " />
					<Details></Details>
				</Square>
				<Footer />
			</ContainerBase>
		</>
	);
};

export default Monitoring;
