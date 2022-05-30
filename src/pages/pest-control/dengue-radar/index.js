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
import InputPhotos from "../../../components/images-input";
import Button from "../../../components/styled-components/form-button";
import GrayLine from "../../../components/styled-components/gray-line";
import footer from "../../../components/footer";

const Dengue = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 93;
	const totalResolvidos = 22;
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_controle_pragas.png"
						titulo="Controle de Pragas"
						linkItems={[
							{
								id: 1,
								name: "Foco de Escorpião",
								link: "/foco_de_escorpiao",
							},
							{
								id: 2,
								name: "Insetos Roedores e Caramujos",
								link: "/insetos_roedores_caramujos",
							},
							{
								id: 3,
								name: "Leishmaniose",
								link: "/leishmaniose",
							},
							{
								id: 4,
								name: "Radar da Dengue",
								link: "/radar_da_dengue",
							},
						]}
					/>
					<ContainerColumn>
						<h1> Radar da Dengue </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Utilize este serviço para informar a localização de focos do mosquito transmissor da Dengue, o pernilongo-rajado (Aedes aegypti)." />
					<Details>
						<a
							style={{ textDecoration: "none" }}
							target="_blank"
							href="https://www.google.com.br/search?q=aedes+aegypti&hl=pt-BR&tbm=isch&source=hp&biw=1496&bih=723&ei=iTmGYrWrF6-G5OUPuI-OuAs&iflsig=AJiK0e8AAAAAYoZHmWnZNcrsQDAjrtAqUIf5D7XKHlYE&oq=aedes+&gs_lcp=CgNpbWcQAxgAMggIABCABBCxAzILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoICAAQsQMQgwFQAFjHCGChEmgAcAB4AIABqwGIAZYGkgEDMS41mAEAoAEBqgELZ3dzLXdpei1pbWc&sclient=img"
						>
							<MiniCard
								source="/assets/img/Radar_da_Dengue.png"
								titulo="Aedes aegypti"
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
						<InputPhotos />
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
export default Dengue;
