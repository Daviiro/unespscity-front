import React from "react";
import PagesPieChart from "../../../charts/types/donut";

import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	ServiceDescription,
	GrayLine2,
	InputAddressContainer,
	Square,
	Details,
	ChartContainer,
} from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import Input from "../../../components/input";
import InputLocalization from "../../../components/input-localization-button";
import DescriptionInput from "../../../components/description-input";
import InputPhotos from "../../../components/images-input";
import Button from "../../../components/styled-components/form-button";
import GrayLine from "../../../components/styled-components/gray-line";
import Footer from "../../../components/footer";

const MausTratosAnimais = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 25;
	const totalResolvidos = 4;
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_fauna_flora.png"
						titulo="Fauna e Flora"
						linkItems={[
							{
								id: 1,
								name: "Fiscalização de Animais Silvestres",
								link: "/animais_silvestres",
							},
							{
								id: 2,
								name: "Maus tratos à Animais",
								link: "/maus_tratos",
							},
						]}
					/>
					<ContainerColumn>
						<h1> Maus tratos à Animais </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription> 
						<h3> Utilize este serviço para denunciar a prática de maus tratos à animais silvestres ou domésticos. </h3>	
					</ServiceDescription>
					<GrayLine2 />
					<Details>
						<InputLocalization/>
						<p>OU</p>
						<InputAddressContainer>
							<Input title="Endereço:" width="36vw" />
							<Input title="Nº" width="7vw" />
						</InputAddressContainer>
						<Input
							title="Ponto de Referência:"
							placeholder="Opcional"
						/>
						<div>
							<input type="checkbox" id="Maus tratos à Animais Silvestres" />
							<label for="Maus tratos à Animais Silvestres" style={{ fontSize: "14px" }}>
								{" "}
								Maus tratos à Animais Silvestres{" "}
							</label>
						</div>
						<div>
							<input type="checkbox" id="Maus tratos à Animais Domésticos" />
							<label for="Maus tratos à Animais Domésticos" style={{ fontSize: "14px" }}>
								{" "}
								Maus tratos à Animais Domésticos{" "}
							</label>
						</div>
						<DescriptionInput placeholder="Conte-nos em detalhes sobre o problema encontrado, descrevendo o animal também, se possível. Nos ajudará a acionar o serviço ideal para resolver o problema." />
						<InputPhotos />
						<Button text="Enviar" />
					</Details>
				</Square>
				<GrayLine />
				<ChartContainer>
					<h3> Serviços solicitados e serviços efetuados: </h3>
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

export default MausTratosAnimais;
