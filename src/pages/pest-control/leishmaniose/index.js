import React from "react";
import HomePieChart from "../../../charts/donut";

import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	InputAddressContainer,
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

const Leishmaniose = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 92;
	const totalResolvidos = 14;
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_controle_pragas.png"
						titulo="Controle de Pragas"
					/>
					<ContainerColumn>
						<h1> Leishmaniose </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Utilize este serviço para informar a localização de focos do mosquito transmissor da Leishmaniose, o mosquito-palha (Phlebotomus pappatasi)." />
					<Details>
						<a
							style={{ textDecoration: "none" }}
							target="_blank"
							href="https://www.google.com.br/search?q=mosquito+palha&tbm=isch&ved=2ahUKEwi07taox-v3AhVVMrkGHdwDBw8Q2-cCegQIABAA&oq=mosquito+palha&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgAEB46CwgAEIAEELEDEIMBOgQIABBDOggIABCxAxCDAVDwCVjVH2CmJmgAcAB4AIABlAOIAbESkgEKMS4xMi4wLjEuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=BTeGYvTXNtXk5OUP3IeceA&bih=723&biw=1496&hl=pt-BR"
						>
							<MiniCard
								source="/assets/img/Leishmaniose.png"
								titulo="Mosquito-Palha"
							/>
						</a>
						<InputAddressContainer>
							<Input title="Endereço:" width="36vw" />
							<Input title="Nº" width="7vw" />
						</InputAddressContainer>
						<Input
							title="Ponto de Referência:"
							placeholder="Opcional"
						/>
						<DescriptionInput placeholder="Conte-nos em detalhes sobre o problema encontrado." />
						<Button text="Enviar" />
					</Details>
				</Square>
				<GrayLine />
				<ChartContainer>
					<h3> Eliminações solicitadas e efetuadas: </h3>
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
export default Leishmaniose;
