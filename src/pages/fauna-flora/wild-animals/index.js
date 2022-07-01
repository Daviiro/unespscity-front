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

const AnimaisSilvestres = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 23;
	const totalResolvidos = 14;
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
						<h1> Fiscalização de Animais Silvestres </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription> 
						<h3> Utilize este serviço para denunciar o comércio ilegal de animais silvestres, informar a localização de um deles perdido/preso/em cativeiro, ou ainda informar um deles causando perturbação pública. </h3>	
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
							<input type="checkbox" id="Comércio Ilegal de animais silvestres" />
							<label for="Comércio Ilegal de animais silvestres" style={{ fontSize: "14px" }}>
								{" "}
								Comércio Ilegal de animais selvagens{" "}
							</label>
						</div>
						<div>
							<input type="checkbox" id="Animal Silvestre perdido, preso ou em cativeiro" />
							<label for="Animal Silvestre perdido, preso ou em cativeiro" style={{ fontSize: "14px" }}>
								{" "}
								Animal Selvagem perdido, preso ou em cativeiro{" "}
							</label>
						</div>
						<div>
							<input type="checkbox" id="Animal silvestre causando perturbação pública" />
							<label for="Animal silvestre causando perturbação pública" style={{ fontSize: "14px" }}>
								{" "}
								Animal selvagem causando perturbação pública{" "}
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

export default AnimaisSilvestres;
